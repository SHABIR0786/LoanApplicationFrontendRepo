export class FinancialInfoRealEstate {
  id: number;
  creationTime: Date;
  creatorUserId: number;
  lastModificationTime: Date;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: Date;
  financialInformationType: string;
  personalInformationId: number;
  street: string;
  unit: string;
  cityId: number;
  stateId: number;
  countryId: number;
  zip: string;
  propertyValue: number;
  intendedOccupancy: string;
  monthlyInsurance: number;
  monthlyRentalIncome: number;
  netMonthlyRentalIncome: number;
  flgMortgageLoanNotApply: boolean = false;
  flgApplicableNotApply: boolean = false;
  mortgageLoanOnProperty: MortgageLoanOnProperty[] = [
    new MortgageLoanOnProperty(),
  ];
  flgShowRemove: boolean = false;
  cityListAddress0: any[] = [];
  stateListAddress0: any[] = [];
}
export class MortgageLoanOnProperty {
  id: number;
  creationTime: Date;
  creatorUserId: number;
  lastModificationTime: Date;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: Date;
  creditorName: string;
  accountNumber: string;
  monthlyMortagagePayment: number;
  unpaidBalance: number;
  type: string;
  creditLimit: number;
  isPaidBeforeClosing: boolean;
  isPaidBeforeClosing1: boolean;
  // removeMortgageLoanPropertyList:any[]=[]
}
