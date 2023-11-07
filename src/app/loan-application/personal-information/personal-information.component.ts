import { Component, DoCheck, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { IPersonalInformationModel } from "../../interfaces/IPersonalInformationModel";
import { IBorrowerModel } from "../../interfaces/IBorrowerModel";
import { IAddressModel } from "../../interfaces/IAddressModel";
import { NgWizardConfig, NgWizardService, THEME } from "ng-wizard";
import { DataService } from "../../services/data.service";
import { ILoanApplicationModel } from "../../interfaces/ILoanApplicationModel";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { LoanApplicationService } from "../../services/loan-application.service";
import { Result } from "common";
import * as moment from "moment";

@Component({
  selector: "app-personal-information",
  templateUrl: "./personal-information.component.html",
  styleUrls: ["./personal-information.component.css"],
})
export class PersonalInformationComponent implements OnInit, DoCheck {
  data: IPersonalInformationModel = {
    borrower: {},
    coBorrower: {},
    residentialAddress: {},
    mailingAddress: {},
    previousAddresses: [],

    coBorrowerResidentialAddress: {},
    coBorrowerMailingAddress: {},
    coBorrowerPreviousAddresses: [],
  };

  form: FormGroup;
  states = [];

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

  get residentialAddressForm(): FormGroup {
    return this.form.get("residentialAddress") as FormGroup;
  }

  get previousAddressesFormArray(): FormArray {
    return this.form.get("previousAddresses") as FormArray;
  }

  get coBorrowerPreviousAddressesFormArray(): FormArray {
    return this.form.get("coBorrowerPreviousAddresses") as FormArray;
  }

  addPreviousAddress() {
    this.previousAddressesFormArray.push(this.initAddressForm({}, 3, true));
  }

  addCoBorrowerPreviousAddress() {
    this.coBorrowerPreviousAddressesFormArray.push(
      this.initAddressForm({}, 3, true)
    );
  }

  getPreviousAddressForm(index): FormGroup {
    return this.previousAddressesFormArray.controls[index] as FormGroup;
  }

  getCoBorrowerPreviousAddressForm(index): FormGroup {
    return this.coBorrowerPreviousAddressesFormArray.controls[
      index
    ] as FormGroup;
  }

  removeaddPreviousAddressForm($event, index) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    this.previousAddressesFormArray.removeAt(index);
  }

  removeCoBorrowerPreviousAddressForm($event, index) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    this.coBorrowerPreviousAddressesFormArray.removeAt(index);
  }

  async ngOnInit(): Promise<void> {
    const response: Result<ILoanApplicationModel> = this._activatedRoute
      .snapshot.data.loanApp;

    if (response && response.success) {
      this._dataService.loanApplication = response.result;
      this.data = this._dataService.loanApplication.personalInformation;
    }

    await this.initForm();
    this.loadStates();

    this._dataService.formData.subscribe((formData: ILoanApplicationModel) => {
      if (formData && formData.personalInformation) {
        this.form.patchValue(formData.personalInformation);
      }
    });
  }

  ngDoCheck() {
    this.data = this.form.value;

    this._dataService.updateValidations(this.form, "jointCredit");
    this._dataService.updateValidations(
      this.form.get("borrower") as FormGroup,
      "borrowerPersonalInformation"
    );
    this._dataService.updateValidations(
      this.form.get("residentialAddress") as FormGroup,
      "residentialAddress"
    );
    this._dataService.updateValidations(
      this.form.get("mailingAddress") as FormGroup,
      "mailingAddress"
    );

    this._dataService.updateData(this.form.value, "personalInformation");
  }

  loadStates() {
    this.states = [
      { id: 1, name: "AL" },
      { id: 2, name: "AK" },
      { id: 3, name: "AS" },
      { id: 4, name: "AZ" },
      { id: 5, name: "AR" },
      { id: 6, name: "CA" },
      { id: 7, name: "CO" },
      { id: 8, name: "CT" },
      { id: 9, name: "DE" },
      { id: 10, name: "DC" },
      { id: 11, name: "FM" },
      { id: 12, name: "FL" },
      { id: 13, name: "GA" },
      { id: 14, name: "GU" },
      { id: 15, name: "HI" },
      { id: 16, name: "ID" },
      { id: 17, name: "IL" },
      { id: 18, name: "IN" },
      { id: 19, name: "IA" },
      { id: 20, name: "KS" },
      { id: 21, name: "KY" },
      { id: 22, name: "LA" },
      { id: 23, name: "ME" },
      { id: 24, name: "MH" },
      { id: 25, name: "MD" },
      { id: 26, name: "MA" },
      { id: 27, name: "MI" },
      { id: 28, name: "MN" },
      { id: 29, name: "MS" },
      { id: 30, name: "MO" },
      { id: 31, name: "MT" },
      { id: 32, name: "NE" },
      { id: 33, name: "NV" },
      { id: 34, name: "NH" },
      { id: 35, name: "NJ" },
      { id: 36, name: "NM" },
      { id: 37, name: "NY" },
      { id: 38, name: "NC" },
      { id: 39, name: "ND" },
      { id: 40, name: "MP" },
      { id: 41, name: "OH" },
      { id: 42, name: "OK" },
      { id: 43, name: "OR" },
      { id: 44, name: "PW" },
      { id: 45, name: "PA" },
      { id: 46, name: "PR" },
      { id: 47, name: "RI" },
      { id: 48, name: "SC" },
      { id: 49, name: "SD" },
      { id: 50, name: "TN" },
      { id: 51, name: "TX" },
      { id: 52, name: "UT" },
      { id: 53, name: "VT" },
      { id: 54, name: "VI" },
      { id: 55, name: "VA" },
      { id: 56, name: "WA" },
      { id: 57, name: "WV" },
      { id: 58, name: "WI" },
      { id: 59, name: "WY" },
    ];
  }

  async initForm() {
    this.form = new FormGroup({
      id: new FormControl(this.data.id),
      isApplyingWithCoBorrower: new FormControl(
        this.data.isApplyingWithCoBorrower,
        [Validators.required]
      ),
      useIncomeOfPersonOtherThanBorrower: new FormControl(
        this.data.useIncomeOfPersonOtherThanBorrower
      ),
      agreePrivacyPolicy: new FormControl(this.data.agreePrivacyPolicy, [
        Validators.required,
      ]),
      borrower: this.initBorrowerForm(this.data.borrower || {}),
      coBorrower: this.initBorrowerForm(this.data.coBorrower || {}),
      isMailingAddressSameAsResidential: new FormControl(
        this.data.isMailingAddressSameAsResidential,
        [Validators.required]
      ),
      coBorrowerResidentialAddressSameAsBorrowerResidential: new FormControl(
        this.data.coBorrowerResidentialAddressSameAsBorrowerResidential
      ),
      residentialAddress: this.initAddressForm(
        this.data.residentialAddress || {},
        1,
        true
      ),
      mailingAddress: this.initAddressForm(
        this.data.mailingAddress || {},
        2,
        false
      ),
      previousAddresses: new FormArray([]),

      coBorrowerIsMailingAddressSameAsResidential: new FormControl(
        this.data.coBorrowerIsMailingAddressSameAsResidential
      ),
      coBorrowerResidentialAddress: this.initAddressForm(
        this.data.coBorrowerResidentialAddress || {},
        1,
        false
      ),
      coBorrowerMailingAddress: this.initAddressForm(
        this.data.coBorrowerMailingAddress || {},
        2,
        false
      ),
      coBorrowerPreviousAddresses: new FormArray([]),
    });

    // this._activatedRoute.queryParams.subscribe(async (params) => {
    //   const id = params["id"];
    //   if (id) {
    //     this._loanApplicationService.get(`Get?id=${id}`).subscribe(
    //       (response: Result<ILoanApplicationModel>) => {
    //         if (response.success) {
    //           this._dataService.loanApplication = response.result;
    //           this.data = response.result.personalInformation;
    //           this.form.value = response.result.personalInformation;
    //           this.form.patchValue(this.data);
    //         }
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    //   }
    // });
    this.form
      .get("isApplyingWithCoBorrower")
      .valueChanges.subscribe((isApplyingWithCoBorrower) => {
        if (isApplyingWithCoBorrower) {
          this.form
            .get("useIncomeOfPersonOtherThanBorrower")
            .setValidators([Validators.required]);

          this.data.coBorrower = this.data.coBorrower || {};
          this.form.setControl(
            "coBorrower",
            this.initBorrowerForm(this.data.coBorrower)
          );

          this.data.coBorrowerResidentialAddress =
            this.data.coBorrowerResidentialAddress || {};
          this.data.coBorrowerMailingAddress =
            this.data.coBorrowerMailingAddress || {};
          this.form.addControl(
            "coBorrowerResidentialAddress",
            this.initAddressForm(
              this.data.coBorrowerResidentialAddress,
              1,
              false
            )
          );
          this.form.addControl(
            "coBorrowerMailingAddress",
            this.initAddressForm(this.data.coBorrowerMailingAddress, 2, false)
          );
          this.form.addControl(
            "coBorrowerPreviousAddresses",
            new FormArray([])
          );
        } else {
          this.form.get("useIncomeOfPersonOtherThanBorrower").setValue(null);
          this.form
            .get("useIncomeOfPersonOtherThanBorrower")
            .setValidators(null);

          this.form.removeControl("coBorrower");
          this.form.removeControl("coBorrowerResidentialAddress");
          this.form.removeControl("coBorrowerMailingAddress");
          this.form.removeControl("coBorrowerPreviousAddresses");
        }
        this.form
          .get("useIncomeOfPersonOtherThanBorrower")
          .updateValueAndValidity();
      });

    this.form
      .get("residentialAddress")
      .valueChanges.subscribe((residentialAddress) => {
        if (
          residentialAddress.years &&
          (residentialAddress.years == 1 || residentialAddress.years == 0)
        ) {
          if (this.previousAddressesFormArray.length === 0)
            this.addPreviousAddress();
        } else {
          this.removeaddPreviousAddressForm(null, 0);
        }
      });

    this.form
      .get("coBorrowerResidentialAddress")
      .valueChanges.subscribe((coBorrowerResidentialAddress) => {
        if (
          coBorrowerResidentialAddress.years &&
          (coBorrowerResidentialAddress.years == 1 ||
            coBorrowerResidentialAddress.years == 0)
        ) {
          if (this.coBorrowerPreviousAddressesFormArray.length === 0)
            this.addCoBorrowerPreviousAddress();
        } else {
          this.removeCoBorrowerPreviousAddressForm(null, 0);
        }
      });

    this.form
      .get("isMailingAddressSameAsResidential")
      .valueChanges.subscribe((isMailingAddressSameAsResidential) => {
        if (isMailingAddressSameAsResidential) {
          this.form.removeControl("mailingAddress");
        } else {
          this.data.mailingAddress = this.data.mailingAddress || {};
          this.form.addControl(
            "mailingAddress",
            this.initAddressForm(this.data.mailingAddress, 2, false)
          );
        }
      });

    this.form
      .get("coBorrowerResidentialAddressSameAsBorrowerResidential")
      .valueChanges.subscribe(
        (coBorrowerResidentialAddressSameAsBorrowerResidential) => {
          if (coBorrowerResidentialAddressSameAsBorrowerResidential) {
            this.data.coBorrowerResidentialAddress.addressLine1 = this.data.residentialAddress.addressLine1;
            this.data.coBorrowerResidentialAddress.addressLine2 = this.data.residentialAddress.addressLine2;
            this.data.coBorrowerResidentialAddress.city = this.data.residentialAddress.city;
            this.data.coBorrowerResidentialAddress.stateId = this.data.residentialAddress.stateId;
            this.data.coBorrowerResidentialAddress.zipCode = this.data.residentialAddress.zipCode;
          } else {
            if (
              coBorrowerResidentialAddressSameAsBorrowerResidential === false
            ) {
              this.form
                .get("coBorrowerResidentialAddress.addressLine1")
                .setValidators([Validators.required]);
              this.form
                .get("coBorrowerResidentialAddress.city")
                .setValidators([Validators.required]);
              this.form
                .get("coBorrowerResidentialAddress.stateId")
                .setValidators([Validators.required]);
              this.form
                .get("coBorrowerResidentialAddress.zipCode")
                .setValidators([Validators.required]);
            }
            // this.data.coBorrowerResidentialAddress =
            //   this.data.coBorrowerResidentialAddress || {};
            // this.form.addControl(
            //   "coBorrowerResidentialAddress",
            //   this.initAddressForm(
            //     this.data.coBorrowerResidentialAddress,
            //     2,
            //     false
            //   )
            // );
          }
        }
      );

    this.form
      .get("coBorrowerIsMailingAddressSameAsResidential")
      .valueChanges.subscribe((value) => {
        if (value) {
          this.form.removeControl("coBorrowerMailingAddress");
        } else {
          this.data.coBorrowerMailingAddress =
            this.data.coBorrowerMailingAddress || {};
          this.form.addControl(
            "coBorrowerMailingAddress",
            this.initAddressForm(this.data.coBorrowerMailingAddress, 2, false)
          );
        }
      });
  }
  dateofBirthValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const date = moment(control.value);
      const today = moment();
      var duration = moment.duration(today.diff(date));
      if (duration.asYears() < 18) {
        return { invaliddateofBirth: true };
      }
    }
    return null;
  }
  initBorrowerForm(data: IBorrowerModel = {}) {
    return new FormGroup({
      id: new FormControl(data.id),
      firstName: new FormControl(data.firstName, [Validators.required]),
      middleInitial: new FormControl(data.middleInitial),
      lastName: new FormControl(data.lastName, [Validators.required]),
      suffix: new FormControl(data.suffix),
      email: new FormControl(data.email, [
        Validators.required,
        Validators.email,
      ]),
      dateOfBirth: new FormControl(data.dateOfBirth, [
        Validators.required,
        this.dateofBirthValidator,
      ]),
      socialSecurityNumber: new FormControl(data.socialSecurityNumber, [
        Validators.required,
      ]),
      maritalStatusId: new FormControl(data.maritalStatusId, [
        Validators.required,
      ]),
      numberOfDependents: new FormControl(data.numberOfDependents, [
        Validators.min(0),
        Validators.max(10),
      ]),
      cellPhone: new FormControl(data.cellPhone, [Validators.required]),
      homePhone: new FormControl(data.homePhone),
    });
  }

  initAddressForm(
    data: IAddressModel = {},
    addressTypeId: number,
    required: boolean
  ) {
    return new FormGroup({
      id: new FormControl(data.id),
      addressLine1: new FormControl(
        data.addressLine1,
        required ? [Validators.required] : []
      ),
      addressLine2: new FormControl(data.addressLine2),
      city: new FormControl(data.city, required ? [Validators.required] : []),
      stateId: new FormControl(
        data.stateId,
        required ? [Validators.required] : []
      ),
      zipCode: new FormControl(
        data.zipCode,
        required ? [Validators.required] : []
      ),
      years: new FormControl(data.years, required ? [Validators.required] : []),
      months: new FormControl(data.months),
    });
  }

  onChange(event, key) {
    this.data[key] = event;
  }

  trackByFn(index: any, item: any) {
    return index;
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
    if (
      formData.personalInformation
        .coBorrowerResidentialAddressSameAsBorrowerResidential
    ) {
      formData.personalInformation.coBorrowerResidentialAddress.addressLine1 =
        formData.personalInformation.residentialAddress.addressLine1;
      formData.personalInformation.coBorrowerResidentialAddress.addressLine2 =
        formData.personalInformation.residentialAddress.addressLine2;
      formData.personalInformation.coBorrowerResidentialAddress.city =
        formData.personalInformation.residentialAddress.city;
      formData.personalInformation.coBorrowerResidentialAddress.stateId =
        formData.personalInformation.residentialAddress.stateId;
      formData.personalInformation.coBorrowerResidentialAddress.zipCode =
        formData.personalInformation.residentialAddress.zipCode;
    }
    this._loanApplicationService
      .post<Result<ILoanApplicationModel>>("Add", formData)
      .subscribe(
        (response) => {
          this._dataService.loanApplication = response.result;
          this.data = this._dataService.loanApplication.personalInformation;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  proceedToNext(event?: string, stepIndex?: number) {
    this.submitForm();
    if (event === "wizardStep") {
      let fields = [];
      switch (stepIndex) {
        case 1:
          {
            fields = ["isApplyingWithCoBorrower"];
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
          }
          break;
        case 2: {
          fields = [
            "agreePrivacyPolicy",
            "borrower.firstName",
            "borrower.lastName",
            "borrower.email",
            "borrower.dateOfBirth",
            "borrower.socialSecurityNumber",
            "borrower.maritalStatusId",
            "borrower.cellPhone",
            "coBorrower.firstName",
            "coBorrower.lastName",
            "coBorrower.email",
            "coBorrower.dateOfBirth",
            "coBorrower.socialSecurityNumber",
            "coBorrower.maritalStatusId",
            "coBorrower.cellPhone",
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
        }
      }
    } else {
      if (this.form.valid) {
        this._activatedRoute.queryParams.subscribe(async (params) => {
          const id = params["id"];
          if (id) {
            this._route.navigate(["app/expense"], {
              queryParams: {
                id: id,
              },
            });
          } else {
            this._route.navigate(["app/expense"]);
          }
        });
      } else {
        this.form.markAllAsTouched();
      }
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
  }
}
