import { IDeclarationModel } from "./../../interfaces/IDeclarationModel";
import { Component, DoCheck, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IBorrowerDeclarationModel } from "../../interfaces/IBorrowerDeclarationModel";
import { IBorrowerDemographicModel } from "../../interfaces/IBorrowerDemographicModel";
import { NgWizardConfig, NgWizardService, THEME } from "ng-wizard";
import { ILoanApplicationModel } from "../../interfaces/ILoanApplicationModel";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { LoanApplicationService } from "../../services/loan-application.service";
import { Result } from "common";

@Component({
  selector: "app-declaration",
  templateUrl: "./declaration.component.html",
  styleUrls: ["./declaration.component.css"],
})
export class DeclarationComponent implements OnInit, DoCheck {
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

  data: IDeclarationModel = {
    borrowerDeclaration: {},
    borrowerDemographic: {},

    coBorrowerDeclaration: {},
    coBorrowerDemographic: {},
  };
  isApplyingWithCoBorrower = false;
  form: FormGroup;
  borrowerEthnics = [
    {
      id: 1,
      name: "Hispanic or Latino",
      checked: false,
    },
    {
      id: 2,
      name: "Mexican",
    },
    {
      id: 3,
      name: "Puerto Rican",
    },
    {
      id: 4,
      name: "Cuban",
    },
    {
      id: 5,
      name: "Other Hispanic or Latino - Enter Origin",
      hasInput: true,
      description:
        "For example: Argentinean, Colombian, Dominican, Nicaraguan, Salvadoran, Spaniard, and so on.",
    },
    {
      id: 6,
      name: "Not Hispanic or Latino",
    },
    {
      id: 7,
      name: "I do not wish to provide this information.",
    },
  ];
  borrowerRaces = [
    {
      id: 1,
      name: "American Indian or Alaska Native",
      checked: false,
      hasInput: true,
      description: "Enter name of enrolled or principal tribe:",
    },
    {
      id: 2,
      name: "Asian",
    },
    {
      id: 3,
      name: "Asian Indian",
    },
    {
      id: 4,
      name: "Chinese",
    },
    {
      id: 5,
      name: "Filipino",
    },
    {
      id: 6,
      name: "Japanese",
    },
    {
      id: 7,
      name: "Korean",
    },
    {
      id: 8,
      name: "Vietnamese",
    },
    {
      id: 9,
      name: "Other Asian - Enter Race:",
      hasInput: true,
      description:
        "For example: Hmong, Laotian, Thai, Pakistani, Cambodian, and so on.",
    },
    {
      id: 10,
      name: "Black or African American",
    },
    {
      id: 11,
      name: "Native Hawaiian or Other Pacific Islander",
    },
    {
      id: 12,
      name: "Native Hawaiian",
    },
    {
      id: 13,
      name: "Guamanian or Chamorro",
    },
    {
      id: 14,
      name: "Samoan",
    },
    {
      id: 15,
      name: "Other Pacific Islander - Enter Race:",
      hasInput: true,
      description: "For example: Fijian, Tongan, and so on.",
    },
    {
      id: 16,
      name: "White",
    },
    {
      id: 17,
      name: "I do not wish to provide this information.",
    },
  ];
  borrowerSexArr = [
    {
      id: 1,
      name: "Female",
      checked: false,
    },
    {
      id: 2,
      name: "Male",
    },
    {
      id: 3,
      name: "I do not wish to provide this information.",
    },
  ];

  coBorrowerEthnics = [
    {
      id: 1,
      name: "Hispanic or Latino",
      checked: false,
    },
    {
      id: 2,
      name: "Mexican",
    },
    {
      id: 3,
      name: "Puerto Rican",
    },
    {
      id: 4,
      name: "Cuban",
    },
    {
      id: 5,
      name: "Other Hispanic or Latino - Enter Origin",
      hasInput: true,
      description:
        "For example: Argentinean, Colombian, Dominican, Nicaraguan, Salvadoran, Spaniard, and so on.",
    },
    {
      id: 6,
      name: "Not Hispanic or Latino",
    },
    {
      id: 7,
      name: "I do not wish to provide this information.",
    },
  ];
  coBorrowerRaces = [
    {
      id: 1,
      name: "American Indian or Alaska Native",
      checked: false,
      hasInput: true,
      description: "Enter name of enrolled or principal tribe:",
    },
    {
      id: 2,
      name: "Asian",
    },
    {
      id: 3,
      name: "Asian Indian",
    },
    {
      id: 4,
      name: "Chinese",
    },
    {
      id: 5,
      name: "Filipino",
    },
    {
      id: 6,
      name: "Japanese",
    },
    {
      id: 7,
      name: "Korean",
    },
    {
      id: 8,
      name: "Vietnamese",
    },
    {
      id: 9,
      name: "Other Asian - Enter Race:",
      hasInput: true,
      description:
        "For example: Hmong, Laotian, Thai, Pakistani, Cambodian, and so on.",
    },
    {
      id: 10,
      name: "Black or African American",
    },
    {
      id: 11,
      name: "Native Hawaiian or Other Pacific Islander",
    },
    {
      id: 12,
      name: "Native Hawaiian",
    },
    {
      id: 13,
      name: "Guamanian or Chamorro",
    },
    {
      id: 14,
      name: "Samoan",
    },
    {
      id: 15,
      name: "Other Pacific Islander - Enter Race:",
      hasInput: true,
      description: "For example: Fijian, Tongan, and so on.",
    },
    {
      id: 16,
      name: "White",
    },
    {
      id: 17,
      name: "I do not wish to provide this information.",
    },
  ];
  coBorrowerSexArr = [
    {
      id: 1,
      name: "Female",
      checked: false,
    },
    {
      id: 2,
      name: "Male",
    },
    {
      id: 3,
      name: "I do not wish to provide this information.",
    },
  ];

  constructor(
    private _ngWizardService: NgWizardService,
    private _dataService: DataService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute,
    private _loanApplicationService: LoanApplicationService
  ) {}

  ngOnInit(): void {
    const response: Result<ILoanApplicationModel> = this._activatedRoute
      .snapshot.data.loanApp;

    if (response && response.success) {
      this._dataService.loanApplication = response.result;
      const borrowerDeclaration = this._dataService.loanApplication.declaration
        .borrowerDeclaration;
      if (borrowerDeclaration) {
        if (borrowerDeclaration.declarationsSection)
          borrowerDeclaration.declarationsSection = borrowerDeclaration.declarationsSection.toString();
      }
      this.data = this._dataService.loanApplication.declaration;
      const loanApplication = this._dataService.loanApplication;
      this.isApplyingWithCoBorrower =
        loanApplication.personalInformation &&
        loanApplication.personalInformation.isApplyingWithCoBorrower;
    }

    this.initForm();

    this._dataService.formData.subscribe((formData: ILoanApplicationModel) => {
      if (formData && formData.declaration) {
        this.form.patchValue(formData.declaration);
      }
    });
  }

  ngDoCheck(): void {
    this.data = this.form.value;
    this._dataService.updateData(this.form.value, "declaration");
  }

  initForm() {
    if (this.data.borrowerDeclaration != null)
      this.form = new FormGroup({
        id: new FormControl(this.data.borrowerDeclaration.id),
        borrowerDeclaration: this.initDeclarationForm(
          this.data.borrowerDeclaration
        ),
        borrowerDemographic: this.initDemographicForm(
          this.data.borrowerDemographic
        ),
      });
    else {
      this.form = new FormGroup({
        id: new FormControl(0),
        borrowerDeclaration: this.initDeclarationForm(
          this.data.borrowerDeclaration
        ),
        borrowerDemographic: this.initDemographicForm(
          this.data.borrowerDemographic
        ),
      });
    }
    if (this.data.borrowerDemographic) {
      if (this.data.borrowerDemographic.ethnicity) {
        this.data.borrowerDemographic.ethnicity.forEach((element) => {
          this.borrowerEthnics.forEach((item) => {
            if (element.id == item.id) {
              item.checked = true;
            }
          });
        });
      }

      if (this.data.borrowerDemographic.race) {
        this.data.borrowerDemographic.race.forEach((element) => {
          this.borrowerRaces.forEach((item) => {
            if (element.id == item.id) {
              item.checked = true;
            }
          });
        });
      }

      if (this.data.borrowerDemographic.sex) {
        this.data.borrowerDemographic.sex.forEach((element) => {
          this.borrowerSexArr.forEach((item) => {
            if (element.id == item.id) {
              item.checked = true;
            }
          });
        });
      }
    }

    if (this.data.coBorrowerDemographic) {
      if (this.data.coBorrowerDemographic.ethnicity) {
        this.data.coBorrowerDemographic.ethnicity.forEach((element) => {
          this.coBorrowerEthnics.forEach((item) => {
            if (element.id == item.id) {
              item.checked = true;
            }
          });
        });
      }

      if (this.data.coBorrowerDemographic.race) {
        this.data.coBorrowerDemographic.race.forEach((element) => {
          this.coBorrowerRaces.forEach((item) => {
            if (element.id == item.id) {
              item.checked = true;
            }
          });
        });
      }

      if (this.data.coBorrowerDemographic.sex) {
        this.data.coBorrowerDemographic.sex.forEach((element) => {
          this.coBorrowerSexArr.forEach((item) => {
            if (element.id == item.id) {
              item.checked = true;
            }
          });
        });
      }
    }
    if (this.isApplyingWithCoBorrower) {
      if (
        this.data.coBorrowerDeclaration == undefined ||
        this.data.coBorrowerDeclaration == null
      )
        this.data.coBorrowerDeclaration = {};
      if (
        this.data.coBorrowerDemographic == undefined ||
        this.data.coBorrowerDemographic == null
      )
        this.data.coBorrowerDemographic = {};
      this.form.addControl(
        "coBorrowerDeclaration",
        this.initDeclarationForm(this.data.coBorrowerDeclaration)
      );
      this.form.addControl(
        "coBorrowerDemographic",
        this.initDemographicForm(this.data.coBorrowerDemographic)
      );
    }
    if (!this.isApplyingWithCoBorrower) {
      this.form.removeControl("coBorrowerDeclaration");
      this.form.removeControl("coBorrowerDemographic");
    }
  }

  initDeclarationForm(
    borrowerDeclaration: IBorrowerDeclarationModel
  ): FormGroup {
    if (!borrowerDeclaration) borrowerDeclaration = {};
    return new FormGroup({
      id: new FormControl(borrowerDeclaration.id),
      isOutstandingJudgmentsAgainstYou: new FormControl(
        borrowerDeclaration.isOutstandingJudgmentsAgainstYou
      ),
      isDeclaredBankrupt: new FormControl(
        borrowerDeclaration.isDeclaredBankrupt
      ),
      isPropertyForeClosedUponOrGivenTitle: new FormControl(
        borrowerDeclaration.isPropertyForeClosedUponOrGivenTitle
      ),
      isPartyToLawsuit: new FormControl(borrowerDeclaration.isPartyToLawsuit),
      isObligatedOnAnyLoanWhichResultedForeclosure: new FormControl(
        borrowerDeclaration.isObligatedOnAnyLoanWhichResultedForeclosure
      ),
      isPresentlyDelinquent: new FormControl(
        borrowerDeclaration.isPresentlyDelinquent
      ),
      isObligatedToPayAlimonyChildSupport: new FormControl(
        borrowerDeclaration.isObligatedToPayAlimonyChildSupport
      ),
      isAnyPartOfTheDownPayment: new FormControl(
        borrowerDeclaration.isAnyPartOfTheDownPayment
      ),
      isCoMakerOrEndorser: new FormControl(
        borrowerDeclaration.isCoMakerOrEndorser
      ),
      isUSCitizen: new FormControl(borrowerDeclaration.isUSCitizen),
      isPermanentResidentSlien: new FormControl(
        borrowerDeclaration.isPermanentResidentSlien
      ),
      isIntendToOccupyThePropertyAsYourPrimary: new FormControl(
        borrowerDeclaration.isIntendToOccupyThePropertyAsYourPrimary
      ),
      isOwnershipInterestInPropertyInTheLastThreeYears: new FormControl(
        borrowerDeclaration.isOwnershipInterestInPropertyInTheLastThreeYears
      ),
      declarationsSection: new FormControl(
        borrowerDeclaration.declarationsSection
      ),
    });
  }

  initDemographicForm(
    borrowerDemographic: IBorrowerDemographicModel
  ): FormGroup {
    return new FormGroup({
      id: new FormControl(borrowerDemographic.id),
      ethnicity: new FormControl(borrowerDemographic.ethnicity || []),
      race: new FormControl(borrowerDemographic.race || []),
      sex: new FormControl(borrowerDemographic.sex || []),
    });
  }

  updateEthnicFormControl(borrowerType) {
    const values = this[`${borrowerType}Ethnics`]
      .filter((e) => e.checked)
      .map((e: any) => ({
        id: e.id,
        otherValue: e.otherValue,
      }));
    this.form
      .get(`${borrowerType}Demographic`)
      .get("ethnicity")
      .setValue(values);
  }

  updateRaceFormControl(borrowerType) {
    const values = this[`${borrowerType}Races`]
      .filter((e) => e.checked)
      .map((e: any) => ({
        id: e.id,
        otherValue: e.otherValue,
      }));
    this.form.get(`${borrowerType}Demographic`).get("race").setValue(values);
  }

  updateSexFormControl(borrowerType) {
    const values = this[`${borrowerType}SexArr`]
      .filter((e) => e.checked)
      .map((e: any) => ({
        id: e.id,
      }));
    this.form.get(`${borrowerType}Demographic`).get("sex").setValue(values);
  }

  prepareFormData(response) {
    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        response[key] = response[key] || {};
      }
    }
    return response;
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
          this.data = this._dataService.loanApplication.declaration;
          const loanApplication = this._dataService.loanApplication;
          this.isApplyingWithCoBorrower =
            loanApplication.personalInformation &&
            loanApplication.personalInformation.isApplyingWithCoBorrower;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  proceedToNext(event?: string) {
    this.submitForm();
    if (event === "wizardStep") {
      this._ngWizardService.next();
    } else {
      this._activatedRoute.queryParams.subscribe(async (params) => {
        if (this.form.valid) {
          const id = params["id"];
          if (id) {
            this._route.navigate(["app/summary"], {
              queryParams: {
                id: id,
              },
            });
          } else {
            this._route.navigate(["app/summary"]);
          }
        } else {
          this.form.markAllAsTouched();
        }
      });
    }
  }

  proceedToPrevious(event?: string) {
    this.submitForm();
    if (event === "wizardStep") {
      this._ngWizardService.previous();
    } else {
      this._activatedRoute.queryParams.subscribe(async (params) => {
        const id = params["id"];
        if (id) {
          this._route.navigate(["app/econsent"], {
            queryParams: {
              id: id,
            },
          });
        } else {
          this._route.navigate(["app/econsent"]);
        }
      });
    }
  }
}
