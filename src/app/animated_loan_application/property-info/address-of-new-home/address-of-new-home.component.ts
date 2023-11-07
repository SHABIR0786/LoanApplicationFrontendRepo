import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../../../services/data.service";
import { LoanApplicationService } from "../../../services/loan-application.service";
import { ILoanApplicationModel } from "../../../interfaces/ILoanApplicationModel";
import { Result } from "common";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ILoanDetailModel } from "../../../interfaces/ILoanDetailModel";

@Component({
  selector: "app-address-of-new-home",
  templateUrl: "./address-of-new-home.component.html",
  styleUrls: ["./address-of-new-home.component.css"],
})
export class AddressOfNewHomeComponent implements OnInit {
  data: ILoanDetailModel = {};
  form: FormGroup;
  states = [];

  constructor(
    private _route: Router,
    private _dataService: DataService,
    private _loanApplicationService: LoanApplicationService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const response: Result<ILoanApplicationModel> = this._activatedRoute
      .snapshot.data.loanApp;
    console.log(response);
    if (response && response.success) {
      this._dataService.loanApplication = response.result;
      this.data = response.result.loanDetails;
      if (this.form) this.form.patchValue(response.result.loanDetails);
    }
    this.initForm();
    this.loadStates();
  }

  loadStates() {
    this.states = [
      {
        id: 6,
        name: "CA",
      },
    ];
  }

  initForm() {
    this.form = new FormGroup({
      address: new FormControl(this.data.address, [Validators.required]),
      unit: new FormControl(this.data.unit, [Validators.required]),
      stateId: new FormControl(this.data.stateId, [Validators.required]),
      city: new FormControl(this.data.city, [Validators.required]),
      zipCode: new FormControl(this.data.zipCode, [Validators.required]),
    });
  }

  sanitizeFormData(formData) {
    formData = Object.assign({}, formData);
    for (const key in formData) {
      if (key && formData.hasOwnProperty(key) && formData[key]) {
        if (
          typeof formData[key] === "object" &&
          Object.keys(formData[key]).length === 0
        ) {
          formData[key] = undefined;
        }
      }
    }
    return formData;
  }

  submitForm() {
    const formData = this.sanitizeFormData(this._dataService.loanApplication);
    this._loanApplicationService
      .post<Result<ILoanApplicationModel>>("Add", formData)
      .subscribe(
        (response) => {
          this._dataService.loanApplication = response.result;
          this.form.patchValue(this._dataService.loanApplication.loanDetails);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  proceedToNext() {
    let fields = ["address", "unit", "stateId", "city", "zipCode"];
    const hasError = fields.some(
      (field) => this.form.get(field) && !this.form.get(field).valid
    );

    if (hasError) {
      fields.forEach(
        (field) => this.form.get(field) && this.form.get(field).markAsTouched()
      );
    } else {
      this._dataService.loanApplication.loanDetails = this.data;
      this.submitForm();
      this._activatedRoute.queryParams.subscribe(async (params) => {
        const id = params["id"];
        if (id) {
          this._route.navigate(
            ["app/property-info/details-about-the-contract"],
            {
              queryParams: {
                id: id,
              },
            }
          );
        }
      });
    }
  }
}
