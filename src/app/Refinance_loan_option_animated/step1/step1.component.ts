import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IRefinanceLoanOptionModel } from "@app/interfaces/IRefinanceLoanOptionModel";
import { RefinanceLoanOptionDataService } from "../../services/refinanceLoanOptionData.service";
@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.css"],
})
export class RefinanceLoanOptionsStep1Component implements OnInit {
  constructor(
    private _route: Router,
    private _refinanceLoanOptionDataService: RefinanceLoanOptionDataService
  ) {}

  formData: IRefinanceLoanOptionModel = {};
  ngOnInit(): void {
    this.formData = this._refinanceLoanOptionDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this.formData = {};
    }
  }
  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-loan-options-animated"]);
  }
  proceedToNext(value) {
    this.formData.important_to_you = value;
    this._refinanceLoanOptionDataService.data = this.formData;
    this._route.navigate(["app/refinance-loan-option-step2"]);
  }
}
