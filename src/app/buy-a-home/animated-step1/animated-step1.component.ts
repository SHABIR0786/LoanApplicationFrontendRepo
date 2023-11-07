import { Result } from "common";
import { IBuyingHomeModel } from "@app/interfaces/IBuyingHomeModel";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeBuyingDataService } from "../../services/homeBuyingData.service";

@Component({
  selector: "app-animated-step1",
  templateUrl: "./animated-step1.component.html",
  styleUrls: ["./animated-step1.component.css"],
})
export class AnimatedStep1Component implements OnInit {
  constructor(
    private _route: Router,
    private _homeBuyingDataService: HomeBuyingDataService
  ) {}
  formData: IBuyingHomeModel = {};
  ngOnInit(): void {
    this.formData = this._homeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this.formData = {};
    }
  }

  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-animated"]);
  }

  proceedToNext(value) {
    this.formData.propertyType = value;
    this._homeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-animated-step2"]);
  }
}
