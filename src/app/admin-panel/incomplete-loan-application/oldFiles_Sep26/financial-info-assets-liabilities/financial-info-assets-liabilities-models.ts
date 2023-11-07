export class FinancialInfoAssetsLiabilitiesModels {
  mortgageFinancialAssets: mortgageFinancialAssets[] = [
    new mortgageFinancialAssets(),
  ];
  mortgageFinancialOtherAssets: mortgageFinancialOtherAssets[] = [
    new mortgageFinancialOtherAssets(),
  ];
  mortgageFinancialLiabilities: mortgageFinancialLiabilities[] = [
    new mortgageFinancialLiabilities(),
  ];
  mortgageFinancialOtherLaibilities: mortgageFinancialOtherLaibilities[] = [
    new mortgageFinancialOtherLaibilities(),
  ];
}
export class mortgageFinancialAssets {
  id: number;
  creationTime: string;
  creatorUserId: number;
  lastModificationTime: string;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: string;
  accountTypeId: number;
  financialInstitution: string;
  accountNumber: string;
  cashMarketValue: number;
  personalInformationId: number;
}
export class mortgageFinancialOtherAssets {
  id: number;
  creationTime: string;
  creatorUserId: number;
  lastModificationTime: string;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: string;
  financialAssetsTypeId: number;
  cashMarketValue: number;
  personalInformationId: number;
}
export class mortgageFinancialLiabilities {
  id: number;
  creationTime: string;
  creatorUserId: number;
  lastModificationTime: string;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: string;
  financialLaibilitiesTypeId: number;
  companyName: string;
  accountNumber: string;
  unpaidBalance: number;
  isPaidBeforeClosing: boolean = false;
  isPaidBeforeClosing1: boolean = false;
  monthlyPayment: number;
  PersonalInformationId: number;
}
export class mortgageFinancialOtherLaibilities {
  id: number;
  creationTime: string;
  creatorUserId: number;
  lastModificationTime: string;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: string;
  financialLaibilitiesTypeId: number;
  monthlyPayment: number;
  personalInformationId: number;
}
