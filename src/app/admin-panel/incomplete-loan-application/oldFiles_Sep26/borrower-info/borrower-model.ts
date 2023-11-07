export class BorrowModel {
  constructor() {
    this.personalInformation = new PersonalInformation();
    this.employment = [];
    this.incomeOtherSources = [];
    this.otherBorrowers = [];
  }
  personalInformation: PersonalInformation;
  employment: Employment[];
  incomeOtherSources: IncomeOtherSource[];
  otherBorrowers: OtherBorrower[];
}

export class PersonalInformation {
  constructor() {
    (this.address = []), (this.typeOfCredit = new TypeOfCredit());
    this.contactInformation = new ContactInformation();
    this.creditList = [];
    this.creditValue = "1";
  }
  borrowerType: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  socialSecurityNumber: string;
  dob: string;
  citizenship: string;
  marritalStatus: string | null = null;
  dependents: string | null = null;
  applyingFor: string;
  totalBorrowers: number;
  yourInitials: string;
  yourInitials1: string;
  alternateNames: AlternateNames;
  typeOfCredit: TypeOfCredit;
  contactInformation: ContactInformation;
  address: Address[];
  creditValue: string;
  creditList: CreditList[] = [];
  endDate: Date;
  BorrowerName: string;
}

export class AlternateNames {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
}

export class TypeOfCredit {
  applyingFor: string;
  totalBorrowers: number;
  yourIntials: string;
}

export class ContactInformation {
  homePhone: string;
  cellPhone: string;
  workPhone: string;
  ext: string;
  email: string;
}

export class GoogleAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  countryShort: string;
  postalCode: string;
}

export class Address {
  street: string;
  unit: string;
  cityId: number;
  stateId: number;
  countryId: number;
  zip: string;
  year: number | null;
  month: string;
  housingType: string;
  rent: number;
  addressType: string;
}

export class Employment {
  id: number;
  creationTime: string;
  creatorUserId: number;
  lastModificationTime: string;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: string;
  employmentType: string;
  name: string;
  phone: string;
  street: string;
  unit: string;
  cityId: number;
  stateId: number;
  countryId: number;
  zip: string;
  ownershipShare: number;
  monthlyIncome: number;
  workingYears: number | null;
  workingMonths: number;
  position: string;
  startDate: string;
  endDate: string;
  isEmployedBySomeone: boolean;
  isSelfEmployed: boolean = false;
  isOwnershipLessThan25: boolean;
  grossMonthlyIncome: GrossMonthlyIncome;
}

export class GrossMonthlyIncome {
  baseIncome: number;
  overtime: number;
  bonus: number;
  commission: number;
  militaryEntitlements: number;
  other: number;
  total: number;
}

export class IncomeOtherSource {
  monthlyIncome: number;
  sources: Source[];
}

export class Source {
  sourceType: string;
  monthlyIncome: number;
  flgDeletedRow: boolean = false;
}

export class OtherBorrower {
  borrowerType: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  socialSecurityNumber: string;
  dob: string;
  citizenship: string;
  marritalStatus: string;
  dependents: string;
  applyingFor: string;
  totalBorrowers: number;
  yourInitials: string;
  yourInitials1: string;
  alternateNames: AlternateNames2;
  typeOfCredit: TypeOfCredit2;
  contactInformation: ContactInformation2;
  address: Address2[];
}

export class AlternateNames2 {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
}

export class TypeOfCredit2 {
  applyingFor: string;
  totalBorrowers: number;
  yourIntials: string;
}

export class ContactInformation2 {
  homePhone: string;
  cellPhone: string;
  workPhone: string;
  ext: string;
  email: string;
}

export class Address2 {
  street: string;
  unit: string;
  cityId: number;
  stateId: number;
  countryId: number;
  zip: string;
  year: number | null;
  month: string;
  housingType: string;
  rent: number;
  addressType: string;
}
export class CreditList {
  Firstname: string;
  Middlename: string;
  Lastname: string;
  Surfix: string;
  Email: string;
}
