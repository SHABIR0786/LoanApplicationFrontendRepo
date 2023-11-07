import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IBuyingHomeModel } from "@app/interfaces/IBuyingHomeModel";
import { HomeBuyingDataService } from "../../services/homeBuyingData.service";
@Component({
  selector: "app-animated-step4",
  templateUrl: "./animated-step4.component.html",
  styleUrls: ["./animated-step4.component.css"],
})
export class AnimatedStep4Component implements OnInit {
  formData: IBuyingHomeModel;
  constructor(
    private _route: Router,
    private _homeBuyingDataService: HomeBuyingDataService
  ) {}

  ngOnInit(): void {
    this.formData = this._homeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-animated-step1"]);
    }
  }
  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-animated-step3"]);
  }
  proceedToNext(value) {
    this.formData.planToPurchase = value;
    this._homeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-animated-step5"]);
  }
}
