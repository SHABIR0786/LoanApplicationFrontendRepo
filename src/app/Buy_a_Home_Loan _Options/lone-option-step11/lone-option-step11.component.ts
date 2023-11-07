import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IBuyingHomeLoanOptionModel } from "@app/interfaces/IBuyingHomeLoanOptionModel";
import { LoanOptionHomeBuyingDataService } from "../../services/loanOptionHomeBuyingData.service";

@Component({
  selector: "app-lone-option-step11",
  templateUrl: "./lone-option-step11.component.html",
  styleUrls: ["./lone-option-step11.component.css"],
})
export class LoneOptionStep11Component implements OnInit {
  constructor(
    private _route: Router,
    private _loanOptionHomeBuyingDataService: LoanOptionHomeBuyingDataService
  ) {}
  formData: IBuyingHomeLoanOptionModel;
  MortgageResults = [];

  calculateMonthlyMortgagePayment = (principal, interestRate, termInYears) => {
    interestRate = interestRate === 0 ? 0 : interestRate / 100;
    const monthlyInterestRate = interestRate === 0 ? 0 : interestRate / 12;
    const numberOfMonthlyPayments = termInYears * 12;
    return (
      (monthlyInterestRate *
        principal *
        Math.pow(1 + monthlyInterestRate, numberOfMonthlyPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonthlyPayments) - 1) || 0
    );
  };

  calculateEstimatedMonthlyPayment(interest, loanTerm) {
    var result = this.calculateMonthlyMortgagePayment(
      this.formData.estimatePrice - this.formData.downPayment,
      interest,
      loanTerm
    );
    result = Math.round(result * 100) / 100;
    return result;
    // this.Taxes = Math.ceil((this.YearlyPropertyTaxes / 12) * 100) / 100;
    // this.Insurance = Math.ceil((this.YearlyHomeInsurance / 12) * 100) / 100;
    // this.EstimatedMonthlyPayment =
    //   Math.round(
    //     (result + this.Taxes + this.Insurance + this.MonthlyHOAFee) * 100
    //   ) / 100;
  }
  ngOnInit(): void {
    this.formData = this._loanOptionHomeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-loan-options-animated-step1"]);
    }
    var MonthlyPayment: any = this.calculateEstimatedMonthlyPayment(2.5, 30);
    var totaltax: any = 0;
    totaltax = (MonthlyPayment * 360 - this.formData.estimatePrice) / 360;
    this.MortgageResults.push({
      MonthlyPayment: MonthlyPayment,
      TotalTax: totaltax.toFixed(0),
    });
    MonthlyPayment = this.calculateEstimatedMonthlyPayment(2.375, 30);
    totaltax = (MonthlyPayment * 360 - this.formData.estimatePrice) / 360;
    this.MortgageResults.push({
      MonthlyPayment: MonthlyPayment,
      TotalTax: totaltax.toFixed(0),
    });
    MonthlyPayment = this.calculateEstimatedMonthlyPayment(2.75, 30);
    totaltax = (MonthlyPayment * 360 - this.formData.estimatePrice) / 360;
    this.MortgageResults.push({
      MonthlyPayment: MonthlyPayment,
      TotalTax: totaltax.toFixed(0),
    });
  }

  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-loan-options-animated-step10"]);
  }

  proceedToNext(value) {
    this.formData.plan_page11 = value;
    this._loanOptionHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-loan-options-animated-step12"]);
  }
}
