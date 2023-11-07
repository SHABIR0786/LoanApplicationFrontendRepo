import { Component, OnInit } from "@angular/core";
import { LoanOriginatorInfoModels } from "./loan-originator-info-models";
import { LoanOriginatorInfoService } from "./loan-originator-info.service";
import { BorrowService } from "app/services/borrow.service";
import { DeclarationsService } from "../declarations/declarations.service";
import { MilitaryServicesService } from "../military-service/military-services.service";
import { LoanPropertyInfoService } from "../loan-property-info/loan-property-info.service";
import { FinancialInfoRealEstateService } from "../financial-info-real-estate/financial-info-real-estate.service";
import { FinancialInfoAssetsLiabilitiesService } from "../financial-info-assets-liabilities/financial-info-assets-liabilities.service";
import { DemographicInfoService } from "../demographic-info/demographic-info.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-loan-originator-information",
  templateUrl: "./loan-originator-information.component.html",
  styleUrls: ["./loan-originator-information.component.css"],
})
export class LoanOriginatorInformationComponent implements OnInit {
  loanOriginatorInfoModels: LoanOriginatorInfoModels = new LoanOriginatorInfoModels();
  constructor(
    private loanOriginatorInfoService: LoanOriginatorInfoService,
    private borrowService: BorrowService,
    private declarationsService: DeclarationsService,
    private militaryServicesService: MilitaryServicesService,
    private loanPropertyInfoService: LoanPropertyInfoService,
    private financialInfoRealEstateService: FinancialInfoRealEstateService,
    private financialInfoService: FinancialInfoAssetsLiabilitiesService,
    private demographicInfoService: DemographicInfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      localStorage.loanOriginatorInfoModels != undefined &&
      localStorage.loanOriginatorInfoModels != ""
    ) {
      this.loanOriginatorInfoModels = JSON.parse(
        localStorage.getItem("loanOriginatorInfoModels")
      );
    }
  }
  create() {
    localStorage.setItem(
      "loanOriginatorInfoModels",
      JSON.stringify(this.loanOriginatorInfoModels)
    );
    this.loanOriginatorInfoService
      .create(this.loanOriginatorInfoModels)
      .subscribe((data: any) => {
        debugger;
        if (data.success == true) {
          alert("Data inserted successfully");
          localStorage.removeItem("borrowerInfo");
          localStorage.removeItem("financialInfoAssetsLiabilitiesModels");
          localStorage.removeItem("financialInfoRealState");
          localStorage.removeItem("loanPropertyInfoModel");
          localStorage.removeItem("declarationsList");
          localStorage.removeItem("militaryServiceModel");
          localStorage.removeItem("demographicInfoModels");
          localStorage.removeItem("loanOriginatorInfoModels");
          localStorage.removeItem("doNotApplyForaddress1");
          localStorage.removeItem("doNotApplyForaddress2");
          localStorage.removeItem("doNotApplyForEmp0");
          localStorage.removeItem("doNotApplyForEmp1");
          localStorage.removeItem("doNotApplyForEmp2");
          localStorage.removeItem("incomeFromOtherSources");
          localStorage.removeItem("flgMortgageFinancialOtherAssets");
          localStorage.removeItem("flgMortgageFinancialLiabilities");
          localStorage.removeItem("flgMortgageFinancialOtherLaibilities");
          localStorage.removeItem("flgOtherNewMortgageLoans");
          localStorage.removeItem("flgRentalIncome");
          localStorage.removeItem("flgGiftsorGrants");
          localStorage.removeItem("doNotApplyForAddress0");
          localStorage.removeItem("totalMortgageFinancialOtherLaibilities");
          localStorage.removeItem("totalMortgageFinancialOtherAssets");
          localStorage.removeItem("totalMortgageFinancialAssets");

          localStorage.removeItem("cityListAddress0");
          localStorage.removeItem("cityListAddress1");
          localStorage.removeItem("cityListAddress2");
          localStorage.removeItem("cityListEmp0");
          localStorage.removeItem("cityListEmp1");
          localStorage.removeItem("cityListEmp2");
          localStorage.removeItem("stateListAddress0");
          localStorage.removeItem("stateListAddress1");
          localStorage.removeItem("stateListAddress2");
          localStorage.removeItem("stateListEmp0");
          localStorage.removeItem("stateListEmp1");
          localStorage.removeItem("stateListEmp2");
          localStorage.removeItem("form4CityList");
          localStorage.removeItem("form4StateList");
        }
      });
  }
}
