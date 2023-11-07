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
  selector: "app-already-working-with-someone-from-ez",
  templateUrl: "./already-working-with-someone-from-ez.component.html",
  styleUrls: ["./already-working-with-someone-from-ez.component.css"],
})
export class AlreadyWorkingWithSomeoneFromEzComponent implements OnInit {
  data: ILoanDetailModel = {};
  form: FormGroup;
  isAlreadyWorking: boolean = false;

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
      this.isAlreadyWorking = this.data.isWorkingWithOfficer;
      if (this.form) this.form.patchValue(response.result.loanDetails);
    }
    this.initForm();
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

  initForm() {
    this.form = new FormGroup({
      loanOfficerId: new FormControl(this.data.estimatedPurchasePrice, [
        Validators.required,
      ]),
    });
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

  alreadyworking(value) {
    this.isAlreadyWorking = value;
  }

  proceedToNext() {
    let fields = [];
    if (this.isAlreadyWorking == null) {
      this.isAlreadyWorking = false;
    } else if (this.isAlreadyWorking == true) {
      fields = ["loanOfficerId"];
    }

    const hasError = fields.some(
      (field) => this.form.get(field) && !this.form.get(field).valid
    );

    if (hasError) {
      fields.forEach(
        (field) => this.form.get(field) && this.form.get(field).markAsTouched()
      );
    } else {
      this._dataService.loanApplication.loanDetails = {
        isWorkingWithOfficer: this.isAlreadyWorking,
        loanOfficerId: this.data.loanOfficerId,
      };
      this.submitForm();
      this._activatedRoute.queryParams.subscribe(async (params) => {
        const id = params["id"];
        if (id) {
          this._route.navigate(["app/welcome/what-stage-are-you-in"], {
            queryParams: {
              id: id,
            },
          });
        }
      });
    }
  }
}
