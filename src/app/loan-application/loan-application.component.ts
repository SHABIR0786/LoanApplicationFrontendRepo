import { Component, OnInit } from "@angular/core";
import { NgWizardConfig, NgWizardService, THEME } from "ng-wizard";
import { LoanApplicationService } from "../services/loan-application.service";
import { ILoanApplicationModel } from "../interfaces/ILoanApplicationModel";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-loan-application",
  templateUrl: "./loan-application.component.html",
  styleUrls: ["./loan-application.component.css"],
})
export class LoanApplicationComponent implements OnInit {
  loanApplication: ILoanApplicationModel = {
    loanDetails: {
      purposeOfLoan: 1,
    },
    personalInformation: {
      borrower: {},
      coBorrower: {},
      residentialAddress: {},
      mailingAddress: {},
      previousAddresses: [],
    },
    expenses: {},
    manualAssetEntries: [],
    employmentIncome: {
      borrowerMonthlyIncome: {},
      borrowerEmploymentInfo: [{}],
    },
    orderCredit: {},
    additionalDetails: {},
    eConsent: {},
    declaration: {
      borrowerDeclaration: {},
      coBorrowerDeclaration: {},
      borrowerDemographic: {},
      coBorrowerDemographic: {},
    },
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.default,
    anchorSettings: {
      markDoneStep: false,
      enableAllAnchors: true,
    },
    toolbarSettings: {
      showNextButton: false,
      showPreviousButton: false,
      toolbarExtraButtons: [
        /*{
                    text: 'Save', class: 'btn btn-info', event: () => {
                        const formData = this.sanitizeFormData();
                        this._loanApplicationService.post('Add', formData).subscribe((response: any) => {
                            this.loanApplication = this.prepareFormData(response.result);
                        }, error => {
                            console.log(error);
                        });
                    }
                }*/
      ],
    },
  };

  constructor(
    private _ngWizardService: NgWizardService,
    private _loanApplicationService: LoanApplicationService,
    private _dataService: DataService
  ) {}

  ngOnInit(): void {}

  onChange(data, key) {
    this.loanApplication[key] = data;
    console.log(this.loanApplication);
    this._dataService.updateFormData(this.loanApplication);
  }

  sanitizeFormData() {
    const formData = Object.assign({}, this.loanApplication);
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
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

  prepareFormData(response) {
    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        response[key] = response[key] || {};
      }
    }
    return response;
  }

  submitForm() {
    const formData = this.sanitizeFormData();
    this._loanApplicationService.post("Add", formData).subscribe(
      (response: any) => {
        this.loanApplication = this.prepareFormData(response.result);
        this._dataService.updateFormData(this.loanApplication);
        // this.
      },
      (error) => {
        console.log(error);
      }
    );
  }

  proceedToNext() {
    this._ngWizardService.next();
  }

  proceedToPrevious() {
    this._ngWizardService.previous();
  }

  goToStep(index) {
    this.config.selected = index;
    this._ngWizardService.reset();
  }
}
