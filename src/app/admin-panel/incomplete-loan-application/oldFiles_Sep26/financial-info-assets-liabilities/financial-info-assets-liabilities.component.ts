import { Component, OnInit } from "@angular/core";
import {
  FinancialInfoAssetsLiabilitiesModels,
  mortgageFinancialAssets,
  mortgageFinancialOtherAssets,
  mortgageFinancialLiabilities,
  mortgageFinancialOtherLaibilities,
} from "./financial-info-assets-liabilities-models";
import { FinancialInfoAssetsLiabilitiesService } from "./financial-info-assets-liabilities.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-financial-info-assets-liabilities",
  templateUrl: "./financial-info-assets-liabilities.component.html",
  styleUrls: ["./financial-info-assets-liabilities.component.css"],
})
export class FinancialInfoAssetsLiabilitiesComponent implements OnInit {
  constructor(
    private financialInfoService: FinancialInfoAssetsLiabilitiesService,
    private router: Router
  ) {}
  flgMortgageFinancialOtherAssets: boolean = false;
  flgMortgageFinancialLiabilities: boolean = false;
  flgMortgageFinancialOtherLaibilities: boolean = false;
  totalMortgageFinancialAssets: number = 0;
  totalMortgageFinancialOtherAssets: number = 0;
  totalMortgageFinancialOtherLaibilities: number = 0;
  mortgageFinancialAssets: mortgageFinancialAssets = new mortgageFinancialAssets();
  mortgageFinancialOtherAssets: mortgageFinancialOtherAssets = new mortgageFinancialOtherAssets();
  mortgageFinancialLiabilities: mortgageFinancialLiabilities = new mortgageFinancialLiabilities();
  mortgageFinancialOtherLaibilities: mortgageFinancialOtherLaibilities = new mortgageFinancialOtherLaibilities();
  financialInfoAssetsLiabilitiesModels: FinancialInfoAssetsLiabilitiesModels = new FinancialInfoAssetsLiabilitiesModels();
  assetTypeList: any[] = [];
  accountTypeList: any[] = [];
  creditTypeList: any[] = [];
  financialLiabilityTypeList: any[] = [];
  otherLiabilityTypeList: any[] = [];
  mortgageFinancialOtherAssetsRemoveIndex: any[] = [];
  mortgageFinancialOtherLaibilitiesRemoveIndex: any[] = [];
  removeMortgageFinancialAssetsList: any[] = [];
  flgShowRemove1: boolean = false;
  flgShowRemove2: boolean = false;
  flgShowRemove3: boolean = false;
  flgShowRemove4: boolean = false;
  ngOnInit(): void {
    // this.getAllMortgageApplicationAssetandLiability()

    if (
      localStorage.financialInfoAssetsLiabilitiesModels != undefined &&
      localStorage.financialInfoAssetsLiabilitiesModels != ""
    ) {
      this.financialInfoAssetsLiabilitiesModels = JSON.parse(
        localStorage.getItem("financialInfoAssetsLiabilitiesModels")
      );
    }
    if (localStorage.flgMortgageFinancialOtherAssets != undefined) {
      this.flgMortgageFinancialOtherAssets = JSON.parse(
        localStorage.getItem("flgMortgageFinancialOtherAssets")
      );
    }
    if (localStorage.flgMortgageFinancialLiabilities != undefined) {
      this.flgMortgageFinancialLiabilities = JSON.parse(
        localStorage.getItem("flgMortgageFinancialLiabilities")
      );
    }
    if (localStorage.flgMortgageFinancialOtherLaibilities != undefined) {
      this.flgMortgageFinancialOtherLaibilities = JSON.parse(
        localStorage.getItem("flgMortgageFinancialOtherLaibilities")
      );
    }
    if (localStorage.totalMortgageFinancialAssets != undefined) {
      this.totalMortgageFinancialAssets = JSON.parse(
        localStorage.getItem("totalMortgageFinancialAssets")
      );
    }
    if (localStorage.totalMortgageFinancialOtherAssets != undefined) {
      this.totalMortgageFinancialOtherAssets = JSON.parse(
        localStorage.getItem("totalMortgageFinancialOtherAssets")
      );
    }
    if (localStorage.totalMortgageFinancialOtherLaibilities != undefined) {
      this.totalMortgageFinancialOtherLaibilities = JSON.parse(
        localStorage.getItem("totalMortgageFinancialOtherLaibilities")
      );
    }

    //---Get asset Types
    this.financialInfoService
      .getFinancialAccountTypes()
      .subscribe((res: any) => {
        this.accountTypeList = [];

        if (res.success == true && res.result.length > 0) {
          res.result.forEach((element: any) => {
            this.accountTypeList.push({
              assetsType: element.assetsType,
              id: element.id,
            });
          });
        }
      });
    //---Get asset Types
    this.financialInfoService.getAssetTypes().subscribe((res: any) => {
      this.assetTypeList = [];
      if (res.success == true && res.result.length > 0) {
        res.result.forEach((element: any) => {
          this.assetTypeList.push({
            assetsType: element.assetsType,
            id: element.id,
          });
        });
      }
    });
    //---Get credit Types
    this.financialInfoService.getCreditTypes().subscribe((res: any) => {
      this.creditTypeList = [];
      if (res.success == true && res.result.length > 0) {
        res.result.forEach((element: any) => {
          this.creditTypeList.push({
            creditType1: element.creditType1,
            id: element.id,
          });
        });
      }
    });
    //---Get Financial Liability Types
    this.financialInfoService
      .getFinancialLaibilitiesTypes()
      .subscribe((res: any) => {
        this.financialLiabilityTypeList = [];
        if (res.success == true && res.result.length > 0) {
          res.result.forEach((element: any) => {
            this.financialLiabilityTypeList.push({
              financialLaibilitiesType1: element.financialLaibilitiesType1,
              id: element.id,
            });
          });
        }
      });
    //---Get Other Liability Types
    this.financialInfoService
      .getFinancialOtherLaibilitiesTypes()
      .subscribe((res: any) => {
        this.otherLiabilityTypeList = [];
        if (res.success == true && res.result.length > 0) {
          res.result.forEach((element: any) => {
            this.otherLiabilityTypeList.push({
              financialOtherLaibilitiesType1:
                element.financialOtherLaibilitiesType1,
              id: element.id,
            });
          });
        }
      });
  }

  addMortgageFinancialAssets() {
    this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets.push(
      new mortgageFinancialAssets()
    );
  }
  removeMortgageFinancialAssets() {
    var mortgageFinancialAssetsLength = this
      .financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets.length;
    if (mortgageFinancialAssetsLength == 1) {
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets = [];
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets.push(
        new mortgageFinancialAssets()
      );
      this.getTotalMortgageFinancialAssets();
      return;
    } else if (mortgageFinancialAssetsLength > 1) {
      this.removeMortgageFinancialAssetsList.sort((a, b) => {
        return b - a;
      });
      this.removeMortgageFinancialAssetsList.forEach((element: any) => {
        this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets.splice(
          element,
          1
        );
      });
      if (
        this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets
          .length == 0
      ) {
        this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets.push(
          new mortgageFinancialAssets()
        );
      }
      this.removeMortgageFinancialAssetsList = [];
      this.flgShowRemove1 = false;
    }
    this.getTotalMortgageFinancialAssets();
  }
  addMortgageFinancialOtherAssets() {
    this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets.push(
      new mortgageFinancialOtherAssets()
    );
  }
  removeMortgageFinancialOtherAssets() {
    var mortgageFinancialOtherAssets1 = this
      .financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets.length;
    if (mortgageFinancialOtherAssets1 == 1) {
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets = [];
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets.push(
        new mortgageFinancialOtherAssets()
      );
      this.getTotalMortgageFinancialOtherAssets();
      return;
    } else if (mortgageFinancialOtherAssets1 > 1) {
      this.mortgageFinancialOtherAssetsRemoveIndex.sort((a, b) => {
        return b - a;
      });
      this.mortgageFinancialOtherAssetsRemoveIndex.forEach((element: any) => {
        this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets.splice(
          element,
          1
        );
      });
      if (
        this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets
          .length == 0
      ) {
        this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets.push(
          new mortgageFinancialOtherAssets()
        );
      }
      this.mortgageFinancialOtherAssetsRemoveIndex = [];
      this.flgShowRemove2 = false;
    }
    this.getTotalMortgageFinancialOtherAssets();
    // else{
    // var obj =mortgageFinancialOtherAssets -1;
    // this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets.splice(obj,1)
    // }
  }
  addMortgageFinancialLiabilities() {
    this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.push(
      new mortgageFinancialLiabilities()
    );
  }
  removeMortgageFinancialLiabilities() {
    var indexList: any[] = [];
    if (
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities
        .length == 1
    ) {
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities = [];
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.push(
        new mortgageFinancialLiabilities()
      );
      this.getTotalMortgageFinancialOtherLaibilities();
      return;
    } else if (
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities
        .length > 1
    ) {
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.forEach(
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
          this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.splice(
            element.index,
            1
          );
        });
        if (
          this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities
            .length == 0
        ) {
          this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.push(
            new mortgageFinancialLiabilities()
          );
        }
      } else {
        var mortgageFinancialLength = this.financialInfoAssetsLiabilitiesModels
          .mortgageFinancialLiabilities.length;
        if (mortgageFinancialLength == 1) {
          return;
        } else {
          var obj = mortgageFinancialLength - 1;
          this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.splice(
            obj,
            1
          );
        }
      }
      this.flgShowRemove3 = false;
      this.getTotalMortgageFinancialOtherLaibilities();
    }
    // var mortgageFinancialLiabilitiesLength = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.length;
    // this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.splice(1, mortgageFinancialLiabilitiesLength)
  }
  addMortgageFinancialOtherLaibilities() {
    this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities.push(
      new mortgageFinancialOtherLaibilities()
    );
  }
  removeMortgageFinancialOtherLaibilities() {
    var mortgageFinancialOtherLaibilitiesLength = this
      .financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities
      .length;
    if (mortgageFinancialOtherLaibilitiesLength == 1) {
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities = [];
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities.push(
        new mortgageFinancialOtherLaibilities()
      );
      return;
    } else if (mortgageFinancialOtherLaibilitiesLength > 1) {
      this.mortgageFinancialOtherLaibilitiesRemoveIndex.sort((a, b) => {
        return b - a;
      });
      this.mortgageFinancialOtherLaibilitiesRemoveIndex.forEach(
        (element: any) => {
          this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities.splice(
            element,
            1
          );
        }
      );
      if (
        this.financialInfoAssetsLiabilitiesModels
          .mortgageFinancialOtherLaibilities.length == 0
      ) {
        this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities.push(
          new mortgageFinancialOtherLaibilities()
        );
      }
      this.mortgageFinancialOtherLaibilitiesRemoveIndex = [];
      this.flgShowRemove4 = false;
    }
  }
  submitFinancialAssetsLiabilities() {
    var financialInfo = new FinancialInfoAssetsLiabilitiesModels();
    financialInfo.mortgageFinancialAssets = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets;
    financialInfo.mortgageFinancialLiabilities = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities;
    financialInfo.mortgageFinancialOtherAssets = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets;
    financialInfo.mortgageFinancialOtherLaibilities = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities;
    if (this.flgMortgageFinancialOtherAssets == true) {
      financialInfo.mortgageFinancialOtherAssets = [];
    }
    if (this.flgMortgageFinancialLiabilities == true) {
      financialInfo.mortgageFinancialLiabilities = [];
    }
    if (this.flgMortgageFinancialOtherLaibilities == true) {
      financialInfo.mortgageFinancialOtherLaibilities = [];
    }

    // var obj = {
    //   mortgageFinancialAssets: this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets,
    //   mortgageFinancialOtherAssets: this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities,
    //   mortgageFinancialLiabilities: this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets,
    //   mortgageFinancialOtherLaibilities: this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities
    // }
    localStorage.setItem(
      "financialInfoAssetsLiabilitiesModels",
      JSON.stringify(this.financialInfoAssetsLiabilitiesModels)
    );
    localStorage.setItem(
      "flgMortgageFinancialOtherAssets",
      JSON.stringify(this.flgMortgageFinancialOtherAssets)
    );
    localStorage.setItem(
      "flgMortgageFinancialLiabilities",
      JSON.stringify(this.flgMortgageFinancialLiabilities)
    );
    localStorage.setItem(
      "flgMortgageFinancialOtherLaibilities",
      JSON.stringify(this.flgMortgageFinancialOtherLaibilities)
    );
    localStorage.setItem(
      "totalMortgageFinancialAssets",
      JSON.stringify(this.totalMortgageFinancialAssets)
    );
    localStorage.setItem(
      "totalMortgageFinancialOtherAssets",
      JSON.stringify(this.totalMortgageFinancialOtherAssets)
    );
    localStorage.setItem(
      "totalMortgageFinancialOtherLaibilities",
      JSON.stringify(this.totalMortgageFinancialOtherLaibilities)
    );
    this.financialInfoService
      .createFinancialInfoAssetsLiabilities(financialInfo)
      .subscribe((data: any) => {
        if (data.success == true) {
          alert("Data inserted successfully");
          this.router.navigateByUrl(
            "app/admin/incomplete-loan-application/financial-info-real-estate"
          );
        }
      });
  }
  getTotalMortgageFinancialAssets() {
    this.totalMortgageFinancialAssets = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialAssets.reduce(
      (sum, current) => sum + current.cashMarketValue,
      0
    );
    if (isNaN(this.totalMortgageFinancialAssets) == true) {
      this.totalMortgageFinancialAssets = 0;
    }
  }
  getTotalMortgageFinancialOtherAssets() {
    this.totalMortgageFinancialOtherAssets = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets.reduce(
      (sum, current) => sum + current.cashMarketValue,
      0
    );
    if (isNaN(this.totalMortgageFinancialOtherAssets) == true) {
      this.totalMortgageFinancialOtherAssets = 0;
    }
  }
  getTotalMortgageFinancialOtherLaibilities() {
    this.totalMortgageFinancialOtherLaibilities = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.reduce(
      (sum, current) => sum + current.monthlyPayment,
      0
    );
    if (isNaN(this.totalMortgageFinancialOtherLaibilities) == true) {
      this.totalMortgageFinancialOtherLaibilities = 0;
    }
  }
  getAllMortgageApplicationAssetandLiability() {
    var obj = {
      Sorting: "",
      SkipCount: 0,
      MaxResultCount: 10,
    };
    this.financialInfoService
      .getAllFinancialInfoAssetsLiabilities(obj)
      .subscribe((data) => {});
  }
  // nextBtnClick(){
  //   console.log(this.borrowerInfo);
  //   this.borrowService.createMortgageLoanApplication(this.borrowerInfo).subscribe(
  //        (res: any) => {
  //       console.log(res.result);
  //       alert("data has inserted successfully");
  //     }
  //   );
  // }
  flgMortgageFinancialOtherAssetsF(event: any) {
    if (event == true) {
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets = [];
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherAssets.push(
        new mortgageFinancialOtherAssets()
      );

      this.totalMortgageFinancialOtherAssets = 0;
    }
  }
  addRemoveMortgageFinancialOtherAssets(index: any, event: any) {
    if (event.target.checked == true) {
      this.mortgageFinancialOtherAssetsRemoveIndex.push(index);
    } else {
      var remove = this.mortgageFinancialOtherAssetsRemoveIndex.findIndex(
        (s: any) => s == index
      );
      this.mortgageFinancialOtherAssetsRemoveIndex.splice(remove, 1);
    }
    if (this.mortgageFinancialOtherAssetsRemoveIndex.length > 0) {
      this.flgShowRemove2 = true;
    } else if (this.mortgageFinancialOtherAssetsRemoveIndex.length == 0) {
      this.flgShowRemove2 = false;
    }
  }
  flgMortgageFinancialLiabilitiesF(event: any) {
    if (event == true) {
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities = [];
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.push(
        new mortgageFinancialLiabilities()
      );

      this.totalMortgageFinancialOtherLaibilities = 0;
    }
  }
  addRemoveMortgageFinancialOtherLaibilities(index: any, event: any) {
    if (event.target.checked == true) {
      this.mortgageFinancialOtherLaibilitiesRemoveIndex.push(index);
    } else {
      var remove = this.mortgageFinancialOtherLaibilitiesRemoveIndex.findIndex(
        (s: any) => s == index
      );
      this.mortgageFinancialOtherLaibilitiesRemoveIndex.splice(remove, 1);
    }
    if (this.mortgageFinancialOtherLaibilitiesRemoveIndex.length > 0) {
      this.flgShowRemove4 = true;
    } else if (this.mortgageFinancialOtherLaibilitiesRemoveIndex.length == 0) {
      this.flgShowRemove4 = false;
    }
  }
  flgMortgageFinancialOtherLaibilitiesF(event: any) {
    if (event == true) {
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities = [];
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialOtherLaibilities.push(
        new mortgageFinancialOtherLaibilities()
      );
      this.totalMortgageFinancialOtherLaibilities = 0;
    }
  }
  removeMortgageFinancialAssetsF(index: any, event: any) {
    if (event.target.checked == true) {
      this.removeMortgageFinancialAssetsList.push(index);
    } else {
      var remove = this.removeMortgageFinancialAssetsList.findIndex(
        (s: any) => s == index
      );
      this.removeMortgageFinancialAssetsList.splice(remove, 1);
    }
    if (this.removeMortgageFinancialAssetsList.length > 0) {
      this.flgShowRemove1 = true;
    } else if (this.removeMortgageFinancialAssetsList.length == 0) {
      this.flgShowRemove1 = false;
    }
  }

  fixDecimals(event: any) {
    var vals = event.target.value;
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

  showRemoveOption() {
    if (
      this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities
        .length > 0
    ) {
      var found: any[] = this.financialInfoAssetsLiabilitiesModels.mortgageFinancialLiabilities.filter(
        (s: any) => s.isPaidBeforeClosing1 == true
      );
      if (found) {
        this.flgShowRemove3 = true;
      } else {
        this.flgShowRemove3 = false;
      }
    }
  }
}
