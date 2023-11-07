import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IRefinanceBuyingHomeModel } from "@app/interfaces/IRefinanceBuyingHomeModel";
import { RefinanceHomeBuyingDataService } from "../../services/refinanceHomeBuyingData.service";
@Component({
  selector: "app-step8",
  templateUrl: "./step8.component.html",
  styleUrls: ["./step8.component.css"],
})
export class Step8Component implements OnInit {
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
    this._route.navigate(["app/refinance-step7"]);
  }
  proceedToNext(value) {
    this.formData.FHALoan = value;
    this._refinanceHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/refinance-step9"]);
  }
}
