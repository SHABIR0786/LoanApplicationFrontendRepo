import { ILoanDetailModel } from "./ILoanDetailModel";
import { IPersonalInformationModel } from "./IPersonalInformationModel";
import { IAdditionalDetailModel } from "./IAdditionalDetailModel";
import { IConsentModel } from "./IConsentModel";
import { ICreditAuthAgreementModel } from "./ICreditAuthAgreementModel";
import { IExpenseModel } from "./IExpenseModel";
import { IEmploymentIncomeModel } from "./IEmploymentIncomeModel";
import { IBorrowerDeclarationModel } from "./IBorrowerDeclarationModel";
import { IDeclarationModel } from "./IDeclarationModel";
import { IDeclarationBorrowereDemographicsInformationModel } from "./IDeclarationBorrowereDemographicsInformationModel";
import { IAssetModel } from "./IAssetModel";

export interface ILoanApplicationModel {
  id?: number;
  loanDetails?: ILoanDetailModel;
  personalInformation?: IPersonalInformationModel;
  expenses?: IExpenseModel;
  manualAssetEntries?: IAssetModel[];
  employmentIncome?: IEmploymentIncomeModel;
  orderCredit?: ICreditAuthAgreementModel;
  additionalDetails?: IAdditionalDetailModel;
  eConsent?: IConsentModel;
  declaration?: IDeclarationModel;
  declarationBorrowereDemographics?: IDeclarationBorrowereDemographicsInformationModel;
}
