import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IBuyingHomeLoanOptionModel } from "@app/interfaces/IBuyingHomeLoanOptionModel";
import { LoanOptionHomeBuyingDataService } from "../../services/loanOptionHomeBuyingData.service";
@Component({
  selector: "app-lone-option-step6",
  templateUrl: "./lone-option-step6.component.html",
  styleUrls: ["./lone-option-step6.component.css"],
})
export class LoneOptionStep6Component implements OnInit {
  constructor(
    private _route: Router,
    private _loanOptionHomeBuyingDataService: LoanOptionHomeBuyingDataService
  ) {}
  formData: IBuyingHomeLoanOptionModel;

  ngOnInit(): void {
    this.formData = this._loanOptionHomeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-loan-options-animated-step1"]);
    }
  }
  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-loan-options-animated-step5"]);
  }
  proceedToNext(value) {
    this.formData.FirstTimeHomeBuying = value;
    this._loanOptionHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-loan-options-animated-step7"]);
  }
}
