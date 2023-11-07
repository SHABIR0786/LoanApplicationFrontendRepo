import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IRefinanceLoanOptionModel } from "@app/interfaces/IRefinanceLoanOptionModel";
import { RefinanceLoanOptionDataService } from "../../services/refinanceLoanOptionData.service";
@Component({
  selector: "app-step7",
  templateUrl: "./step7.component.html",
  styleUrls: ["./step7.component.css"],
})
export class RefinanceLoanOptionsStep7Component implements OnInit {
  constructor(
    private _route: Router,
    private _refinanceLoanOptionDataService: RefinanceLoanOptionDataService
  ) {}

  formData: IRefinanceLoanOptionModel;

  ngOnInit(): void {
    this.formData = this._refinanceLoanOptionDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/refinance-loan-option-step1"]);
    }
  }
  proceedToPrevious() {
    this._route.navigate(["app/refinance-loan-option-step6"]);
  }
  proceedToNext(value) {
    this.formData.haveAnyOtherLoanForThisProperty = value;
    this._refinanceLoanOptionDataService.data = this.formData;
    this._route.navigate(["app/refinance-loan-option-step8"]);
  }
}
