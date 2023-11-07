import { Component, OnInit } from "@angular/core";
import { DemographicInfoModels } from "./demographic-info-models";
import { DemographicInfoService } from "./demographic-info.service";
import { Router } from "@angular/router";
import { debug } from "console";
@Component({
  selector: "app-demographic-info",
  templateUrl: "./demographic-info.component.html",
  styleUrls: ["./demographic-info.component.css"],
})
export class DemographicInfoComponent implements OnInit {
  demographicInfoModels: DemographicInfoModels = new DemographicInfoModels();
  notPresent: boolean = false;
  constructor(
    private demographicInfoService: DemographicInfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      localStorage.demographicInfoModels != undefined &&
      localStorage.demographicInfoModels != ""
    ) {
      this.demographicInfoModels = JSON.parse(
        localStorage.getItem("demographicInfoModels")
      );
    }
  }

  create() {
    if (
      this.demographicInfoModels.canNotProvideEthnicInfo == false ||
      this.demographicInfoModels.canNotProvideEthnicInfo == null
    ) {
      this.demographicInfoModels.demographicInfoByFinancialInstitution.isEthnicityByObservation = true;
      this.provideEthicity();
    }
    if (
      this.demographicInfoModels.canNotProvideRaceInfo == false ||
      this.demographicInfoModels.canNotProvideRaceInfo == null
    ) {
      this.demographicInfoModels.demographicInfoByFinancialInstitution.isRaceByObservation = true;
    }

    if (
      this.demographicInfoModels.canNotProvideSexInfo == false ||
      this.demographicInfoModels.canNotProvideSexInfo == null
    ) {
      this.demographicInfoModels.demographicInfoByFinancialInstitution.isGenderByObservation = true;
    }
    debugger;
    if (this.notPresent == true) {
      alert("Provide atleast one option");
      return;
    }
    var obj = this.demographicInfoModels;
    localStorage.setItem("demographicInfoModels", JSON.stringify(obj));
    this.demographicInfoService.create(obj).subscribe((data: any) => {
      if (data.success == true) {
        alert("Data inserted successfully");
        this.router.navigateByUrl(
          "app/admin/incomplete-loan-application/loan-originator-info"
        );
      }
    });
  }
  provideEthicity() {
    debugger;
    if (
      this.demographicInfoModels.isHispanicOrLatino == true ||
      this.demographicInfoModels.isMexican == true ||
      this.demographicInfoModels.isNotHispanicOrLatino == true ||
      this.demographicInfoModels.isPuertoRican == true ||
      this.demographicInfoModels.isCuban == true ||
      this.demographicInfoModels.isOtherHispanicOrLatino == true
    ) {
      this.notPresent = false;
      return;
    } else {
      this.notPresent = true;
    }
  }
  disbaleEnthicity(event: any) {
    if (event == true) {
      this.demographicInfoModels.isHispanicOrLatino = false;
      this.demographicInfoModels.isMexican = false;
      this.demographicInfoModels.isPuertoRican = false;
      this.demographicInfoModels.isCuban = false;
      this.demographicInfoModels.isOtherHispanicOrLatino = false;
      this.demographicInfoModels.isNotHispanicOrLatino = false;
    }
  }
  disbaleGender(event: any) {
    if (event == true) {
      this.demographicInfoModels.isFemale = false;
      this.demographicInfoModels.isMale = false;
    }
  }
  disbaleRace(event: any) {
    if (event == true) {
      this.demographicInfoModels.isAmericanIndianOrAlaskaNative = false;
      this.demographicInfoModels.isAsian = false;
      this.demographicInfoModels.isAsianIndian = false;
      this.demographicInfoModels.isChinese = false;
      this.demographicInfoModels.isFilipino = false;
      this.demographicInfoModels.isJapanese = false;

      this.demographicInfoModels.isKorean = false;
      this.demographicInfoModels.isVietnamese = false;
      this.demographicInfoModels.isOtherAsian = false;

      this.demographicInfoModels.otherAsianRace = "";

      this.demographicInfoModels.isBlackOrAfricanAmerican = false;
      this.demographicInfoModels.isNativeHawaiianOrOtherPacificIslander = false;

      this.demographicInfoModels.isOtherPacificIslander = false;
      this.demographicInfoModels.otherPacificIslanderRace = "";
      this.demographicInfoModels.isWhite = false;
    }
  }
}
