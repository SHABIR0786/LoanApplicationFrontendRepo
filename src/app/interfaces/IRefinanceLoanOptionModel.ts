export interface IRefinanceLoanOptionModel {
  id?: number;
  important_to_you?: string;
  PropertyUse?: string;
  propertyType?: string;
  zipCode?: string;
  estimatePrice?: number;
  remainingBalalnce?: number;
  haveAnyOtherLoanForThisProperty?: boolean;
  loanHomeEquity?: boolean;
  payThatOff?: boolean;
  balanceOfHomeEquity?: number;
  homeEquityPurchase?: boolean;
  borrowAdditionalCash?: number;
  howLongPlan?: string;
  militarySevice?: boolean;
  rateCredit?: string;
  workingWithLoanOfficer?: boolean;
  officerName?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  phoneNumber?: string;
}
