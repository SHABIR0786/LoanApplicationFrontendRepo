import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DataService } from "../../services/data.service";
import { ILoanApplicationModel } from "../../interfaces/ILoanApplicationModel";
import { LoanApplicationService } from "../../services/loan-application.service";
import { Router } from "@angular/router";
import { AppConsts } from "@shared/AppConsts";
import { ActivatedRoute } from "@angular/router";
import { Result } from "common";
import { LoandetailService } from "../../services/loandetail.service";
@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"],
})
export class SummaryComponent implements OnInit {
  @Output() proceedToStep: EventEmitter<any> = new EventEmitter<any>();
  errors = {};
  isShowAllStepsReadOnlyModeBool = false;
  formData: ILoanApplicationModel;
  isApplyingWithCoBorrower: boolean = false;

  constructor(
    private _dataService: DataService,
    private _loanApplicationService: LoanApplicationService,
    private _loandetailService: LoandetailService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const response: Result<ILoanApplicationModel> = this._activatedRoute
      .snapshot.data.loanApp;

    if (response && response.success) {
      this._dataService.loanApplication = response.result;
    }

    this._dataService.validations.subscribe((errors) => {
      this.errors = errors;
    });
    this.formData = this._dataService.loanApplication;
    this.isApplyingWithCoBorrower =
      this.formData.personalInformation &&
      this.formData.personalInformation.isApplyingWithCoBorrower;
    if (!this.isApplyingWithCoBorrower) {
      if (this.formData.manualAssetEntries) {
        this.formData.manualAssetEntries.forEach((element) => {
          element.borrowerTypeId = AppConsts.typeBorrower;
        });
      }
    } else {
      if (
        this.formData.employmentIncome == null &&
        this.formData.employmentIncome.coBorrowerEmploymentInfo == null
      ) {
        this.formData.employmentIncome.coBorrowerEmploymentInfo = [{}];
      }
      if (this.formData.additionalDetails == null) {
        this.formData.additionalDetails = {
          nameOfIndividualsCoBorrowerOnTitle: "",
        };
      } else if (
        this.formData.additionalDetails.nameOfIndividualsCoBorrowerOnTitle ==
        null
      ) {
        this.formData.additionalDetails.nameOfIndividualsCoBorrowerOnTitle = "";
      }
      if (
        this.formData.employmentIncome == null &&
        this.formData.employmentIncome.coBorrowerMonthlyIncome == null
      ) {
        this.formData.employmentIncome.coBorrowerMonthlyIncome = {};
      }
      if (
        this.formData.declaration == null &&
        this.formData.declaration.coBorrowerDeclaration == null
      ) {
        this.formData.declaration.coBorrowerDeclaration = {};
      }
      if (
        this.formData.declaration == null &&
        this.formData.declaration.coBorrowerDemographic == null
      ) {
        this.formData.declaration.coBorrowerDemographic = {};
      }
    }
    this.getLoanSummary();
  }

  sanitizeFormData(formData) {
    formData = Object.assign({}, formData);
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (
          typeof formData[key] === "object" &&
          formData[key] != null &&
          formData[key] != undefined &&
          Object.keys(formData[key]).length === 0
        ) {
          formData[key] = undefined;
        }
      }
    }
    return formData;
  }

  prepareFormData(response) {
    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        response[key] = response[key] || {};
      }
    }
    return response;
  }

  submitForm() {
    const formData = this.sanitizeFormData(this._dataService.loanApplication);
    this._loanApplicationService
      .post<Result<ILoanApplicationModel>>("Add", formData)
      .subscribe(
        (response) => {
          this._dataService.loanApplication = response.result;
          this.formData = response.result;
        },
        (error) => {
          console.log(error);
        }
      );
    this._activatedRoute.queryParams.subscribe(async (params) => {
      const id = params["id"];
      this._loanApplicationService
        .get<Result<ILoanApplicationModel>>(`CreatePdfNew?id=${id}`)
        .subscribe(
          (response) => {
            this._loanApplicationService
              .get<Result<ILoanApplicationModel>>(`DownloadPdf?id=${id}`)
              .subscribe(
                (response) => {
                  console.log(response);
                },
                (error) => {
                  console.log(error);
                }
              );
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  proceedToPrevious() {
    this._activatedRoute.queryParams.subscribe(async (params) => {
      const id = params["id"];
      if (id) {
        this._route.navigate(["app/declaration?" + id]);
      } else {
        this._route.navigate(["app/declaration"]);
      }
    });
  }

  showGroupError(groupName) {
    let fields = [];
    switch (groupName) {
      case "purposeOfLoan":
        fields = [
          "isWorkingWithOfficer",
          "loanOfficerId",
          "purposeOfLoan",
          "requestedLoanAmount",
          "estimatedPurchasePrice",
          "downPaymentAmount",
          "sourceOfDownPayment",
        ];
        return (this.errors["loanDetails"] || []).some((error: any) =>
          fields.includes(error.controlName)
        );
      case "propertyDetails":
        fields = ["stateId", "propertyTypeId", "propertyUseId"];
        return (this.errors["loanDetails"] || []).some((error: any) =>
          fields.includes(error.controlName)
        );
      case "jointCredit":
        fields = [
          "isApplyingWithCoBorrower",
          "useIncomeOfPersonOtherThanBorrower",
        ];
        return (this.errors["jointCredit"] || []).some((error: any) =>
          fields.includes(error.controlName)
        );
      case "borrowerPersonalInformation":
        return (this.errors["borrowerPersonalInformation"] || []).length;
      case "residentialAddress":
        return (this.errors["residentialAddress"] || []).length;
      case "monthlyHousingExpenses":
        return (this.errors["monthlyHousingExpenses"] || []).length;
      case "borrowerEmploymentIncome":
        return (this.errors["borrowerEmploymentIncome"] || []).length;
    }

    return false;
  }

  hasAnyErrors() {
    return false;
    // return Object.keys(this.errors).some(key => this.errors[key].length !== 0);
  }

  goToStep(index: string) {
    //this.proceedToStep.emit(index - 1);
    this._route.navigate([index]);
  }

  expandAll() {
    this.isShowAllStepsReadOnlyModeBool = true;
  }

  collapse() {
    this.isShowAllStepsReadOnlyModeBool = false;
  }

  ConvertToInt(val) {
    return parseInt(val);
  }

  getLoanSummary() {
    let obj = {
      params: {
        id: 1,
      },
    };
    this._loandetailService.getLoanSummary(obj).subscribe((response: any) => {
      console.log(response);
    });
  }
}
