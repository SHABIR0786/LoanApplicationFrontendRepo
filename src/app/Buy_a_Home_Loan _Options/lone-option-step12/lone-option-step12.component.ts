import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IBuyingHomeLoanOptionModel } from "@app/interfaces/IBuyingHomeLoanOptionModel";
import { LoanOptionHomeBuyingDataService } from "../../services/loanOptionHomeBuyingData.service";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-lone-option-step12",
  templateUrl: "./lone-option-step12.component.html",
  styleUrls: ["./lone-option-step12.component.css"],
})
export class LoneOptionStep12Component implements OnInit {
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
  }

  percentChange() {
    console.log(this.formData.downPayment);
    this.formData.downPayment = parseInt(this.formData.downPayment + "");
    this.formData.estimatePrice = parseInt(this.formData.estimatePrice + "");

    if (this.formData.downPayment <= this.formData.estimatePrice) {
      this.formData.downPaymentPercent =
        (this.formData.downPayment / this.formData.estimatePrice) * 100;
      this.formData.downPaymentPercent = parseInt(
        this.formData.downPaymentPercent.toFixed(0)
      );
      this.formData.downPaymentPercent = this.formData.downPaymentPercent;
    }
  }
  downpaymentchange() {
    console.log(this.formData.downPaymentPercent);
    if (this.formData.downPaymentPercent <= 100) {
      this.formData.downPayment =
        (this.formData.downPaymentPercent * this.formData.estimatePrice) / 100;
      this.formData.downPayment = parseInt(
        this.formData.downPayment.toFixed(0)
      );
      this.formData.downPayment = this.formData.downPayment;
    }
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
  }
  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-loan-options-animated-step11"]);
  }
  proceedToNext(value) {
    this.formData.plan_page12 = value;
    this._loanOptionHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-loan-options-animated-step13"]);
  }
  update() {
    this._loanOptionHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-loan-options-animated-step13"]);
  }
}
