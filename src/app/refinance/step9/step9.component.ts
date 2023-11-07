import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IRefinanceBuyingHomeModel } from "@app/interfaces/IRefinanceBuyingHomeModel";
import { RefinanceHomeBuyingDataService } from "../../services/refinanceHomeBuyingData.service";
@Component({
  selector: "app-step9",
  templateUrl: "./step9.component.html",
  styleUrls: ["./step9.component.css"],
})
export class Step9Component implements OnInit {
  constructor(
    private _route: Router,
    private _refinanceHomeBuyingDataService: RefinanceHomeBuyingDataService
  ) {}
  formData: IRefinanceBuyingHomeModel = {};
  ngOnInit(): void {
    this.formData = this._refinanceHomeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/refinance-step1"]);
    }
  }
  proceedToPrevious() {
    this._route.navigate(["app/refinance-step8"]);
  }
  proceedToNext(value) {
    this.formData.militarySevice = value;
    this._refinanceHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/refinance-step10"]);
  }
}
