export class IAssetModel {
  id?: number;
  assetTypeId?: number;
  borrowerTypeId?: number;
  name?: string;
  bankName?: string;
  description?: string;
  accountNumber?: string;
  cashValue?: number;
  address?: string;
  address2?: string;
  city?: string;
  stateId?: number;
  zipCode?: string;
  propertyStatus?: number;
  propertyIsUsedAs?: number;
  propertyType?: number;
  presentMarketValue?: number;
  outstandingMortgageBalance?: number;
  monthlyMortgagePayment?: number;
  purchasePrice?: number;
  grossRentalIncome?: number;
  taxesInsuranceAndOther?: number;
  stockAndBonds?: any[];
}
