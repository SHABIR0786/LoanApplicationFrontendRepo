export interface IBorrowerDeclarationModel {
  id?: number;
  isOutstandingJudgmentsAgainstYou?: boolean;
  isDeclaredBankrupt?: boolean;
  isPropertyForeClosedUponOrGivenTitle?: boolean;
  isPartyToLawsuit?: boolean;
  isObligatedOnAnyLoanWhichResultedForeclosure?: boolean;
  isPresentlyDelinquent?: boolean;
  isObligatedToPayAlimonyChildSupport?: boolean;
  isAnyPartOfTheDownPayment?: boolean;
  isCoMakerOrEndorser?: boolean;
  isUSCitizen?: boolean;
  isPermanentResidentSlien?: boolean;
  isIntendToOccupyThePropertyAsYourPrimary?: boolean;
  isOwnershipInterestInPropertyInTheLastThreeYears?: boolean;
  declarationsSection?: string;
}
