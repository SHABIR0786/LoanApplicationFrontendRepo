export class PostModel {
  leadApplicationDetailPurchasingId: number = 1;
  firstChoice: string;
  stage: string;
  workingWdEz: boolean;
  ezLoadOfficer: string;
  newHomeAddress: string;
  newHomeUnit: string;
  newHomeCityTown: string;
  newHomeState: string = "1";
  currentStateName: string;
  newHomeStateName: string = "";
  newHomeZip: string;
  contractDate: string;
  propertyOption1: string;
  propertyOption2: string;
  estimatedPrice: string;
  downPaymentAmount: string;
  downPaymentPercent: string;
  estAnnualTaxes: string;
  estAnnualHomeIns: string;
  creditScore: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  homeType: string;
  monthlyhoadues: string;
  homePlan: string;
  milStatus: string;
  milBranch: string;
  milEts: string;
  etsDate: string;
  milVa: boolean;
  milLive: string;
  isMillitary: boolean;
  milFirstName: string;
  milMiddleName: string;
  milLastName: string;
  milPhoneNumber: string;
  milEmail: string;
  milPassword: string;
  milPasswordConfirm: string;
  empW2: string;
  empName: string;
  empAddress: string;
  empAptUnit: string;
  empCityTown: string;
  empState: string = "1";
  empZip: string;
  empIsCurrentJob: boolean;
  empEstDate: string;
  jobTitle: string;
  estAnualBaseSalary: string;
  estAnualBonus: string;
  estAnualCommision: string;
  estAnualOverTime: string;
  haveAnyOtherEmpForm: boolean;
  haveOtherSourceOfIncome: boolean;
  accountType: string;
  finInstitute: string;
  finBalance: string;
  haveOtherAssets: boolean;
  govSex: string;
  govConfirmaion: boolean;
  govEthnicity: string;
  govEthnicitytext: string;
  govRace: string;
  govRaceText: string;
  govQ1: string;
  govQ2: string;
  govQ3: string;
  govQ4: string;
  govQ5: string;
  govQ6: string;
  govQ7: string;
  govQ8: string;
  govQ9: string;
  govQ10: string;
  govQ11: string;
  govQ12: string;
  govQ13: string;
  govQ14: string;
  govQ15: string;
  govAgree1: boolean;
  govAgree2: boolean;
  govAgree3: boolean;
  ssn: string;
  ssnConfirm: string;
  ssnBirthDay: string;
  isReadConsent: boolean;
  isReadThirdPartyConsent: boolean;
  isCertify: boolean;

  personalLegalFirstName: string;
  personalMiddleInitial: string;
  personalLegalLastName: string;
  personalPhoneNumber: string;
  personalEmailAddress: string;
  personalPassword: string;
  personalPasswordCon: string;

  isSomeOneRefer: number;
  isApplyOwn: number;
  maritialStatus: string;
  numberOfDependents: number;
  currentAddress: string;
  currentUnit: string;
  currentCity: string;
  currentStateId: number = 1;
  currentZipCode: string;
  currentStartLivingDate: string;
  currentReantingType: string;
  monthlyExpress: number;
  citizenshipId: number;
}
export class AddFinanceApiModel {
  stage: string;
  isWorkingWithEzalready: number;
  workingOfficerName: string;
  newHomeAddress: string;
  newHomeUnit: string;
  newHomeCity: string;
  newHomeStateId: number = 1;
  newHomeZipCode: string;
  contractClosingDate: string;
  contractType: string;
  estimatedHomePrice: number;
  downPaymentAmount: number;
  downPaymentPercentage: number;
  estimatedAnnualTax: number;
  estimatedAnnualHomeInsurance: number;
  creditScore: string;
  propertyLegalFirstName: string;
  propertyMiddleInitial: string;
  propertyLegalLastName: string;
  propertyPhoneNumber: string;
  propertyEmailAddress: string;
  typeOfHome: string;
  monthlyHoadues: number;
  typeOfNewHome: string;
  isMilitaryMember: number;
  currentMilitaryStatus: string;
  militaryBranch: string;
  isEtsdateinYear: number;
  etsdate: string;
  isValoanPreviously: number;
  whoLivingInHome: string;
  personalLegalFirstName: string;
  personalMiddleInitial: string;
  personalLegalLastName: string;
  personalPhoneNumber: string;
  personalEmailAddress: string;
  personalPassword: string;
  isSomeOneRefer: number;
  isApplyOwn: number;
  maritialStatus: string;
  numberOfDependents: number;
  currentAddress: string;
  currentUnit: string;
  currentCity: string;
  currentStateId: number = 1;
  currentZipCode: string;
  currentStartLivingDate: string;
  currentReantingType: string;
  estimatedMonthlyExpenses: number;
  isEmployementHistory: number;
  isOtherSourceOfIncome: number;
  sex: string;
  ethnicity: string;
  race: string;
  citizenshipId: number;
  isCertify: number;
  isReadEconsent: number;
  isReadThirdPartyConsent: number;
  socialSecurityNumber: string;
  conformSsn: string;
  birthDate: string;

  map(e: PostModel) {
    this.stage = e.stage;
    this.isWorkingWithEzalready = e.workingWdEz ? 1 : 0;
    this.workingOfficerName = e.ezLoadOfficer;
    this.newHomeAddress = e.newHomeAddress;
    this.newHomeUnit = e.newHomeUnit;
    this.newHomeCity = e.newHomeCityTown;
    this.newHomeStateId = parseInt(e.newHomeState);
    this.newHomeZipCode = e.newHomeZip;
    this.contractClosingDate = e.contractDate;
    /* to be done */
    this.contractType = e.propertyOption1;
    this.estimatedHomePrice = parseFloat(e.estimatedPrice);
    this.downPaymentAmount = parseFloat(e.downPaymentAmount);
    this.downPaymentPercentage = parseFloat(e.downPaymentPercent);
    this.estimatedAnnualTax = parseFloat(e.estAnnualTaxes);
    this.estimatedAnnualHomeInsurance = parseFloat(e.estAnnualHomeIns);
    this.creditScore = e.creditScore;
    this.propertyLegalFirstName = e.firstName;
    this.propertyMiddleInitial = e.middleName;
    this.propertyLegalLastName = e.lastName;
    this.propertyPhoneNumber = e.phone;
    this.propertyEmailAddress = e.email;
    this.typeOfHome = e.homeType;
    this.monthlyHoadues = parseFloat(e.monthlyhoadues);
    // to be dn
    this.typeOfNewHome = e.homePlan;
    this.isMilitaryMember = e.isMillitary ? 1 : 0;
    this.currentMilitaryStatus = e.milStatus;
    this.militaryBranch = e.milBranch;
    this.isEtsdateinYear = new Date(e.milEts).getFullYear();
    this.etsdate = e.etsDate;
    this.isValoanPreviously = e.milVa ? 1 : 0;
    this.whoLivingInHome = e.milLive;
    this.personalLegalFirstName = e.milFirstName;
    this.personalMiddleInitial = e.milMiddleName;
    this.personalLegalLastName = e.milLastName;
    this.personalPhoneNumber = e.milPhoneNumber;
    this.personalEmailAddress = e.milEmail;
    this.personalPassword = e.milPassword;
    // to be done
    this.isSomeOneRefer = e.isSomeOneRefer;

    // to be done
    this.isApplyOwn = e.isApplyOwn;

    // to be don
    this.maritialStatus = e.maritialStatus;

    // to be done
    this.numberOfDependents = e.numberOfDependents;

    this.currentAddress = e.currentAddress;
    this.currentUnit = e.currentUnit;
    this.currentCity = e.currentCity;
    this.currentStateId = e.currentStateId;
    this.currentZipCode = e.currentZipCode;
    this.currentStartLivingDate = e.currentStartLivingDate;

    //to be done
    this.currentReantingType = e.currentReantingType;

    //to be done
    this.estimatedMonthlyExpenses = e.monthlyExpress;

    this.isEmployementHistory = e.haveAnyOtherEmpForm ? 1 : 0;
    this.sex = e.govSex;
    this.ethnicity = e.govEthnicity;
    this.race = e.govRace;

    //to be done
    this.citizenshipId = e.citizenshipId;

    //to be done
    this.isCertify = e.govAgree1 ? 1 : 0;

    this.isReadEconsent = e.govAgree2 ? 1 : 0;
    this.isReadThirdPartyConsent = e.govAgree3 ? 1 : 0;

    this.socialSecurityNumber = e.ssn;
    this.conformSsn = e.ssnConfirm;
    this.birthDate = e.ssnBirthDay;
    return this;
  }
}

export class RefinancePost {
  leadApplicationDetailRefinancingId: number = 1;
  id: number = 0;
  "isWorkingWithEzalready": number;
  "currentStateName": string;
  "empStateName": string;
  "propertyStateName": string;
  "workingOfficerName": string;
  "objectiveReason": string;
  "propertyAddress": string;
  "propertyUnit": string;
  "propertyCity": string;
  "propertyZip": string;
  "propertyStateId": number = 1;
  "propertyCountryId": number;
  "propertyEstimatedValue": number;
  "propertyLoanBalance": number;
  "propertCashOutAmount": number;
  "newLoanEstimateAmount": number;
  "creditScore": string;
  "typeOfHome": string;
  "monthlyHoadues": number;
  "yearHomePurchased": number;
  "orignalPurchasedPrice": number;
  "estimatedAnnualTax": number;
  "estimatedAnnualHomeInsurance": number;
  "currentlyUsingHomeAs": string;
  "isMilitaryMember": number;
  "currentMilitaryStatus": string;
  "militaryBranch": string;
  "isEtsdateinYear": number;
  "etsdate": Date;
  "isValoanPreviously": number;
  "whoLivingInHome": string;
  "propertyLegalFirstName": string;
  "propertyMiddleInitial": string;
  "propertyLegalLastName": string;
  "propertyPhoneNumber": string;
  "propertyEmailAddress": string;
  "propertyPassword": string;
  "reppropertyPassword": string;
  "isSomeoneRefer": number;
  "refferedBy": string;
  "isApplyOwn": number;
  "isLegalSpouse": number;
  "maritialStatus": string;
  "numberOfDependents": number;
  "firstDependantAge": number;
  "isCurrentlyLivingOnRefinancingProperty": number;
  "currentAddress": string;
  "currentUnit": string;
  "currentCity": string;
  "currentStateId": number = 1;
  "currentZipCode": string;
  "currentStartLivingDate": Date;
  "currentReantingType": string;
  "estimatedMonthlyExpenses": number;
  "personalLegalFirstName": string;
  "personalMiddleInitial": string;
  "personalLegalLastName": string;
  "personalPhoneNumber": string;
  "personalEmailAddress": string;
  "personalPassword": string;
  "reppersonalPassword": string;
  "isAddressSameAsPrimaryBorrower": number;
  "personalAddress": string;
  "personalUnit": string;
  "personalCity": string;
  "personalStateId": number = 1;
  "personalZipCode": string;
  "personalStartLivingDate": Date;
  "personalReantingType": string;
  "isEmployementHistory": number;
  w2Emp: number;
  w2EmpName: string;
  empAddress: string;
  empAptUnit: string;
  empCity: string;
  empState: number = 1;
  newHomeState: string = "1";
  empZip: string;
  empPhoneNumber: string;
  isCurrentJob: number;
  empEstDate: string;
  jobTitle: string;
  estAnnualBaseSalary: number;
  estAnnualBonus: number;
  estAnnualCommision: number;
  estAnnualOverTime: number;
  hasCoboOtherEmp: number;
  hasCoboOtherIncSrc: number;
  coboIncType: number;
  coboMonthlyAmount: string;
  assetsAccountType: string;
  assetsFinInst: string;
  assetsBalance: string;
  assetsOwner: string;
  "isCoBorrowerHaveShareIncome": number;
  "sex": string;
  "ethnicity": string;
  "race": string;
  "citizenshipId": number;
  "isCertify": number;
  "isReadEconsent": number;
  "isReadThirdPartyConsent": number;
  "socialSecurityNumber": string;
  "conformSsn": string;
  "birthDate": Date;
}

export class LeadAssetDetail {
  Id: number;
  leadApplicationDetailPurchasingId: number;
  leadApplicationDetailRefinancingId: number;
  AssetTypeId: number;
  LeadApplicationTypeId: number;
  FinancialInstitution: number;
  Balance: number;
  OwnerTypeId: number;
  haveOtherSourceOfIncome: boolean;
}

export class MonthlyIncomeDetailsAdd {
  Id: number;
  leadApplicationDetailPurchasingId: number;
  leadApplicationDetailRefinancingId: number;
  LeadApplicationTypeId: number;
  IncomeTypeId: number;
  MonthlyAmount: number;
}

export class EmployementDetailAdd {
  "employeeTypeId": number;
  "currentOrPastEmployementHistory": boolean;
  "leadApplicationDetailPurchasingId": number;
  "leadApplicationDetailRefinancingId": number;
  "leadApplicationTypeId": number;
  "employerName": string;
  "employementAddress": string;
  "employementSuite": string;
  "employementCity": string;
  "employementTaxeId": number;
  "employementZip": string;
  "employerPhoneNumber": string;
  "isCurrentJob": number;
  "estimatedStartDate": string;
  "jobTitle": string;
  "estimatedAnnualBaseSalary": number;
  "estimatedAnnualBonus": number;
  "estimatedAnnualCommission": number;
  "estimatedAnnualOvertime": number;
  "isCoBorrower": number;
  "currentStateId": number = 1;
  "empState": number = 1;
  "newHomeState": string = "1";
  "currentStateName": string;

  map(e: EmployementDetailAdd) {
    this.employeeTypeId = e.employeeTypeId;
    this.leadApplicationDetailPurchasingId =
      e.leadApplicationDetailPurchasingId;
    this.leadApplicationDetailRefinancingId =
      e.leadApplicationDetailRefinancingId;
    this.leadApplicationTypeId = e.leadApplicationTypeId;
    this.employerName = e.employerName;
    this.employementAddress = e.employementAddress;
    this.employementSuite = e.employementSuite;
    this.employementCity = e.employementCity;
    this.employementTaxeId = e.employementTaxeId;
    this.employementZip = e.employementZip;
    this.employerPhoneNumber = e.employerPhoneNumber;
    this.isCurrentJob = e.isCurrentJob;
    this.estimatedStartDate = e.estimatedStartDate;
    this.jobTitle = e.jobTitle;
    this.estimatedAnnualBaseSalary = e.estimatedAnnualBaseSalary;
    this.estimatedAnnualBonus = e.estimatedAnnualBonus;
    this.estimatedAnnualCommission = e.estimatedAnnualCommission;
    this.estimatedAnnualOvertime = e.estimatedAnnualOvertime;
    this.isCoBorrower = e.isCoBorrower;
    this.currentStateId = e.currentStateId;
    return this;
  }
}
