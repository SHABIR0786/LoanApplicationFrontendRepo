import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IRefinanceLoanOptionModel } from "@app/interfaces/IRefinanceLoanOptionModel";
import { RefinanceLoanOptionDataService } from "../../services/refinanceLoanOptionData.service";
@Component({
  selector: "app-step15",
  templateUrl: "./step15.component.html",
  styleUrls: ["./step15.component.css"],
})
export class RefinanceLoanOptionsStep15Component implements OnInit {
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
    this._route.navigate(["app/refinance-loan-option-step14"]);
  }
  proceedToNext(value) {
    this.formData.rateCredit = value;
    this._refinanceLoanOptionDataService.data = this.formData;
    this._route.navigate(["app/refinance-loan-option-step16"]);
  }
}
