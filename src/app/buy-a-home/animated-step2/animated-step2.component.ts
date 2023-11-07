import { Result } from "common";
import { IBuyingHomeModel } from "@app/interfaces/IBuyingHomeModel";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeBuyingDataService } from "../../services/homeBuyingData.service";

@Component({
  selector: "app-animated-step2",
  templateUrl: "./animated-step2.component.html",
  styleUrls: ["./animated-step2.component.css"],
})
export class AnimatedStep2Component implements OnInit {
  formData: IBuyingHomeModel;
  constructor(
    private _route: Router,
    private _homeBuyingDataService: HomeBuyingDataService
  ) {}
  selected: number = 1;
  ngOnInit(): void {
    this.formData = this._homeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-animated-step1"]);
    }
  }
  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-animated-step1"]);
  }
  proceedToNext(value) {
    this.formData.PropertyUse = value;
    this._homeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-animated-step3"]);
  }
}
