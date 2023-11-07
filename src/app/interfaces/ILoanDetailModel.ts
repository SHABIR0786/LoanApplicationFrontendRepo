export interface ILoanDetailModel {
  id?: number;
  whatStageAreyouIn?: number;
  isWorkingWithOfficer?: boolean;
  loanOfficerId?: string;
  referredBy?: string;
  purposeOfLoan?: number;
  estimatedValue?: number;
  currentLoanAmount?: number;
  requestedLoanAmount?: number;
  estimatedPurchasePrice?: number;
  downPaymentAmount?: number;
  downPaymentPercentage?: number;
  sourceOfDownPayment?: number;
  giftAmount?: number;
  giftExplanation?: string;
  estimatedAnnualTaxes?: number;
  estimatedAnnualHomeInsurance?: number;

  firstName?: string;
  lastName?: string;
  middleName?: string;
  phoneNumber?: string;
  emailAddress?: string;

  address?: string;
  unit?: string;
  zipCode?: string;
  creditScore?: string;

  contractDate?: Date;
  newConstruction?: boolean;
  bankOwned?: boolean;
  hoaDues?: number;

  TypeOfHome?: number;
  haveSecondMortgage?: boolean;
  secondMortgageAmount?: number;
  payLoanWithNewLoan?: boolean;

  startedLookingForNewHome?: boolean;
  refinancingCurrentHome?: boolean;
  yearAcquired?: string;
  originalPrice?: number;
  city?: string;
  stateId?: number;
  propertyTypeId?: number;
  propertyUseId?: number;

  loanOfficerName?: string;
  loanPurpose?: string;
  sourceOfDownPaymentName?: string;
  propertyUseName?: string;
  propertyTypeName?: string;
  stateName?: string;
}
