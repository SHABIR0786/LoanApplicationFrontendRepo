import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  Address,
  AlternateNames,
  BorrowModel,
  CreditList,
  Employment,
  GoogleAddress,
  GrossMonthlyIncome,
  IncomeOtherSource,
  PersonalInformation,
  Source,
} from "./borrower-model";
import { LoanManagementService } from "@shared/service/loanmanagement.service";
import { BorrowService } from "app/services/borrow.service";
import { Router } from "@angular/router";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { add } from "lodash";
import { NgForm } from "@angular/forms";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { parse } from "path";

@Component({
  selector: "app-borrower-info",
  templateUrl: "./borrower-info.component.html",
  styleUrls: ["./borrower-info.component.css"],
})
export class BorrowerInfoComponent implements OnInit {
  @ViewChild("creditItemsStreet") placesRef: GooglePlaceDirective;
  @ViewChild("street1") street1: GooglePlaceDirective;

  options: any = {
    componentRestrictions: { country: "US" },
  };

  borrowerInfo: BorrowModel = new BorrowModel();
  doNotApplyForAddress0: boolean = false;
  doNotApplyForaddress1: boolean = false;
  doNotApplyForaddress2: boolean = false;
  doNotApplyForEmp0: boolean = false;
  doNotApplyForEmp1: boolean = false;
  doNotApplyForEmp2: boolean = false;
  incomeFromOtherSources: boolean = false;
  yearList: any[] = [];
  monthList: any[] = [];
  browerList: any[] = [];
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  citizenshipType: any[] = [];
  maritalStatusList: any[] = [];
  incomeTypeList: any[] = [];
  currentDate: Date = new Date();
  currentDateDob: Date = new Date();
  BorrowerName: any;
  flgShowRemoveButton: boolean = false;
  stateListAddress0: any[] = [];
  cityListAddress0: any[] = [];
  stateListAddress1: any[] = [];
  cityListAddress1: any[] = [];
  stateListAddress2: any[] = [];
  cityListAddress2: any[] = [];
  stateListEmp0: any[] = [];
  cityListEmp0: any[] = [];
  stateListEmp1: any[] = [];
  cityListEmp1: any[] = [];
  stateListEmp2: any[] = [];
  cityListEmp2: any[] = [];
  flgPhoneRequired: boolean = true;
  extraEmployeesList: Employment[] = [new Employment()];
  removeEmployeeData: boolean = false;
  removeEmpIndexList: any[] = [];
  flgValidateLess2Years: boolean = false;
  constructor(
    private loanManagmentService: LoanManagementService,
    private borrowService: BorrowService,
    private router: Router
  ) {
    //this.bindValues();
  }

  ngOnInit(): void {
    this.currentDateDob = new Date("01/30/2010");

    this.monthYearList();
    this.getCountries();
    this.getStates();
    this.getCities();
    this.creditClick();
    this.borrowerInfo.personalInformation.address[0] = new Address();
    this.borrowService.getAllCitizenshipType().subscribe((res: any) => {
      console.log(res.result);
      this.citizenshipType = [];
      if (res.success == true && res.result.length > 0) {
        res.result.forEach((element: any) => {
          this.citizenshipType.push({
            citizenshipType1: element.citizenshipType1,
            id: element.id,
          });
        });
      }
      //this.Custom = res.result.items;
    });

    //---Get Marital Statuses
    this.borrowService.getAllMaritalStatus().subscribe((res: any) => {
      this.maritalStatusList = [];
      if (res.success == true && res.result.length > 0) {
        res.result.forEach((element: any) => {
          this.maritalStatusList.push({
            maritialStatus1: element.maritialStatus1,
            id: element.id,
          });
        });
      }
    });
    //--- Get IncomeType
    this.borrowService.getIncomeTypes().subscribe((res: any) => {
      this.incomeTypeList = [];
      if (res.success == true && res.result.length > 0) {
        res.result.forEach((element: any) => {
          this.incomeTypeList.push({
            incomeType: element.incomeType,
            id: element.id,
          });
        });
      }
    });

    if (
      localStorage.cityListAddress0 != undefined &&
      localStorage.cityListAddress0 != ""
    ) {
      this.cityListAddress0 = JSON.parse(
        localStorage.getItem("cityListAddress0")
      );
    }
    if (
      localStorage.cityListAddress1 != undefined &&
      localStorage.cityListAddress1 != ""
    ) {
      this.cityListAddress1 = JSON.parse(
        localStorage.getItem("cityListAddress1")
      );
    }
    if (
      localStorage.cityListAddress2 != undefined &&
      localStorage.cityListAddress2 != ""
    ) {
      this.cityListAddress2 = JSON.parse(
        localStorage.getItem("cityListAddress2")
      );
    }
    if (
      localStorage.cityListEmp0 != undefined &&
      localStorage.cityListEmp0 != ""
    ) {
      this.cityListEmp0 = JSON.parse(localStorage.getItem("cityListEmp0"));
    }
    if (
      localStorage.cityListEmp1 != undefined &&
      localStorage.cityListEmp1 != ""
    ) {
      this.cityListEmp1 = JSON.parse(localStorage.getItem("cityListEmp1"));
    }
    if (
      localStorage.cityListEmp2 != undefined &&
      localStorage.cityListEmp2 != ""
    ) {
      this.cityListEmp2 = JSON.parse(localStorage.getItem("cityListEmp2"));
    }
    if (
      localStorage.stateListAddress0 != undefined &&
      localStorage.stateListAddress0 != ""
    ) {
      this.stateListAddress0 = JSON.parse(
        localStorage.getItem("stateListAddress0")
      );
    }
    if (
      localStorage.stateListAddress1 != undefined &&
      localStorage.stateListAddress1 != ""
    ) {
      this.stateListAddress1 = JSON.parse(
        localStorage.getItem("stateListAddress1")
      );
    }
    if (
      localStorage.stateListAddress2 != undefined &&
      localStorage.stateListAddress2 != ""
    ) {
      this.stateListAddress2 = JSON.parse(
        localStorage.getItem("stateListAddress2")
      );
    }
    if (
      localStorage.stateListEmp0 != undefined &&
      localStorage.stateListEmp0 != ""
    ) {
      this.stateListEmp0 = JSON.parse(localStorage.getItem("stateListEmp0"));
    }
    if (
      localStorage.stateListEmp1 != undefined &&
      localStorage.stateListEmp1 != ""
    ) {
      this.stateListEmp1 = JSON.parse(localStorage.getItem("stateListEmp1"));
    }
    if (
      localStorage.stateListEmp2 != undefined &&
      localStorage.stateListEmp2 != ""
    ) {
      this.stateListEmp2 = JSON.parse(localStorage.getItem("stateListEmp2"));
    }
    if (localStorage.borrowerInfo != undefined) {
      this.borrowerInfo = JSON.parse(localStorage.getItem("borrowerInfo"));
    }
    if (
      localStorage.extraEmployeesList != undefined &&
      localStorage.extraEmployeesList != ""
    ) {
      this.extraEmployeesList = [];
      this.extraEmployeesList = JSON.parse(
        localStorage.getItem("extraEmployeesList")
      );
    } else {
      this.borrowerInfo.personalInformation = new PersonalInformation();
      this.borrowerInfo.personalInformation.alternateNames = new AlternateNames();
      this.borrowerInfo.personalInformation.address = [];
      this.borrowerInfo.personalInformation.address.push(new Address());
      this.borrowerInfo.personalInformation.address.push(new Address());
      this.borrowerInfo.personalInformation.address.push(new Address());
      this.borrowerInfo.employment = [];
      this.borrowerInfo.employment.push(new Employment()); // employement
      this.borrowerInfo.employment[0].grossMonthlyIncome = new GrossMonthlyIncome();
      this.borrowerInfo.employment.push(new Employment()); //additional employement
      this.borrowerInfo.employment[1].grossMonthlyIncome = new GrossMonthlyIncome();
      // this.borrowerInfo.employment.push(new Employment());
      // this.borrowerInfo.employment[2].grossMonthlyIncome = new GrossMonthlyIncome();
      this.borrowerInfo.incomeOtherSources = [];
      this.borrowerInfo.incomeOtherSources.push(new IncomeOtherSource());
      // this.borrowerInfo.incomeOtherSources.push(new IncomeOtherSource());
      // this.borrowerInfo.incomeOtherSources.push(new IncomeOtherSource());
      this.borrowerInfo.incomeOtherSources[0].sources = [];
      this.borrowerInfo.incomeOtherSources[0].sources.push(new Source());
      this.creditClick();
    }
    if (localStorage.doNotApplyForaddress1 != undefined) {
      this.doNotApplyForaddress1 = JSON.parse(
        localStorage.getItem("doNotApplyForaddress1")
      );
    }
    if (localStorage.doNotApplyForaddress2 != undefined) {
      this.doNotApplyForaddress2 = JSON.parse(
        localStorage.getItem("doNotApplyForaddress2")
      );
    }
    if (localStorage.doNotApplyForEmp0 != undefined) {
      this.doNotApplyForEmp0 = JSON.parse(
        localStorage.getItem("doNotApplyForEmp0")
      );
    }
    if (localStorage.doNotApplyForEmp1 != undefined) {
      this.doNotApplyForEmp1 = JSON.parse(
        localStorage.getItem("doNotApplyForEmp1")
      );
    }
    if (localStorage.doNotApplyForEmp2 != undefined) {
      this.doNotApplyForEmp2 = JSON.parse(
        localStorage.getItem("doNotApplyForEmp2")
      );
    }
    if (localStorage.doNotApplyForAddress0 != undefined) {
      this.doNotApplyForAddress0 = JSON.parse(
        localStorage.getItem("doNotApplyForAddress0")
      );
    }
    if (localStorage.incomeFromOtherSources != undefined) {
      this.incomeFromOtherSources = JSON.parse(
        localStorage.getItem("incomeFromOtherSources")
      );
    }
  }
  monthYearList() {
    this.yearList = [];
    this.monthList = [];
    this.browerList = [];
    this.yearList.push({ id: 0, label: "" });
    this.monthList.push({ id: 0, label: "" });
    for (var i = 1; i <= 100; i = i + 1) {
      this.yearList.push({ id: i, label: i });
    }
    for (var i = 1; i <= 12; i = i + 1) {
      this.monthList.push({ id: i, label: i });
    }
    for (var i = 2; i <= 12; i = i + 1) {
      this.browerList.push({ id: i, label: i });
    }
    this.borrowerInfo.personalInformation.totalBorrowers = 2;
    // this.borrowerInfo.personalInformation.creditValue = "2";
  }
  creditClick() {
    if (this.borrowerInfo.personalInformation.creditValue == "1") {
      this.borrowerInfo.personalInformation.totalBorrowers = 2;
    }

    this.borrowerInfo.personalInformation.creditList = [];
    for (
      var i = 0;
      i < this.borrowerInfo.personalInformation.totalBorrowers - 1;
      i++
    ) {
      this.borrowerInfo.personalInformation.creditList.push(new CreditList());
    }
  }
  addMoreIncomeSource() {
    this.borrowerInfo.incomeOtherSources[0].sources.push(new Source());
  }
  delMoreIncomeSource() {
    var removearray = [];
    if (this.borrowerInfo.incomeOtherSources[0].sources.length == 1) {
      this.borrowerInfo.incomeOtherSources[0].sources = [];
      this.borrowerInfo.incomeOtherSources[0].sources.push(new Source());
      this.flgShowRemoveButton = false;
      return;
    } else {
      this.borrowerInfo.incomeOtherSources[0].sources.forEach(
        (element: any, index) => {
          if (element.flgDeletedRow == true) {
            removearray.push(index);
          }
          removearray.sort((a, b) => {
            return b - a;
          });
        }
      );
      removearray.forEach((element: any) => {
        this.borrowerInfo.incomeOtherSources[0].sources.splice(element, 1);
      });
      if (this.borrowerInfo.incomeOtherSources[0].sources.length == 0) {
        this.borrowerInfo.incomeOtherSources[0].sources.push(new Source());
      }
      this.flgShowRemoveButton = false;
    }
  }

  nextBtnClick() {
    var borrowerModel = this.borrowerInfo;
    if (this.doNotApplyForaddress1) {
      borrowerModel.personalInformation.address[1] = new Address();
    }
    if (this.doNotApplyForaddress2) {
      borrowerModel.personalInformation.address[2] = new Address();
    }
    if (this.doNotApplyForEmp0) {
      borrowerModel.employment[0] = new Employment();
      borrowerModel.employment[0].grossMonthlyIncome = new GrossMonthlyIncome();
    }
    if (this.doNotApplyForEmp1) {
      borrowerModel.employment[1] = new Employment();
      borrowerModel.employment[1].grossMonthlyIncome = new GrossMonthlyIncome();
    }

    if (this.doNotApplyForEmp2) {
      return;
    } else {
      this.extraEmployeesList.forEach((element: any) => {
        borrowerModel.employment.push(element);
      });
    }
    this.borrowerInfo.incomeOtherSources[0].sources.forEach((element: any) => {
      element.flgDeletedRow = false;
    });
    localStorage.setItem("borrowerInfo", JSON.stringify(this.borrowerInfo));
    localStorage.setItem(
      "doNotApplyForaddress1",
      JSON.stringify(this.doNotApplyForaddress1)
    );
    localStorage.setItem(
      "doNotApplyForaddress2",
      JSON.stringify(this.doNotApplyForaddress2)
    );
    localStorage.setItem(
      "doNotApplyForEmp0",
      JSON.stringify(this.doNotApplyForEmp0)
    );
    localStorage.setItem(
      "doNotApplyForEmp1",
      JSON.stringify(this.doNotApplyForEmp1)
    );
    localStorage.setItem(
      "doNotApplyForEmp2",
      JSON.stringify(this.doNotApplyForEmp2)
    );
    localStorage.setItem(
      "doNotApplyForAddress0",
      JSON.stringify(this.doNotApplyForAddress0)
    );
    localStorage.setItem(
      "incomeFromOtherSources",
      JSON.stringify(this.incomeFromOtherSources)
    );
    localStorage.setItem(
      "extraEmployeesList",
      JSON.stringify(this.extraEmployeesList)
    );

    this.borrowService
      .createMortgageLoanApplication(borrowerModel)
      .subscribe((res: any) => {
        if (res.success == true) {
          localStorage.setItem(
            "cityListAddress0",
            JSON.stringify(this.cityListAddress0)
          );
          localStorage.setItem(
            "cityListAddress1",
            JSON.stringify(this.cityListAddress1)
          );
          localStorage.setItem(
            "cityListAddress2",
            JSON.stringify(this.cityListAddress2)
          );
          localStorage.setItem(
            "cityListEmp0",
            JSON.stringify(this.cityListEmp0)
          );
          localStorage.setItem(
            "cityListEmp1",
            JSON.stringify(this.cityListEmp1)
          );
          localStorage.setItem(
            "cityListEmp2",
            JSON.stringify(this.cityListEmp2)
          );
          localStorage.setItem(
            "stateListAddress0",
            JSON.stringify(this.stateListAddress0)
          );
          localStorage.setItem(
            "stateListAddress1",
            JSON.stringify(this.stateListAddress1)
          );
          localStorage.setItem(
            "stateListAddress2",
            JSON.stringify(this.stateListAddress2)
          );
          localStorage.setItem(
            "stateListEmp0",
            JSON.stringify(this.stateListEmp0)
          );
          localStorage.setItem(
            "stateListEmp1",
            JSON.stringify(this.stateListEmp1)
          );
          localStorage.setItem(
            "stateListEmp2",
            JSON.stringify(this.stateListEmp2)
          );
          alert("Data has inserted successfully");
          this.router.navigateByUrl(
            "app/admin/incomplete-loan-application/financial-info-assets-liabilities"
          );
        }
      });
  }

  // nextBtnClick(ngForm:NgForm) {
  //   if (this.doNotApplyForaddress1) {
  //     this.borrowerInfo.personalInformation.address[1] = new Address();
  //   }
  //   if (this.doNotApplyForaddress2) {
  //     this.borrowerInfo.personalInformation.address[2] = new Address();
  //   }
  //   if (this.doNotApplyForEmp0) {
  //     this.borrowerInfo.employment[0] = new Employment();
  //   }
  //   if (this.doNotApplyForEmp1) {
  //     this.borrowerInfo.employment[1] = new Employment();
  //   }
  //   if (this.doNotApplyForEmp2) {
  //     this.borrowerInfo.employment[2] = new Employment();
  //   }

  //   localStorage.setItem("borrowerInfo", JSON.stringify(this.borrowerInfo))
  //   localStorage.setItem("doNotApplyForaddress1", JSON.stringify(this.doNotApplyForaddress1))
  //   localStorage.setItem("doNotApplyForaddress2", JSON.stringify(this.doNotApplyForaddress2))
  //   localStorage.setItem("doNotApplyForEmp0", JSON.stringify(this.doNotApplyForEmp0))
  //   localStorage.setItem("doNotApplyForEmp1", JSON.stringify(this.doNotApplyForEmp1))
  //   localStorage.setItem("doNotApplyForEmp2", JSON.stringify(this.doNotApplyForEmp2))
  //   localStorage.setItem("doNotApplyForAddress0", JSON.stringify(this.doNotApplyForAddress0))
  //   localStorage.setItem("incomeFromOtherSources", JSON.stringify(this.incomeFromOtherSources))
  //   this.borrowService.createMortgageLoanApplication(this.borrowerInfo).subscribe(
  //     (res: any) => {
  //       if(res.success == true)
  //       {
  //         alert("Data has inserted successfully");
  //         this.router.navigateByUrl('app/admin/incomplete-loan-application/financial-info-assets-liabilities');
  //       }

  //     }
  //   );
  // }

  getCountries() {
    this.borrowService.getCountries().subscribe((data: any) => {
      this.countryList = [];
      if (data.success == true && data.result.length > 0) {
        data.result.forEach((element: any) => {
          this.countryList.push({
            countryName: element.countryName,
            id: element.id,
          });
        });
      }
    });
  }

  // getCountries() {
  //   this.borrowService.getCountries().subscribe((data: any) => {
  //     this.countryList = []
  //     if (data.success == true && data.result.length > 0) {
  //       data.result.forEach((element: any) => {
  //         this.countryList.push({ countryName: element.countryName, id: element.id })
  //       })
  //     }
  //   })
  // }
  getStates() {
    this.borrowService.getStates().subscribe((data: any) => {
      this.stateList = [];
      if (data.success == true && data.result.length > 0) {
        data.result.forEach((element: any) => {
          this.stateList.push({
            stateName: element.stateName,
            id: element.id,
            countryId: element.countryId,
          });
        });
      }
    });
  }
  getCities() {
    this.borrowService.getCities().subscribe((data: any) => {
      this.cityList = [];
      if (data.success == true && data.result.length > 0) {
        data.result.forEach((element: any) => {
          this.cityList.push({
            cityName: element.cityName,
            id: element.id,
            stateId: element.stateId,
          });
        });
      }
    });
  }

  // bindValues() {
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  //   this.borrowerInfo.personalInformation.firstName = "fffff";
  // }
  getInitials() {
    var f = this.borrowerInfo.personalInformation.firstName.charAt(0);
    var l = this.borrowerInfo.personalInformation.lastName.charAt(0);
    this.borrowerInfo.personalInformation.yourInitials =
      f.toUpperCase() + l.toUpperCase();
    //this.borrowerInfo.personalInformation.yourInitials1 = f.toUpperCase() + l.toUpperCase();
  }

  public handleAddressChange(
    place: google.maps.places.Place,
    fldIndex: number
  ) {
    let COMPONENT_TEMPLATE: any;
    let Address_01: GoogleAddress = new GoogleAddress();

    COMPONENT_TEMPLATE = { street_number: "short_name" };
    Address_01.addressLine1 = this.getAddrComponent(place, COMPONENT_TEMPLATE);

    COMPONENT_TEMPLATE = { route: "long_name" }; //street
    Address_01.addressLine2 = this.getAddrComponent(place, COMPONENT_TEMPLATE);

    COMPONENT_TEMPLATE = { locality: "long_name" };
    Address_01.city = this.getAddrComponent(place, COMPONENT_TEMPLATE);

    (COMPONENT_TEMPLATE = { administrative_area_level_1: "short_name" }),
      (Address_01.state = this.getAddrComponent(place, COMPONENT_TEMPLATE));

    (COMPONENT_TEMPLATE = { country: "long_name" }),
      (Address_01.countryShort = this.getAddrComponent(
        place,
        COMPONENT_TEMPLATE
      ));

    (COMPONENT_TEMPLATE = { postal_code: "long_name" }),
      (Address_01.postalCode = this.getAddrComponent(
        place,
        COMPONENT_TEMPLATE
      ));

    console.log(Address_01);

    const CountryID = this.countryList.find(
      (country) => country.countryName === Address_01.countryShort
    );

    if (fldIndex == 0) {
      this.getStateByCountryId(CountryID, "Address", fldIndex);
      const stateID = this.stateList.find(
        (state) => state.stateName === Address_01.state
      );
      this.getCityByStateId(stateID, Address, fldIndex);
      this.borrowerInfo.personalInformation.address[fldIndex].street =
        Address_01.addressLine1 + " " + Address_01.addressLine2;
      this.borrowerInfo.personalInformation.address[fldIndex].zip =
        Address_01.postalCode;
      this.borrowerInfo.personalInformation.address[fldIndex].stateId =
        stateID.id;
      this.borrowerInfo.personalInformation.address[fldIndex].countryId =
        CountryID.id;
      const cityID = this.cityList.find(
        (city) => city.cityName === Address_01.city
      );
      this.borrowerInfo.personalInformation.address[fldIndex].cityId =
        cityID.id;
    } else if (fldIndex == 1) {
      this.getStateByCountryId(CountryID, "Address", fldIndex);
      const stateID = this.stateList.find(
        (state) => state.stateName === Address_01.state
      );
      this.getCityByStateId(stateID, Address, fldIndex);
      this.borrowerInfo.personalInformation.address[fldIndex].street =
        Address_01.addressLine1 + " " + Address_01.addressLine2;
      this.borrowerInfo.personalInformation.address[fldIndex].zip =
        Address_01.postalCode;
      this.borrowerInfo.personalInformation.address[fldIndex].stateId =
        stateID.id;
      this.borrowerInfo.personalInformation.address[fldIndex].countryId =
        CountryID.id;
      const cityID = this.cityList.find(
        (city) => city.cityName === Address_01.city
      );
      this.borrowerInfo.personalInformation.address[fldIndex].cityId =
        cityID.id;
    } else if (fldIndex == 2) {
      this.getStateByCountryId(CountryID, "Address", fldIndex);
      const stateID = this.stateList.find(
        (state) => state.stateName === Address_01.state
      );
      this.getCityByStateId(stateID, Address, fldIndex);
      this.borrowerInfo.personalInformation.address[fldIndex].street =
        Address_01.addressLine1 + " " + Address_01.addressLine2;
      this.borrowerInfo.personalInformation.address[fldIndex].zip =
        Address_01.postalCode;
      this.borrowerInfo.personalInformation.address[fldIndex].stateId =
        stateID.id;
      this.borrowerInfo.personalInformation.address[fldIndex].countryId =
        CountryID.id;
      const cityID = this.cityList.find(
        (city) => city.cityName === Address_01.city
      );
      this.borrowerInfo.personalInformation.address[fldIndex].cityId =
        cityID.id;
    }
  }

  handleEmploymentChange(place: google.maps.places.Place, fldIndex: number) {
    let COMPONENT_TEMPLATE: any;
    let Address_01: GoogleAddress = new GoogleAddress();

    COMPONENT_TEMPLATE = { street_number: "short_name" };
    Address_01.addressLine1 = this.getAddrComponent(place, COMPONENT_TEMPLATE);

    COMPONENT_TEMPLATE = { route: "long_name" }; //street
    Address_01.addressLine2 = this.getAddrComponent(place, COMPONENT_TEMPLATE);

    COMPONENT_TEMPLATE = { locality: "long_name" };
    Address_01.city = this.getAddrComponent(place, COMPONENT_TEMPLATE);

    (COMPONENT_TEMPLATE = { administrative_area_level_1: "short_name" }),
      (Address_01.state = this.getAddrComponent(place, COMPONENT_TEMPLATE));

    (COMPONENT_TEMPLATE = { country: "long_name" }),
      (Address_01.countryShort = this.getAddrComponent(
        place,
        COMPONENT_TEMPLATE
      ));

    (COMPONENT_TEMPLATE = { postal_code: "long_name" }),
      (Address_01.postalCode = this.getAddrComponent(
        place,
        COMPONENT_TEMPLATE
      ));

    const CountryID = this.countryList.find(
      (country) => country.countryName === Address_01.countryShort
    );

    if (fldIndex == 0) {
      this.getStateByCountryId(CountryID, "Emp", fldIndex);
      const stateID = this.stateList.find(
        (state) => state.stateName === Address_01.state
      );
      this.borrowerInfo.employment[fldIndex].stateId = stateID.id;
      this.borrowerInfo.employment[fldIndex].countryId = CountryID.id;
      this.getCityByStateId(stateID, "Emp", fldIndex);
      const cityID = this.cityList.find(
        (city) => city.cityName === Address_01.city
      );
      this.borrowerInfo.employment[fldIndex].cityId = cityID.id;
    } else if (fldIndex == 1) {
      this.getStateByCountryId(CountryID, "Emp", fldIndex);
      const stateID = this.stateList.find(
        (state) => state.stateName === Address_01.state
      );
      this.borrowerInfo.employment[fldIndex].stateId = stateID.id;
      this.borrowerInfo.employment[fldIndex].countryId = CountryID.id;
      this.getCityByStateId(stateID, "Emp", fldIndex);
      const cityID = this.cityList.find(
        (city) => city.cityName === Address_01.city
      );
      this.borrowerInfo.employment[fldIndex].cityId = cityID.id;
    } else if (fldIndex == 2) {
      this.getStateByCountryId(CountryID, "Emp", fldIndex);
      const stateID = this.stateList.find(
        (state) => state.stateName === Address_01.state
      );
      this.borrowerInfo.employment[fldIndex].stateId = stateID.id;
      this.borrowerInfo.employment[fldIndex].countryId = CountryID.id;
      this.getCityByStateId(stateID, "Emp", fldIndex);
      const cityID = this.cityList.find(
        (city) => city.cityName === Address_01.city
      );
      this.borrowerInfo.employment[fldIndex].cityId = cityID.id;
    }

    this.borrowerInfo.employment[fldIndex].street =
      Address_01.addressLine1 + " " + Address_01.addressLine2;
    this.borrowerInfo.employment[fldIndex].zip = Address_01.postalCode;
    this.borrowerInfo.employment[fldIndex].cityId = this.cityList.find(
      (city) => city.cityName === Address_01.city
    );
  }

  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }

  selectNumber(event) {
    event.target.select();
  }

  fixDecimals(event: any) {
    var vals = event.target.value.replace(",", "");
    if (vals != "") {
      vals = parseFloat(vals).toFixed(2);
      var int: number = parseInt(vals);
      var dec = vals - int;
      if (dec > 0) {
        event.target.value = int + dec;
      } else {
        event.target.value = int + ".00";
      }
      var parts = event.target.value.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      event.target.value = parts.join(".");
    } else {
      event.target.value = "0.00";
    }
  }

  numberOnly(txt: any, evt): boolean {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode == 46) {
      if (evt.target.value.includes(".")) {
        return false;
      } else {
        return true;
      }
    } else {
      if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    }
    return true;
  }

  scroll(event: any) {
    var curBox = event.currentTarget;
    if (event.keyCode === 40) {
      //down
      var curBox = event.currentTarget;
      var cellNo = event.currentTarget.offsetParent.cellIndex;
      var nextRow = curBox.parentElement.parentElement.nextElementSibling;
      if (nextRow) {
        var nextCell = nextRow.cells[cellNo].lastElementChild;
        //---Select text
        if (nextCell.type == "number") {
          nextCell.type = "text";
          nextCell.setSelectionRange(0, nextCell.value.length);
          nextCell.type = "number";
        } else {
          nextCell.setSelectionRange(0, nextCell.value.length);
        }
        nextCell.focus();
      }

      event.preventDefault();
    } else if (event.keyCode === 38) {
      //up
      var curBox = event.currentTarget;
      var cellNo = event.currentTarget.offsetParent.cellIndex;
      var prvRow = curBox.parentElement.parentElement.previousElementSibling;
      if (prvRow) {
        var prvCell = prvRow.cells[cellNo].lastElementChild;
        if (prvCell.type == "number") {
          prvCell.type = "text";
          prvCell.setSelectionRange(0, prvCell.value.length);
          prvCell.type = "number";
        } else {
          prvCell.setSelectionRange(0, prvCell.value.length);
        }
        prvCell.focus();
      }
      event.preventDefault();
    } else if (event.keyCode === 9) {
      //---do not enable save button on pressing tab
      return;
    } else {
      return;
    }
  }

  doNotApplyForAddress0F(value: any) {
    if (value == true) {
      this.borrowerInfo.personalInformation.yourInitials1 = "";
    }
  }
  doNotApplyForaddress1F(value: any) {
    if (value == true) {
      this.borrowerInfo.personalInformation.address[1].street = "";
      this.borrowerInfo.personalInformation.address[1].unit = "";
      this.borrowerInfo.personalInformation.address[1].cityId = 0;
      this.borrowerInfo.personalInformation.address[1].stateId = 0;
      this.borrowerInfo.personalInformation.address[1].zip = "";
      this.borrowerInfo.personalInformation.address[1].countryId = 0;
      this.borrowerInfo.personalInformation.address[1].year = null;
      this.borrowerInfo.personalInformation.address[1].month = "";
      this.borrowerInfo.personalInformation.address[1].housingType = "";
      this.borrowerInfo.personalInformation.address[1].rent = 0;
    }
  }
  doNotApplyForaddress2F(value: any) {
    if (value == true) {
      this.borrowerInfo.personalInformation.address[2].street = "";
      this.borrowerInfo.personalInformation.address[2].unit = "";
      this.borrowerInfo.personalInformation.address[2].cityId = 0;
      this.borrowerInfo.personalInformation.address[2].stateId = 0;
      this.borrowerInfo.personalInformation.address[2].zip = "";
      this.borrowerInfo.personalInformation.address[2].countryId = 0;
      this.borrowerInfo.personalInformation.address[2].year = null;
      this.borrowerInfo.personalInformation.address[2].month = "";
      this.borrowerInfo.personalInformation.address[2].housingType = "";
      this.borrowerInfo.personalInformation.address[2].rent = 0;
    }
  }
  doNotApplyForEmp0F(value: any) {
    if (value == true) {
      this.borrowerInfo.employment[0].name = "";
      this.borrowerInfo.employment[0].phone = "";
      this.borrowerInfo.employment[0].street = "";
      this.borrowerInfo.employment[0].cityId = 0;
      this.borrowerInfo.employment[0].unit = "";
      this.borrowerInfo.employment[0].stateId = 0;
      this.borrowerInfo.employment[0].zip = "";
      this.borrowerInfo.employment[0].countryId = 0;
      this.borrowerInfo.employment[0].position = "";
      this.borrowerInfo.employment[0].startDate = "";
      this.borrowerInfo.employment[0].workingYears = 0;
      this.borrowerInfo.employment[0].workingMonths = 0;
      this.borrowerInfo.employment[0].isEmployedBySomeone = false;
      this.borrowerInfo.employment[0].isSelfEmployed = false;
      this.borrowerInfo.employment[0].monthlyIncome = 0;
      this.borrowerInfo.employment[0].grossMonthlyIncome.baseIncome = 0;
      this.borrowerInfo.employment[0].grossMonthlyIncome.overtime = 0;
      this.borrowerInfo.employment[0].grossMonthlyIncome.bonus = 0;
      this.borrowerInfo.employment[0].grossMonthlyIncome.commission = 0;
      this.borrowerInfo.employment[0].grossMonthlyIncome.militaryEntitlements = 0;
      this.borrowerInfo.employment[0].grossMonthlyIncome.other = 0;
      this.borrowerInfo.employment[0].grossMonthlyIncome.total = 0;
      this.borrowerInfo.employment[0].isOwnershipLessThan25 = false;
    }
  }
  doNotApplyForEmp1F(value: any) {
    if (value == true) {
      this.borrowerInfo.employment[1].name = "";
      // this.borrowerInfo.employment[0].phone="";
      this.borrowerInfo.employment[1].street = "";
      this.borrowerInfo.employment[1].cityId = 0;
      this.borrowerInfo.employment[1].unit = "";
      this.borrowerInfo.employment[1].stateId = 0;
      this.borrowerInfo.employment[1].zip = "";
      this.borrowerInfo.employment[1].countryId = 0;
      this.borrowerInfo.employment[1].position = "";
      this.borrowerInfo.employment[1].startDate = "";
      this.borrowerInfo.employment[1].workingYears = 0;
      this.borrowerInfo.employment[1].workingMonths = 0;
      this.borrowerInfo.employment[1].isEmployedBySomeone = false;
      this.borrowerInfo.employment[1].isSelfEmployed = false;
      this.borrowerInfo.employment[1].isOwnershipLessThan25 = false;
      this.borrowerInfo.employment[1].monthlyIncome = 0;
      this.borrowerInfo.employment[1].grossMonthlyIncome.baseIncome = 0;
      this.borrowerInfo.employment[1].grossMonthlyIncome.overtime = 0;
      this.borrowerInfo.employment[1].grossMonthlyIncome.bonus = 0;
      this.borrowerInfo.employment[1].grossMonthlyIncome.commission = 0;
      this.borrowerInfo.employment[1].grossMonthlyIncome.militaryEntitlements = 0;
      this.borrowerInfo.employment[1].grossMonthlyIncome.other = 0;
      this.borrowerInfo.employment[1].grossMonthlyIncome.total = 0;
    }
  }
  doNotApplyForEmp2F(value: any) {
    if (value == true) {
      this.extraEmployeesList = [];
      this.addEmployess();
    }
  }
  incomeFromOtherSourcesF(event: any) {
    if (event == true) {
      this.borrowerInfo.incomeOtherSources[0].sources = [];
      this.borrowerInfo.incomeOtherSources[0].sources.push(new Source());
      this.showRemoveButton();
    }
  }

  onKeydown(event: any, selectedDate: any) {
    let sDate: Date = new Date(selectedDate);
    console.log(sDate.getFullYear());
    const years = sDate.getFullYear();
    if (years <= 1900) {
    }
  }

  onBlurDt(event: any) {
    var sDate = new Date(event.target.value);
    var currentDate = new Date();

    if (
      sDate.getFullYear() < 1900 ||
      sDate > currentDate ||
      this.isValidDate(sDate.getFullYear(), sDate.getMonth(), sDate.getDay()) ==
        false
    ) {
      event.target.value = currentDate.getDate().toString();
    } else {
    }

    if (Number.isNaN(sDate.getDate())) {
      event.target.value = "";
    }
  }

  isValidDate(year, month, day) {
    var d = new Date(year, month, day);
    if (
      d.getFullYear() == year &&
      d.getMonth() == month &&
      d.getDate() == day
    ) {
      return true;
    }
    return false;
  }

  onSearchChange(searchValue: string) {}
  showRemoveButton() {
    if (this.borrowerInfo.incomeOtherSources[0].sources.length > 0) {
      var found: any[] = this.borrowerInfo.incomeOtherSources[0].sources.filter(
        (s: any) => s.flgDeletedRow == true
      );
      if (found.length > 0) {
        this.flgShowRemoveButton = true;
      } else {
        this.flgShowRemoveButton = false;
      }
    }
  }
  getStateByCountryId(id: any, section: any, index: any) {
    if (this.stateList.length > 0) {
      if (section == "Address" && index == 0) {
        this.stateListAddress0 = [];

        if (this.borrowerInfo.personalInformation.address[0].stateId != null) {
          this.borrowerInfo.personalInformation.address[0].stateId = 0;
          this.borrowerInfo.personalInformation.address[0].cityId = 0;
        }

        this.stateList
          .filter((s: any) => s.countryId == id)
          .forEach((element: any) => {
            this.stateListAddress0.push({
              stateName: element.stateName,
              id: element.id,
            });
          });
      } else if (section == "Address" && index == 1) {
        this.stateListAddress1 = [];
        if (this.borrowerInfo.personalInformation.address[1].stateId != null) {
          this.borrowerInfo.personalInformation.address[1].stateId = 0;
          this.borrowerInfo.personalInformation.address[1].cityId = 0;
        }

        this.stateList
          .filter((s: any) => s.countryId == id)
          .forEach((element: any) => {
            this.stateListAddress1.push({
              stateName: element.stateName,
              id: element.id,
            });
          });
      } else if (section == "Address" && index == 2) {
        this.stateListAddress2 = [];
        if (this.borrowerInfo.personalInformation.address[2].stateId != null) {
          this.borrowerInfo.personalInformation.address[2].stateId = 0;
          this.borrowerInfo.personalInformation.address[2].cityId = 0;
        }

        this.stateList
          .filter((s: any) => s.countryId == id)
          .forEach((element: any) => {
            this.stateListAddress2.push({
              stateName: element.stateName,
              id: element.id,
            });
          });
      } else if (section == "Emp" && index == 0) {
        this.stateListEmp0 = [];
        if (this.borrowerInfo.employment[0].stateId != null) {
          this.borrowerInfo.employment[0].stateId = 0;
          this.borrowerInfo.employment[0].cityId = 0;
        }

        this.stateList
          .filter((s: any) => s.countryId == id)
          .forEach((element: any) => {
            this.stateListEmp0.push({
              stateName: element.stateName,
              id: element.id,
            });
          });
      } else if (section == "Emp" && index == 1) {
        this.stateListEmp1 = [];
        if (this.borrowerInfo.employment[1].stateId != null) {
          this.borrowerInfo.employment[1].stateId = 0;
          this.borrowerInfo.employment[1].cityId = 0;
        }
        this.stateList
          .filter((s: any) => s.countryId == id)
          .forEach((element: any) => {
            this.stateListEmp1.push({
              stateName: element.stateName,
              id: element.id,
            });
          });
      } else if (section == "Emp" && index == 2) {
        this.stateListEmp2 = [];
        if (this.borrowerInfo.employment[2].stateId != null) {
          this.borrowerInfo.employment[2].stateId = 0;
          this.borrowerInfo.employment[2].cityId = 0;
        }

        this.stateList
          .filter((s: any) => s.countryId == id)
          .forEach((element: any) => {
            this.stateListEmp2.push({
              stateName: element.stateName,
              id: element.id,
            });
          });
      }
      // alert(this.borrowerInfo.personalInformation.address[0].stateId)
    }
  }
  getCityByStateId(id: any, section: any, index: any) {
    if (this.cityList.length > 0) {
      if (section == "Address" && index == 0) {
        this.cityListAddress0 = [];
        this.cityList
          .filter((s: any) => s.stateId == id)
          .forEach((element: any) => {
            this.cityListAddress0.push({
              cityName: element.cityName,
              id: element.id,
            });
          });
      } else if (section == "Address" && index == 1) {
        this.cityListAddress1 = [];
        this.cityList
          .filter((s: any) => s.stateId == id)
          .forEach((element: any) => {
            this.cityListAddress1.push({
              cityName: element.cityName,
              id: element.id,
            });
          });
      } else if (section == "Address" && index == 2) {
        this.cityListAddress2 = [];
        this.cityList
          .filter((s: any) => s.stateId == id)
          .forEach((element: any) => {
            this.cityListAddress2.push({
              cityName: element.cityName,
              id: element.id,
            });
          });
      } else if (section == "Emp" && index == 0) {
        this.cityListEmp0 = [];
        this.cityList
          .filter((s: any) => s.stateId == id)
          .forEach((element: any) => {
            this.cityListEmp0.push({
              cityName: element.cityName,
              id: element.id,
            });
          });
      } else if (section == "Emp" && index == 1) {
        this.cityListEmp1 = [];
        this.cityList
          .filter((s: any) => s.stateId == id)
          .forEach((element: any) => {
            this.cityListEmp1.push({
              cityName: element.cityName,
              id: element.id,
            });
          });
      } else if (section == "Emp" && index == 2) {
        this.cityListEmp2 = [];
        this.cityList
          .filter((s: any) => s.stateId == id)
          .forEach((element: any) => {
            this.cityListEmp2.push({
              cityName: element.cityName,
              id: element.id,
            });
          });
      }
    }
  }
  phoneRequired(homePhone, cellPhone, workPhone) {
    if (
      homePhone == null ||
      homePhone == undefined ||
      homePhone == "" ||
      homePhone == "(___) ___-____"
    ) {
      this.flgPhoneRequired = true;
      if (
        cellPhone == null ||
        cellPhone == undefined ||
        cellPhone == "" ||
        homePhone == "(___) ___-____"
      ) {
        this.flgPhoneRequired = true;
        if (
          workPhone == null ||
          workPhone == undefined ||
          workPhone == "" ||
          homePhone == "(___) ___-____"
        ) {
          this.flgPhoneRequired = true;
        } else {
          this.flgPhoneRequired = false;
        }
      } else {
        this.flgPhoneRequired = false;
      }
    } else {
      this.flgPhoneRequired = false;
    }
  }
  clearRentValue(value: any) {
    this.borrowerInfo.personalInformation.address[0].rent = 0;
  }
  clearRentValue1(value: any) {}
  disableBussinessOwner(event: any) {
    if (event.target.checked == false) {
      this.borrowerInfo.employment[0].isOwnershipLessThan25 = null;
      this.borrowerInfo.employment[0].monthlyIncome = 0;
      this.borrowerInfo.employment[0].isSelfEmployed = false;
    } else {
      this.borrowerInfo.employment[0].isSelfEmployed = true;
    }
  }
  disableBussinessOwner1(event: any) {
    if (event.target.checked == false) {
      this.borrowerInfo.employment[1].isOwnershipLessThan25 = null;
      this.borrowerInfo.employment[1].monthlyIncome = 0;
      this.borrowerInfo.employment[1].isSelfEmployed = false;
    } else {
      this.borrowerInfo.employment[1].isSelfEmployed = true;
    }
  }
  addEmployess() {
    this.extraEmployeesList.push(new Employment());
    this.borrowerInfo.employment[
      this.extraEmployeesList.length - 1
    ].grossMonthlyIncome = new GrossMonthlyIncome();
  }
  onYearChange(yearValue: any, monthValue: any) {
    var yearToMonth: number | null = null;
    var totalMonth: number | null = null;

    if (yearValue != null) {
      yearToMonth = yearValue * 12;
      totalMonth = yearToMonth;
      if (monthValue != null) {
        totalMonth = yearToMonth + monthValue;
      }
    }
    if (monthValue != null) {
      totalMonth = monthValue;
      if (yearValue != null) {
        totalMonth = yearToMonth + monthValue;
      }
    }
    this.doNotApplyForaddress1 = totalMonth > 23 ? true : false;
    this.flgValidateLess2Years = totalMonth > 23 ? false : true;
  }
  getStateByCountryIdEmp(id: any, index: any) {
    if (this.stateList.length > 0) {
      this.extraEmployeesList[index].stateListEmpM = [];
      this.stateList
        .filter((s: any) => s.countryId == id)
        .forEach((element: any) => {
          this.extraEmployeesList[index].stateListEmpM.push({
            stateName: element.stateName,
            id: element.id,
          });
        });
    }
  }
  getCityByStateIdEmp(id: any, index: any) {
    if (this.cityList.length > 0) {
      this.extraEmployeesList[index].cityListEmpM = [];
      this.cityList
        .filter((s: any) => s.stateId == id)
        .forEach((element: any) => {
          this.extraEmployeesList[index].cityListEmpM.push({
            cityName: element.cityName,
            id: element.id,
          });
        });
    }
  }
  removeEmp() {
    if (this.extraEmployeesList.length == 1) {
      if (this.removeEmpIndexList.length > 0) {
        this.extraEmployeesList = [];
        this.addEmployess();
        this.removeEmployeeData = false;
      }
    } else if (this.extraEmployeesList.length > 1) {
      if (this.removeEmpIndexList.length > 0) {
        this.removeEmpIndexList.sort((a: any, b: any) => {
          return b - a;
        });

        this.removeEmpIndexList.forEach((element: any) => {
          this.extraEmployeesList.splice(element, 1);
        });
      }
      if (this.extraEmployeesList.length == 0) {
        this.addEmployess();
      }

      this.removeEmployeeData = false;
    }
    this.removeEmpIndexList = [];
  }
  removeEmpIndex(model: any, index: any) {
    if (model.flgRemoveEmployee == true) {
      this.removeEmpIndexList.push(index);
    } else {
      var findIndex = this.removeEmpIndexList.findIndex((s: any) => s == index);
      if (findIndex != -1) {
        this.removeEmpIndexList.splice(findIndex, 1);
      }
    }

    if (this.removeEmpIndexList.length > 0) {
      this.removeEmployeeData = true;
    } else if (this.removeEmpIndexList.length == 0) {
      this.removeEmployeeData = false;
    }
  }
}

// if(this.borrowerInfo.personalInformation.address[0] != null){
//   if(this.borrowerInfo.personalInformation.address[0].countryId != null)
//   {
//     this.getStateByCountryId(this.borrowerInfo.personalInformation.address[0].countryId,'Address',0)
//   }
//   if(  this.borrowerInfo.personalInformation.address[0].stateId  != null)
//   {
//     this.getCityByStateId(this.borrowerInfo.personalInformation.address[0].stateId,'Address',0)
//   }

// }
// if(this.borrowerInfo.personalInformation.address[1] != null){
//   if(this.borrowerInfo.personalInformation.address[1].countryId != null)
//   {
//     this.getStateByCountryId(this.borrowerInfo.personalInformation.address[1].countryId,'Address',1)
//   }
//   if(  this.borrowerInfo.personalInformation.address[1].stateId  != null)
//   {
//     this.getCityByStateId(this.borrowerInfo.personalInformation.address[1].stateId,'Address',1)
//   }
// }
// if(this.borrowerInfo.personalInformation.address[2] != null){
//   if(this.borrowerInfo.personalInformation.address[2].countryId != null)
//   {
//     this.getStateByCountryId(this.borrowerInfo.personalInformation.address[2].countryId,'Address',2)
//   }
//   if(  this.borrowerInfo.personalInformation.address[2].stateId  != null)
//   {
//     this.getCityByStateId(this.borrowerInfo.personalInformation.address[2].stateId,'Address',2)
//   }
// }
// if(this.borrowerInfo.employment[0] != null){
//   if(this.borrowerInfo.employment[0].countryId  != null)
//   {
//     this.getStateByCountryId(this.borrowerInfo.employment[0].countryId,'Emp',0)
//   }
//   if(  this.borrowerInfo.employment[0].stateId   != null)
//   {
//     this.getCityByStateId(this.borrowerInfo.employment[0].stateId,'Emp',0)
//   }

// }
// if(this.borrowerInfo.employment[1] != null){
//   if(this.borrowerInfo.employment[1].countryId  != null)
//   {
//     this.getStateByCountryId(this.borrowerInfo.employment[1].countryId,'Emp',1)
//   }
//   if(  this.borrowerInfo.employment[1].stateId   != null)
//   {
//     this.getCityByStateId(this.borrowerInfo.employment[1].stateId,'Emp',1)
//   }

// }
// if(this.borrowerInfo.employment[2] != null){
//   if(this.borrowerInfo.employment[2].countryId  != null)
//   {
//     this.getStateByCountryId(this.borrowerInfo.employment[2].countryId,'Emp',2)
//   }
//   if(  this.borrowerInfo.employment[2].stateId   != null)
//   {
//     this.getCityByStateId(this.borrowerInfo.employment[2].stateId,'Emp',2)
//   }

// }
