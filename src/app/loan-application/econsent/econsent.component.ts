import { PersonalInformationComponent } from "./../personal-information/personal-information.component";
import { Borrower } from "./../../../shared/service-proxies/service-proxies";
import { Component, DoCheck, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgWizardConfig, NgWizardService, THEME } from "ng-wizard";
import { IConsentModel } from "../../interfaces/IConsentModel";
import { IBorrowerModel } from "../../interfaces/IBorrowerModel";
import { DataService } from "../../services/data.service";
import { ILoanApplicationModel } from "../../interfaces/ILoanApplicationModel";
import { Router } from "@angular/router";
import { IPersonalInformationModel } from "@app/interfaces/IPersonalInformationModel";
import { ActivatedRoute } from "@angular/router";
import { LoanApplicationService } from "../../services/loan-application.service";
import { Result } from "common";

@Component({
  selector: "app-econsent",
  templateUrl: "./econsent.component.html",
  styleUrls: ["./econsent.component.css"],
})
export class EconsentComponent implements OnInit, DoCheck {
  data: IConsentModel = {};
  borrower: IBorrowerModel = {};
  form: FormGroup;
  isApplyingWithCoBorrower: boolean;
  coBorrower: IBorrowerModel = {};
  personalInformation: IPersonalInformationModel = {};

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
      this.data = this._dataService.loanApplication.eConsent;
      if(!this.data){
      this.data = {};

      }
      this.borrower = this._dataService.loanApplication.personalInformation.borrower;
      this.coBorrower = this._dataService.loanApplication.personalInformation.coBorrower;
      this.personalInformation = this._dataService.loanApplication.personalInformation;
    }

    this.data.firstName = this.borrower.firstName;
    this.data.lastName = this.borrower.lastName;
    this.data.email = this.borrower.email;
    if (this.coBorrower) {
      this.data.CoborrowerFirstName = this.coBorrower.firstName;
      this.data.CoborrowerLastName = this.coBorrower.lastName;
      this.data.CoborrowerEmail = this.coBorrower.email;
    }

    this.initForm();

    this._dataService.formData.subscribe((formData: ILoanApplicationModel) => {
      if (formData && formData.eConsent) {
        this.form.patchValue(formData.eConsent);
      }
    });
    const loanApplication = this._dataService.loanApplication;
    this.isApplyingWithCoBorrower =
      loanApplication.personalInformation &&
      loanApplication.personalInformation.isApplyingWithCoBorrower;
    const consentDetail = this._dataService.loanApplication;
  }

  ngDoCheck() {
    this.data = this.form.value;
    this._dataService.updateData(this.form.value, "eConsent");
    this.personalInformation.borrower.firstName = this.data.firstName;
    this.personalInformation.borrower.lastName = this.data.lastName;
    this.personalInformation.borrower.email = this.data.email;
    if (this.coBorrower) {
      this.personalInformation.coBorrower.firstName = this.data.CoborrowerFirstName;
      this.personalInformation.coBorrower.lastName = this.data.CoborrowerLastName;
      this.personalInformation.coBorrower.email = this.data.CoborrowerEmail;
    }
    this._dataService.updateData(
      this.personalInformation,
      "personalInformation"
    );
  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl(this.data.id),
      agreeEConsent: new FormControl(this.data.agreeEConsent),
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      email: new FormControl(this.data.email),
      CoborrowerAgreeEConsent: new FormControl(
        this.data.CoborrowerAgreeEConsent
      ),
      CoborrowerFirstName: new FormControl(this.data.CoborrowerFirstName),
      CoborrowerLastName: new FormControl(this.data.CoborrowerLastName),
      CoborrowerEmail: new FormControl(this.data.CoborrowerEmail),
      IamBorrowerCoBorrower: new FormControl(this.data.IamBorrowerCoBorrower),
    });
  }

  onChange(event, key) {
    this.coBorrower.lastName = this.data.CoborrowerLastName;
    this.coBorrower.firstName = this.data.CoborrowerFirstName;
    this.borrower.lastName = this.data.lastName;
    this.borrower.firstName = this.data.firstName;
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
          this.data = this._dataService.loanApplication.eConsent;
          this.borrower = this._dataService.loanApplication.personalInformation.borrower;
          this.coBorrower = this._dataService.loanApplication.personalInformation.coBorrower;
          this.personalInformation = this._dataService.loanApplication.personalInformation;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  proceedToNext(event?: string, stepIndex?: number) {
    this.submitForm();
    if (event === "wizardStep") {
      this._ngWizardService.next();
    } else {
      if (this.form.valid) {
        this._activatedRoute.queryParams.subscribe(async (params) => {
          const id = params["id"];
          if (id) {
            this._route.navigate(["app/declaration"], {
              queryParams: {
                id: id,
              },
            });
          } else {
            this._route.navigate(["app/declaration"]);
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
          this._route.navigate(["app/additional-detail"], {
            queryParams: {
              id: id,
            },
          });
        } else {
          this._route.navigate(["app/additional-detail"]);
        }
      });
    }
  }
}
