import { Component, OnInit } from "@angular/core";
import {
  FinancialInfoRealEstate,
  MortgageLoanOnProperty,
} from "./financial-info-real-estate-model";
import { FinancialInfoRealEstateService } from "./financial-info-real-estate.service";
import { Router } from "@angular/router";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { GoogleAddress } from "../borrower-info/borrower-model";

@Component({
  selector: "app-financial-info-real-estate",
  templateUrl: "./financial-info-real-estate.component.html",
  styleUrls: ["./financial-info-real-estate.component.css"],
})
export class FinancialInfoRealEstateComponent implements OnInit {
  objFinancialInfoRealState: FinancialInfoRealEstate = new FinancialInfoRealEstate();
  financialInfoRealState: FinancialInfoRealEstate[] = [
    new FinancialInfoRealEstate(),
  ];
  constructor(
    private financialInfoRealEstateService: FinancialInfoRealEstateService,
    private router: Router
  ) {}
  cityList: any[] = [];
  countryList: any[] = [];
  stateList: any[] = [];
  proprtyStatusList: any[] = [];
  loanPropertyOccupanciesList: any[] = [];
  mortgageLoanTypeList: any[] = [];
  options: any = {
    componentRestrictions: { country: "US" },
  };

  objMortgageLoanProperty: MortgageLoanOnProperty = new MortgageLoanOnProperty();
  ngOnInit(): void {
    // this.financialInfoRealState.push(this.objFinancialInfoRealState)

    this.getCountries();
    this.getStates();
    this.getCities();
    if (
      localStorage.financialInfoRealState != undefined &&
      localStorage.financialInfoRealState != ""
    ) {
      this.financialInfoRealState = JSON.parse(
        localStorage.getItem("financialInfoRealState")
      );
    }
    //---Get Property Status
    this.financialInfoRealEstateService
      .getFinancialPropertyStatuses()
      .subscribe((data: any) => {
        if (data.success == true && data.result.length > 0) {
          data.result.forEach((element: any) => {
            this.proprtyStatusList.push({
              financialPropertyStatus1: element.financialPropertyStatus1,
              id: element.id,
            });
          });
        }
      });
    //--- Loan Property Occupencies
    this.financialInfoRealEstateService
      .getLoanPropertyOccupancies()
      .subscribe((data: any) => {
        if (data.success == true && data.result.length > 0) {
          data.result.forEach((element: any) => {
            this.loanPropertyOccupanciesList.push({
              loanPropertyOccupancy1: element.loanPropertyOccupancy1,
              id: element.id,
            });
          });
        }
      });
    //--- Mortgage Loan Types
    this.financialInfoRealEstateService
      .getMortageLoanTypes()
      .subscribe((data: any) => {
        if (data.success == true && data.result.length > 0) {
          data.result.forEach((element: any) => {
            this.mortgageLoanTypeList.push({
              mortageLoanTypesId: element.mortageLoanTypesId,
              id: element.id,
            });
          });
        }
      });
  }
  // getCountries()
  // {
  //   this.financialInfoRealEstateService.getCountries().subscribe((data:any)=>{
  //     this.countryList=[]
  //     if(data.success == true && data.result.length > 0)
  //     {
  //       data.result.forEach((element:any)=>{
  //         this.countryList.push({countryName:element.countryName,id:element.id})
  //       })
  //     }
  //   })
  // }

  getCountries() {
    this.financialInfoRealEstateService
      .getCountries()
      .subscribe((data: any) => {
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

  getStates() {
    this.financialInfoRealEstateService.getStates().subscribe((data: any) => {
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
    this.financialInfoRealEstateService.getCities().subscribe((data: any) => {
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
  addMortgageLoanList(index: any) {
    this.financialInfoRealState[index].mortgageLoanOnProperty.push(
      new MortgageLoanOnProperty()
    );
  }
  removeMortgageLoanList(index: any) {
    var indexList: any[] = [];
    if (this.financialInfoRealState[index].mortgageLoanOnProperty.length > 0) {
      this.financialInfoRealState[index].mortgageLoanOnProperty.forEach(
        (element: any, index: any) => {
          if (element.isPaidBeforeClosing1 == true) {
            indexList.push({ index: index });
          }
        }
      );
      if (indexList.length > 0) {
        indexList.sort((a: any, b: any) => {
          return b.index - a.index;
        });

        indexList.forEach((element: any) => {
          this.financialInfoRealState[index].mortgageLoanOnProperty.splice(
            element.index,
            1
          );
        });
        if (
          this.financialInfoRealState[index].mortgageLoanOnProperty.length == 0
        ) {
          this.financialInfoRealState[index].mortgageLoanOnProperty.push(
            new MortgageLoanOnProperty()
          );
        }
      } else {
        var mortgageFinancialLength = this.financialInfoRealState[index]
          .mortgageLoanOnProperty.length;
        if (mortgageFinancialLength == 1) {
          this.financialInfoRealState[index].mortgageLoanOnProperty = [];
          this.financialInfoRealState[index].mortgageLoanOnProperty.push(
            new MortgageLoanOnProperty()
          );
          return;
        } else {
          var obj = mortgageFinancialLength - 1;
          this.financialInfoRealState[index].mortgageLoanOnProperty.splice(
            obj,
            1
          );
        }
      }
    }
    this.financialInfoRealState[index].flgShowRemove = false;
    // isPaidBeforeClosing
  }
  create() {
    var obj = this.financialInfoRealState;
    localStorage.setItem(
      "financialInfoRealState",
      JSON.stringify(this.financialInfoRealState)
    );
    this.financialInfoRealEstateService.create(obj).subscribe((data: any) => {
      if (data.success == true) {
        alert("Data inserted successfully");
        this.router.navigateByUrl(
          "app/admin/incomplete-loan-application/loan-property-info"
        );
      }
    });
  }
  addMoreProperty() {
    this.financialInfoRealState.push(this.objFinancialInfoRealState);
  }
  changeCheckBox(index: any) {
    if (this.financialInfoRealState[index].flgApplicableNotApply == false) {
      this.financialInfoRealState[index].flgApplicableNotApply = true;
      this.financialInfoRealState[index].flgMortgageLoanNotApply = true;
    } else {
      this.financialInfoRealState[index].flgApplicableNotApply = false;
      this.financialInfoRealState[index].flgMortgageLoanNotApply = false;
    }
    this.financialInfoRealState[0].flgApplicableNotApply = false;
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

    const CountryID = this.countryList.find(
      (country) => country.countryName === Address_01.countryShort
    );
    this.getStateByCountryId(CountryID, fldIndex);

    const stateID = this.stateList.find(
      (state) => state.stateName === Address_01.state
    );
    this.getCityByStateId(stateID, fldIndex);

    const cityID = this.cityList.find(
      (city) => city.cityName === Address_01.city
    );
    this.financialInfoRealState[fldIndex].cityId = cityID.id;

    this.financialInfoRealState[fldIndex].street =
      Address_01.addressLine1 + " " + Address_01.addressLine2;
    this.financialInfoRealState[fldIndex].zip = Address_01.postalCode;
    //this.financialInfoRealState[fldIndex].cityId = this.cityList.find(city => city.cityName === Address_01.city);
    this.financialInfoRealState[fldIndex].stateId = stateID.id;
    this.financialInfoRealState[fldIndex].countryId = CountryID.id;
  }

  // fixDecimals(event: any) {
  //   var vals = event.target.value;
  //   var int: number = parseInt(vals);
  //   var dec = vals - int;
  //   if (dec > 0) {
  //     event.target.value = int + dec;
  //   } else {
  //     event.target.value = int + ".00";
  //   }
  // }

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
  disabledSection(index: any) {
    this.financialInfoRealState[index].mortgageLoanOnProperty = [];
    this.financialInfoRealState[index].mortgageLoanOnProperty.push(
      new MortgageLoanOnProperty()
    );
  }

  scroll(event: any) {
    //up 38 down 40
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

  // removeMortgageLoanIndex(model: any, event: any, index:any,parentIndex:any) {
  //   if(event.target.checked){
  //     model.removeMortgageLoanPropertyList.push(index)
  //   }
  //   else
  //   {
  //     var remove =model.removeMortgageLoanPropertyList.findIndex((s:any)=>s == index)
  //     model.removeMortgageLoanPropertyList.splice(remove,1)
  //   }

  // }

  getStateByCountryId(id: any, index: any) {
    if (this.stateList.length > 0) {
      this.financialInfoRealState[index].stateListAddress0 = [];
      this.stateList
        .filter((s: any) => s.countryId == id)
        .forEach((element: any) => {
          this.financialInfoRealState[index].stateListAddress0.push({
            stateName: element.stateName,
            id: element.id,
          });
        });
    }
  }
  getCityByStateId(id: any, index: any) {
    if (this.cityList.length > 0) {
      this.financialInfoRealState[index].cityListAddress0 = [];
      this.cityList
        .filter((s: any) => s.stateId == id)
        .forEach((element: any) => {
          this.financialInfoRealState[index].cityListAddress0.push({
            cityName: element.cityName,
            id: element.id,
          });
        });
    }
  }
  removeData(index1: any, index2: any, event: any) {
    if (event.target.checked == true) {
      this.financialInfoRealState[index1].mortgageLoanOnProperty.forEach(
        (element: any) => {
          if (element.isPaidBeforeClosing1 == true) {
            this.financialInfoRealState[index1].flgShowRemove = true;
          }
        }
      );
    } else {
      this.financialInfoRealState[index1].flgShowRemove = false;
    }
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
}
