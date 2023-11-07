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
  selector: "app-details-about-the-contract",
  templateUrl: "./details-about-the-contract.component.html",
  styleUrls: ["./details-about-the-contract.component.css"],
})
export class DetailsAboutTheContractComponent implements OnInit {
  data: ILoanDetailModel = {};
  form: FormGroup;

  constructor(
    private _route: Router,
    private _dataService: DataService,
    private _loanApplicationService: LoanApplicationService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const response: Result<ILoanApplicationModel> = this._activatedRoute
      .snapshot.data.loanApp;
    if (response && response.success) {
      this._dataService.loanApplication = response.result;
      this.data = response.result.loanDetails;
      if (this.form) this.form.patchValue(response.result.loanDetails);
    }
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      contractDate: new FormControl(this.data.contractDate),
    });
  }

  updatePropertyInformation(value) {
    if (value == "newConstruction") {
      this.data.newConstruction = true;
    }
    if (value == "bankOwned") {
      this.data.bankOwned = true;
    }
  }
  onChange(event) {
    console.log(event);
    console.log(this.data.contractDate);
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
    this._dataService.loanApplication.loanDetails = this.data;
    this.submitForm();
    this._activatedRoute.queryParams.subscribe(async (params) => {
      const id = params["id"];
      if (id) {
        this._route.navigate(["app/property-info/purchase-price"], {
          queryParams: {
            id: id,
          },
        });
      }
    });
  }
}
