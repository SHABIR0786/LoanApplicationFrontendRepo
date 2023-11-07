import { Component, OnInit } from "@angular/core";
// import {calculateMonthlyInterestPayment} from "../helper.js"

@Component({
  selector: "app-mortgage-calculator",
  templateUrl: "./mortgage-calculator.component.html",
  styleUrls: ["./mortgage-calculator.component.css"],
})
export class MortgageCalculatorComponent implements OnInit {
  constructor() {}
  DownPaymentType = "usd";
  editDownPayment = false;
  editInterestRate = false;
  DownPaymentPercent = 0;
  DownPaymentUSD = 50000;
  DownPaymentInput = 0;
  InterestRateUSD = 0;
  YearlyPropertyTaxes = 3500;
  YearlyHomeInsurance = 1500;
  Taxes = 0;
  Insurance = 0;
  MonthlyHOAFee = 0;
  EstimatedMonthlyPayment = 0;
  form = {
    InterestRate: 3.25,
    LoanTerm: 30,
    principal: 250000,
  };

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

  ngOnInit(): void {
    this.DownPaymentPercent = (this.DownPaymentUSD / this.form.principal) * 100;
    this.downPaymentTypeUpdated(this.DownPaymentType);
    this.InterestRateUSD = (this.form.InterestRate * this.form.principal) / 100;
    this.calculateEstimatedMonthlyPayment();
  }
  calculateEstimatedMonthlyPayment() {
    var result = this.calculateMonthlyMortgagePayment(
      this.form.principal - this.DownPaymentUSD,
      this.form.InterestRate,
      this.form.LoanTerm
    );
    result = Math.round(result * 100) / 100;
    this.Taxes = Math.ceil((this.YearlyPropertyTaxes / 12) * 100) / 100;
    this.Insurance = Math.ceil((this.YearlyHomeInsurance / 12) * 100) / 100;
    this.EstimatedMonthlyPayment =
      Math.round(
        (result + this.Taxes + this.Insurance + this.MonthlyHOAFee) * 100
      ) / 100;
  }

  downPaymentTypeUpdated(value) {
    if (value == "usd") {
      this.DownPaymentInput = this.DownPaymentUSD;
    } else {
      this.DownPaymentInput = this.DownPaymentPercent;
    }
  }

  valueChanged(e) {
    this.form.InterestRate = e;
    this.InterestRateUSD = (this.form.InterestRate * this.form.principal) / 100;
    this.calculateEstimatedMonthlyPayment();
  }

  downPaymentChanged(e) {
    this.DownPaymentPercent = e;
    this.DownPaymentUSD = (this.DownPaymentPercent * this.form.principal) / 100;
    this.downPaymentTypeUpdated(this.DownPaymentType);
    this.calculateEstimatedMonthlyPayment();
  }

  ChangeLoanTerm(value) {
    this.form.LoanTerm = value;
    this.calculateEstimatedMonthlyPayment();
  }
  downPaymentTypeChanged(value) {
    this.downPaymentTypeUpdated(value);
    this.DownPaymentUSD = (this.DownPaymentPercent * this.form.principal) / 100;
    this.DownPaymentPercent = (this.DownPaymentUSD / this.form.principal) * 100;
  }
  InterestRateChanged(value) {
    this.form.InterestRate = value;
    this.InterestRateUSD = (this.form.InterestRate * this.form.principal) / 100;
    this.calculateEstimatedMonthlyPayment();
  }

  downPaymentInputChanged(value) {
    if (this.DownPaymentType == "usd") {
      this.DownPaymentUSD = value;
      this.DownPaymentPercent =
        (this.DownPaymentUSD / this.form.principal) * 100;
    } else {
      this.DownPaymentPercent = value;
      this.DownPaymentUSD =
        (this.DownPaymentPercent * this.form.principal) / 100;
    }
    this.calculateEstimatedMonthlyPayment();
  }
  HomePriceChanged() {
    this.calculateEstimatedMonthlyPayment();
    this.DownPaymentUSD = (this.DownPaymentPercent * this.form.principal) / 100;
    this.downPaymentTypeUpdated(this.DownPaymentType);
  }
  YearlyPropertyTaxesChanged() {
    this.calculateEstimatedMonthlyPayment();
  }
  YearlyHomeOwnerInsuranceChanged() {
    this.calculateEstimatedMonthlyPayment();
  }
  MonthlyHomeOwnerAssociationHOAFeeChanged() {
    this.calculateEstimatedMonthlyPayment();
  }
}
