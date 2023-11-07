export interface IDeclarationBorrowereDemographicsInformationModel {
  id?: number;
  isHispanicOrLatino?: boolean;
  isMexican?: boolean;
  isPuertoRican?: boolean;
  isCuban?: boolean;
  isOtherHispanicOrLatino?: boolean;
  origin?: string;

  isNotHispanicOrLatino?: boolean;
  isNotProvideInformation?: boolean;
  isAmericanIndianOrAlaskaNative?: boolean;
  nameOfEnrolledOrPrincipalTribe?: string;

  isAsian?: boolean;
  isAsianIndian?: boolean;
  isChinese?: boolean;
  isFilipino?: boolean;
  isJapanese?: boolean;
  isKorean?: boolean;
  isVietnamese?: boolean;
  isOtherAsian?: boolean;

  enterRace?: string;
  isBlackOrAfricanAmerican?: boolean;
  isNativeHawaiianOrOtherPacificIslander?: boolean;
  isNativeHawaiian?: boolean;
  isGuamanianOrChamorro?: boolean;
  isSamoan?: boolean;
  isOtherPacificIslander?: boolean;
  EnterRace2?: string;
  isWhite?: boolean;
  isWishToprovideInformation?: boolean;

  isMale?: boolean;
  isFemale?: boolean;
  isDonotProvideSexInformattion?: boolean;
}
