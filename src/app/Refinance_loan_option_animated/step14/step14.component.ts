import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IRefinanceLoanOptionModel } from "@app/interfaces/IRefinanceLoanOptionModel";
import { RefinanceLoanOptionDataService } from "../../services/refinanceLoanOptionData.service";
@Component({
  selector: "app-step14",
  templateUrl: "./step14.component.html",
  styleUrls: ["./step14.component.css"],
})
export class RefinanceLoanOptionsStep14Component implements OnInit {
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
    this._route.navigate(["app/refinance-loan-option-step13"]);
  }
  proceedToNext(value) {
    this.formData.militarySevice = value;
    this._refinanceLoanOptionDataService.data = this.formData;
    this._route.navigate(["app/refinance-loan-option-step15"]);
  }
}
