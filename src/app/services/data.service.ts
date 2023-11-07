import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { FormArray, FormGroup } from "@angular/forms";
import { ILoanApplicationModel } from "../interfaces/ILoanApplicationModel";

@Injectable()
export class DataService {
  errors = {};
  validationSource = new BehaviorSubject<any>(this.errors);
  validations = this.validationSource.asObservable();

  formDataSource = new BehaviorSubject<ILoanApplicationModel>({});
  formData = this.formDataSource.asObservable();

  loanApplication: ILoanApplicationModel = {
    id: 0,
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
      coBorrowerMonthlyIncome: {},
      coBorrowerEmploymentInfo: [{}],
      additionalIncomes: [{}],
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

  updateValidations(formGroup: FormGroup, formName: string) {
    if (formGroup) {
      this.errors[formName] = Object.keys(formGroup.controls)
        .map((key) => ({
          controlName: key,
          error: formGroup.controls[key].errors !== null,
        }))
        .filter((error) => error.error);
      this.validationSource.next(this.errors);
    }
  }

  updateValidationsFormArr(formArray: FormArray, formName: string) {
    if (formArray && formArray.length) {
      const arr = formArray.controls.map((formGroup: FormGroup) => {
        return Object.keys(formGroup.controls)
          .map((key) => ({
            controlName: key,
            error: formGroup.controls[key].errors !== null,
          }))
          .filter((error) => error.error);
      });
      this.errors[formName] = [].concat.apply([], arr);
      this.validationSource.next(this.errors);
    }
  }

  updateFormData(formData: ILoanApplicationModel) {
    this.formDataSource.next(formData);
  }

  updateData(data, key) {
    this.loanApplication[key] = data;
  }
}
