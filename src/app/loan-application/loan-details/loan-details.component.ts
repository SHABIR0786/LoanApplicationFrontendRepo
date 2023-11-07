import {
  Component,
  DoCheck,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";
import { ILoanDetailModel } from "../../interfaces/ILoanDetailModel";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgWizardConfig, NgWizardService, THEME } from "ng-wizard";
import { DataService } from "../../services/data.service";
import { ILoanApplicationModel } from "../../interfaces/ILoanApplicationModel";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { LoanApplicationService } from "../../services/loan-application.service";
import { Result } from "common";

@Component({
  selector: "app-loan-details",
  templateUrl: "./loan-details.component.html",
  styleUrls: ["./loan-details.component.css"],
})
export class LoanDetailsComponent implements OnInit, DoCheck {
  id = Math.random().toString(36).substring(2);
  data: ILoanDetailModel = {};

  form: FormGroup;
  states = [];
  loanPurposes = [];
  sourceOfDownPayments = [];
  propertyTypes = [];
  propertyUses = [];
  loanOfficers = [];

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
      toolbarExtraButtons: [],
    },
  };

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
      this.data = response.result.loanDetails;
      if (this.form) this.form.patchValue(response.result.loanDetails);
    }
    this.initForm();
    this.loadStates();
    this.loadLoanPurposes();
    this.loadSourceOfDownPayments();
    this.loadPropertyTypes();
    this.loadPropertyUses();
    this.loadLoanOfficers();

    this._dataService.formData.subscribe((formData: ILoanApplicationModel) => {
      if (formData && formData.loanDetails) {
        this.form.patchValue(formData.loanDetails);
      }
    });
    this._activatedRoute.queryParams.subscribe(async (params) => {
      const id = params["id"];
      if (id) {
        this._route.navigate(["app/loan-detail"], {
          queryParams: {
            id: id,
          },
        });
      } else {
        this._route.navigate(["app/loan-detail"]);
      }
    });
  }

  ngDoCheck() {
    this.data = this.form.value;

    this.data.loanOfficerName = this.getDataById(
      this.loanOfficers,
      this.data.loanOfficerId
    );
    this.data.loanPurpose = this.getDataById(
      this.loanPurposes,
      this.data.purposeOfLoan
    );
    this.data.sourceOfDownPaymentName = this.getDataById(
      this.sourceOfDownPayments,
      this.data.sourceOfDownPayment
    );
    this.data.propertyTypeName = this.getDataById(
      this.propertyTypes,
      this.data.propertyTypeId
    );
    this.data.stateName = this.getDataById(this.states, this.data.stateId);
    this.data.propertyUseName = this.getDataById(
      this.propertyUses,
      this.data.propertyUseId
    );

    this._dataService.updateValidations(this.form, "loanDetails");
    this._dataService.updateData(this.form.value, "loanDetails");
  }

  getDataById(arr, id) {
    const data = (arr || []).find((i) => i.id === id);
    return data ? data.name : null;
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl(this.data.id),
      referredBy: new FormControl(this.data.referredBy),
      isWorkingWithOfficer: new FormControl(this.data.isWorkingWithOfficer, [
        Validators.required,
      ]),
      loanOfficerId: new FormControl(this.data.loanOfficerId, [
        Validators.required,
      ]),
      purposeOfLoan: new FormControl(this.data.purposeOfLoan, [
        Validators.required,
      ]),
      estimatedValue: new FormControl(this.data.estimatedValue),
      currentLoanAmount: new FormControl(this.data.currentLoanAmount),
      requestedLoanAmount: new FormControl(this.data.requestedLoanAmount, [
        Validators.required,
      ]),
      estimatedPurchasePrice: new FormControl(
        this.data.estimatedPurchasePrice,
        [Validators.required]
      ),
      downPaymentAmount: new FormControl(this.data.downPaymentAmount, [
        Validators.required,
      ]),
      downPaymentPercentage: new FormControl(this.data.downPaymentPercentage, [
        Validators.max(99.99),
      ]),
      sourceOfDownPayment: new FormControl(this.data.sourceOfDownPayment, [
        Validators.required,
      ]),
      giftAmount: new FormControl(this.data.giftAmount),
      giftExplanation: new FormControl(this.data.giftExplanation),
      haveSecondMortgage: new FormControl(this.data.haveSecondMortgage),
      secondMortgageAmount: new FormControl(this.data.secondMortgageAmount),
      payLoanWithNewLoan: new FormControl(this.data.payLoanWithNewLoan),

      startedLookingForNewHome: new FormControl(
        this.data.startedLookingForNewHome
      ),
      refinancingCurrentHome: new FormControl(this.data.refinancingCurrentHome),
      yearAcquired: new FormControl(this.data.yearAcquired, [
        Validators.pattern("^\\d{4}$"),
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
      ]),
      originalPrice: new FormControl(this.data.originalPrice),
      city: new FormControl(this.data.city),
      stateId: new FormControl(this.data.stateId, [Validators.required]),
      propertyTypeId: new FormControl(this.data.propertyTypeId, [
        Validators.required,
      ]),
      propertyUseId: new FormControl(this.data.propertyUseId, [
        Validators.required,
      ]),
    });

    this.form.get("purposeOfLoan").valueChanges.subscribe((purposeOfLoan) => {
      if (purposeOfLoan == 1) {
        this.form.addControl(
          "estimatedPurchasePrice",
          new FormControl(
            this.form.value.estimatedPurchasePrice ||
              this.data.estimatedPurchasePrice,
            Validators.required
          )
        );
        this.form.addControl(
          "downPaymentAmount",
          new FormControl(
            this.form.value.downPaymentAmount || this.data.downPaymentAmount,
            Validators.required
          )
        );
        this.form.addControl(
          "sourceOfDownPayment",
          new FormControl(
            this.form.value.sourceOfDownPayment ||
              this.data.sourceOfDownPayment,
            Validators.required
          )
        );
        this.form.removeControl("estimatedValue");
        this.form.removeControl("currentLoanAmount");
        this.form.removeControl("requestedLoanAmount");
      } else if (purposeOfLoan == 2) {
        this.form.addControl(
          "estimatedValue",
          new FormControl(this.form.value.estimatedValue, Validators.required)
        );
        this.form.addControl(
          "currentLoanAmount",
          new FormControl(
            this.form.value.currentLoanAmount,
            Validators.required
          )
        );
        this.form.addControl(
          "requestedLoanAmount",
          new FormControl(
            this.form.value.requestedLoanAmount,
            Validators.required
          )
        );
        this.form.removeControl("estimatedPurchasePrice");
        this.form.removeControl("downPaymentAmount");
        this.form.removeControl("sourceOfDownPayment");
      } else if (purposeOfLoan == 3) {
        this.form.addControl(
          "estimatedValue",
          new FormControl(this.form.value.estimatedValue, Validators.required)
        );
        this.form.addControl(
          "currentLoanAmount",
          new FormControl(
            this.form.value.currentLoanAmount,
            Validators.required
          )
        );
        this.form.addControl(
          "requestedLoanAmount",
          new FormControl(
            this.form.value.requestedLoanAmount,
            Validators.required
          )
        );
        this.form.removeControl("estimatedPurchasePrice");
        this.form.removeControl("downPaymentAmount");
        this.form.removeControl("sourceOfDownPayment");
      }
    });
    this.form
      .get("haveSecondMortgage")
      .valueChanges.subscribe((haveSecondMortgage) => {
        if (!haveSecondMortgage) {
          this.form.get("secondMortgageAmount").setValue(null);
          this.form.get("payLoanWithNewLoan").setValue(null);
        }
      });

    this.form
      .get("sourceOfDownPayment")
      .valueChanges.subscribe((sourceOfDownPayment) => {
        if (sourceOfDownPayment !== 4) {
          this.form.get("giftAmount").setValue(null);
          this.form.get("giftExplanation").setValue(null);
        }
      });

    this.form
      .get("isWorkingWithOfficer")
      .valueChanges.subscribe((isWorkingWithOfficer) => {
        if (isWorkingWithOfficer) {
          this.form.get("loanOfficerId").setValidators([Validators.required]);
        } else {
          this.form.get("loanOfficerId").setValue(null);
          this.form.get("loanOfficerId").setValidators(null);
        }
        this.form.get("loanOfficerId").updateValueAndValidity();
      });

    this.form
      .get("estimatedPurchasePrice")
      .valueChanges.subscribe((estimatedPurchasePrice) => {
        this.form.get("downPaymentAmount").setValue(null);
        this.form.get("downPaymentPercentage").setValue(null);
      });

    this.form
      .get("downPaymentAmount")
      .valueChanges.subscribe((downPaymentAmount) => {
        let currentDownPaymentPercentage = this.form.get(
          "downPaymentPercentage"
        ).value;
        if (downPaymentAmount) {
          if (typeof downPaymentAmount === "number")
            downPaymentAmount = downPaymentAmount.toString();

          downPaymentAmount = downPaymentAmount.replace("/,/g", "");
          let estimatedPurchasePrice = this.form.get("estimatedPurchasePrice")
            .value;

          if (typeof estimatedPurchasePrice == "string")
            estimatedPurchasePrice = estimatedPurchasePrice?.replace(
              "/,/g",
              ""
            );
          const percentage = (downPaymentAmount / estimatedPurchasePrice) * 100;

          if (currentDownPaymentPercentage !== percentage)
            this.form.get("downPaymentPercentage").setValue(percentage);
        } else {
          if (currentDownPaymentPercentage !== null)
            this.form.get("downPaymentPercentage").setValue(null);
        }
      });

    this.form
      .get("downPaymentPercentage")
      .valueChanges.subscribe((downPaymentPercentage) => {
        if (this.form.get("downPaymentAmount")) {
          const currentDownPaymentAmount = this.form.get("downPaymentAmount")
            .value;
          if (downPaymentPercentage) {
            let estimatedPurchasePrice = this.form.get("estimatedPurchasePrice")
              .value;
            if (typeof estimatedPurchasePrice == "string")
              estimatedPurchasePrice = estimatedPurchasePrice?.replace(
                "/,/g",
                ""
              );
            const downPaymentAmount =
              (downPaymentPercentage / 100) * estimatedPurchasePrice;

            if (currentDownPaymentAmount !== downPaymentAmount)
              this.form.get("downPaymentAmount").setValue(downPaymentAmount);
          } else {
            if (currentDownPaymentAmount !== null)
              this.form.get("downPaymentAmount").setValue(null);
          }
        }
      });
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
          this.form.patchValue(this._dataService.loanApplication.loanDetails);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  proceedToPrevious(event?: string) {
    this.submitForm();
    if (event === "wizardStep") {
      this._ngWizardService.previous();
    }
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  proceedToNext(event?: string, stepIndex?: number) {
    this.submitForm();
    if (event === "wizardStep") {
      let fields = [];
      switch (stepIndex) {
        case 1:
          fields = [
            "isWorkingWithOfficer",
            "loanOfficerId",
            "purposeOfLoan",
            "requestedLoanAmount",
            "estimatedPurchasePrice",
            "downPaymentAmount",
            "downPaymentPercentage",
            "sourceOfDownPayment",
          ];
          const hasError = fields.some(
            (field) => this.form.get(field) && !this.form.get(field).valid
          );

          if (hasError) {
            fields.forEach(
              (field) =>
                this.form.get(field) && this.form.get(field).markAsTouched()
            );
          } else {
            this._ngWizardService.next();
          }
          break;
      }
    } else {
      if (this.form.valid) {
        this._activatedRoute.queryParams.subscribe(async (params) => {
          const id = params["id"];
          if (id) {
            this._route.navigate(["app/personal-information"], {
              queryParams: {
                id: parseInt(id),
              },
            });
          } else {
            this._route.navigate(["app/personal-information"]);
          }
        });
      } else {
        this.form.markAllAsTouched();
      }
    }
  }

  loadLoanPurposes() {
    this.loanPurposes = [
      {
        id: 1,
        name: "Purchase a Home",
      },
      {
        id: 2,
        name: "No Cash-Out Refinance",
      },
      {
        id: 3,
        name: "Cash-Out Refinance",
      },
    ];
  }

  loadStates() {
    this.states = [
      {
        id: 1,
        name: "CA",
      },
    ];
  }

  loadPropertyTypes() {
    this.propertyTypes = [
      {
        id: 1,
        name: "Single Family Residence",
      },
      {
        id: 2,
        name: "Condominium",
      },
      {
        id: 3,
        name: "2+ Units",
      },
      {
        id: 4,
        name: "Co Operative",
      },
    ];
  }

  loadPropertyUses() {
    this.propertyUses = [
      {
        id: 1,
        name: "Primary Home",
      },
      {
        id: 2,
        name: "Vacation Home",
      },
      {
        id: 3,
        name: "Investment Home",
      },
    ];
  }

  loadLoanOfficers() {
    this.loanOfficers = [
      {
        id: 1,
        name: "John Doe",
      },
    ];
  }

  loadSourceOfDownPayments() {
    this.sourceOfDownPayments = [
      {
        id: 1,
        name: "Checking/Savings",
      },
      {
        id: 2,
        name: "Equity on Pending Sale",
      },
      {
        id: 3,
        name: "Equity on Sold Property",
      },
      {
        id: 4,
        name: "Gift Funds",
      },
      {
        id: 5,
        name: "Retirement Funds",
      },
      {
        id: 6,
        name: "Secured Borrowed Funds",
      },
      {
        id: 7,
        name: "Stocks and Bonds",
      },
      {
        id: 8,
        name: "Trust Funds",
      },
    ];
  }
}
