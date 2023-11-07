import { IBorrowerModel } from "./IBorrowerModel";
import { IAddressModel } from "./IAddressModel";

export interface IPersonalInformationModel {
  id?: number;
  isApplyingWithCoBorrower?: boolean;
  useIncomeOfPersonOtherThanBorrower?: boolean;
  agreePrivacyPolicy?: boolean;
  borrower?: IBorrowerModel;
  coBorrower?: IBorrowerModel;
  residentialAddress?: IAddressModel;
  previousAddresses?: IAddressModel[];
  mailingAddress?: IAddressModel;
  isMailingAddressSameAsResidential?: boolean;

  coBorrowerResidentialAddress?: IAddressModel;
  coBorrowerPreviousAddresses?: IAddressModel[];
  coBorrowerMailingAddress?: IAddressModel;
  coBorrowerIsMailingAddressSameAsResidential?: boolean;
  coBorrowerResidentialAddressSameAsBorrowerResidential?: boolean;
}
