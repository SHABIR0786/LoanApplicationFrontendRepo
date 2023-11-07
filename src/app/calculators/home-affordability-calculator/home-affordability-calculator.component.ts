import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { property } from "lodash";

@Component({
  selector: "app-home-affordability-calculator",
  templateUrl: "./home-affordability-calculator.component.html",
  styleUrls: ["./home-affordability-calculator.component.css"],
})
export class HomeAffordabilityCalculatorComponent implements OnInit {
  homeAffordAbility: FormGroup;
  constructor(private fb: FormBuilder) {}
  get homeAffordAbilityControl() {
    return this.homeAffordAbility.controls;
  }
  submitted = false;
  propertyTaxType = "usd";
  HOAType = "usd";
  InsuranceType = "usd";
  downPaymentType = "percentage";
  HomeAfford = 0;
  results = {
    borrowAmount: 0,
    totalPrice: 0,
    monthlyMortgage: 0,
    propertyTax: 0,
    HOAFee: 0,
    estimateClosingCost: 0,
    insurance: 0,
    estimatedAnnualMainenanceCost: 0,
    totalMonthlyCost: 0,
  };
  RateYourCreditOptions = [
    { value: "Excellent (760+)", key: 1 },
    { value: "Very Good (720 - 759)", key: 2 },
    { value: "Good (680 - 719)", key: 3 },
    { value: "Average (620 - 679)", key: 4 },
    { value: "Fair (580 - 619)", key: 5 },
    { value: "Poor (579 and below)", key: 6 },
  ];
  DTIOptions = [
    { value: "5%", key: 5 },
    { value: "10%", key: 10 },
    { value: "15%", key: 15 },
    { value: "20%", key: 20 },
    { value: "25%", key: 25 },
    { value: "30%", key: 30 },
    { value: "40%", key: 40 },
    { value: "45%", key: 45 },
    { value: "50%", key: 50 },
  ];

  ngOnInit(): void {
    this.homeAffordAbility = this.fb.group({
      annualIncome: [100000, Validators.required],
      loanTerm: [30, Validators.required],
      propertyTax: [1.5, Validators.required],
      downPaymentType: ["percentage"],
      propertyTaxType: ["percentage"],
      HOAType: ["percentage"],
      InsuranceType: ["percentage"],
      HOAFee: [0, Validators.required],
      insurance: [0.5, Validators.required],
      DTI: ["", Validators.required],
      interestRate: [7.03, Validators.required],
      monthlyDebt: [0, Validators.required],
      downPayment: [20, Validators.required],
      zipCode: ["", Validators.required],
      creditScore: ["", Validators.required],
    });
    this.homeAffordAbility.controls["creditScore"].setValue(1);
  }

  calculatePrincipleAmount = (monthly, interestRate, termInYears) => {
    interestRate = interestRate === 0 ? 0 : interestRate / 100;
    const monthlyInterestRate = interestRate === 0 ? 0 : interestRate / 12;
    const numberOfMonthlyPayments = termInYears * 12;
    var principal =
      monthly /
      ((monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfMonthlyPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonthlyPayments) - 1) || 0);
    return principal;
  };

  propertyTaxTypeChanged(value) {
    this.propertyTaxType = value;
  }
  HOATypeChanged(value) {
    this.HOAType = value;
  }
  InsuranceTypeChanged(value) {
    this.InsuranceType = value;
  }

  downPaymentTypeChanged(value) {
    this.downPaymentType = value;
  }
  changeCreditScore(e) {
    if (this.homeAffordAbility.value.creditScore == 1) {
      this.homeAffordAbility.controls["interestRate"].setValue(3.75);
    } else if (this.homeAffordAbility.value.creditScore == 2) {
      this.homeAffordAbility.controls["interestRate"].setValue(3.79);
    } else if (this.homeAffordAbility.value.creditScore == 3) {
      this.homeAffordAbility.controls["interestRate"].setValue(4.793);
    } else if (this.homeAffordAbility.value.creditScore == 4) {
      this.homeAffordAbility.controls["interestRate"].setValue(5.339);
    }
    console.log(this.homeAffordAbility.value.interestRate);
  }

  calculate() {
    this.submitted = true;
    if (this.homeAffordAbility.valid) {
      // Maximum Affordable Monthly Mortgage Payment = (Annual Household Income x Debt-to-Income Ratio) / 12
      // Annual Dept Payment Formula
      // Monthly Deb * 12
      const anuualDeb = Math.floor(
        this.homeAffordAbility.value.monthlyDebt * 12
      );
      let maximumAffordableMonthlyMortgagePayment = Math.floor(
        (this.homeAffordAbility.value.annualIncome *
          (parseInt(this.homeAffordAbility.value.DTI) / 100) -
          anuualDeb) /
          12
      );

      // Property Tax.
      let propertyTax = this.homeAffordAbility.value.propertyTax;
      // If Property Tax is in Percentage
      // if (this.propertyTaxType == "percentage") {
      //   propertyTax =  totalHomePrice * (this.homeAffordAbility.value.propertyTax / 100);
      // }
      this.results.propertyTax = propertyTax;

      // HAO Fee
      let HOAFee = this.homeAffordAbility.value.HOAFee;
      // If HOA Fee is in Percentage
      // if (this.HOAType == "percentage") {
      //   HOAFee = totalHomePrice * (HOAFee / 100);
      // }
      this.results.HOAFee = HOAFee;

      // Insurance Per year
      let Insurance = this.homeAffordAbility.value.insurance;
      // if (this.InsuranceType == "percentage") {
      //   Insurance = totalHomePrice * (Insurance / 100);
      // }
      this.results.insurance = Insurance;
      maximumAffordableMonthlyMortgagePayment = Math.floor(
        maximumAffordableMonthlyMortgagePayment -
          propertyTax / 12 -
          HOAFee / 12 -
          Insurance / 12
      );

      this.results.monthlyMortgage = maximumAffordableMonthlyMortgagePayment;

      // Number of Payments is the total number of monthly payments over the loan term (30 years * 12 months).
      const numberofPaymentsMonthly =
        this.homeAffordAbility.value.loanTerm * 12;
      const monthlyInterestRate =
        this.homeAffordAbility.value.interestRate / 12 / 100;

      // Mortgage Amount = Monthly Mortgage Payment x [(1 - (1 + Monthly Interest Rate)^(-Number of Payments)) / Monthly Interest Rate]
      const MortgageAmount = Math.floor(
        maximumAffordableMonthlyMortgagePayment *
          ((1 - Math.pow(1 + monthlyInterestRate, -numberofPaymentsMonthly)) /
            monthlyInterestRate)
      );
      this.results.borrowAmount = MortgageAmount;

      // Calculate the down payment
      let totalHomePrice = 0;
      if (this.downPaymentType == "usd") {
        // If Loan Payment is in USD
        totalHomePrice =
          MortgageAmount + parseInt(this.homeAffordAbility.value.downPayment);
      } else if (this.downPaymentType == "percentage") {
        console.log(
          MortgageAmount /
            (1 - parseInt(this.homeAffordAbility.value.downPayment) / 100)
        );
        totalHomePrice =
          MortgageAmount /
          (1 - parseInt(this.homeAffordAbility.value.downPayment) / 100);
      }
      this.results.totalPrice = Math.floor(totalHomePrice);
      this.results.estimateClosingCost = Math.floor(
        this.results.totalPrice * 0.03
      );
      this.results.estimatedAnnualMainenanceCost = Math.floor(
        this.results.estimatedAnnualMainenanceCost * 0.015
      );
      this.results.totalMonthlyCost =
        this.results.monthlyMortgage +
        this.results.propertyTax / 12 +
        this.results.HOAFee / 12 +
        this.results.insurance / 12 +
        this.results.estimatedAnnualMainenanceCost / 12;
    }
  }
}
