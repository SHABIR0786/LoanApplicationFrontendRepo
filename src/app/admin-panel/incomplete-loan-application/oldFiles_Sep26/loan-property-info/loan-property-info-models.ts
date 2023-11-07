export class LoanPropertyInfoModels {
  loanPropertyInfo: LoanPropertyInfo = new LoanPropertyInfo();
  newMortgageLoans: NewMortgageLoans[] = [new NewMortgageLoans()];
  rentalIncome: RentalIncome = new RentalIncome();
  giftsOrGrants: GiftsOrGrants[] = [new GiftsOrGrants()];
}
export class LoanPropertyInfo {
  id: number;
  creationTime: Date;
  creatorUserId: number;
  lastModificationTime: Date;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: Date;
  personalInformationId: number;
  loanAmount: number;
  loanPurpose: string;
  occupancy: string;
  isManufacturedHome: boolean;
  isMixedUseProperty: boolean;
  propertyAddress: PropertyAddress = new PropertyAddress();
}
export class PropertyAddress {
  id: number;
  creationTime: Date;
  creatorUserId: number;
  lastModificationTime: Date;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: Date;
  personalInformationId: number;
  street: string;
  cityId: number;
  stateId: number;
  countryId: number;
  zip: string;
  numberOfUnits: number;
}
export class NewMortgageLoans {
  id: number;
  creationTime: Date;
  creatorUserId: number;
  lastModificationTime: Date;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: Date;
  personalInformationId: number;
  creditorName: string;
  lienType: string;
  monthlyPayment: number;
  loanAmount: number;
  creditLimit: number;
}
export class RentalIncome {
  id: number;
  creationTime: Date;
  creatorUserId: number;
  lastModificationTime: Date;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: Date;
  personalInformationId: number;
  monthlyRentalIncome: number;
  netMonthlyRentalIncome: number;
}
export class GiftsOrGrants {
  id: number;
  creationTime: Date;
  creatorUserId: number;
  lastModificationTime: Date;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: Date;
  personalInformationId: number;
  assetTypeId: number;
  isDeposited: boolean;
  source: string;
  marketValue: number;
}
