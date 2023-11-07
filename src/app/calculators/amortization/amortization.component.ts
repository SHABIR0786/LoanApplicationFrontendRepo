import { Component, OnInit } from "@angular/core";
import { cloneDeep } from "lodash";

@Component({
  selector: "app-amortization",
  templateUrl: "./amortization.component.html",
  styleUrls: ["./amortization.component.css"],
})
export class AmortizationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  submitted = false;
  currentLoanAmount = null;
  interestRate = null;
  additionalPaymentAmount = null;
  termInYears: any = "select";
  state = "select";
  additionalPaymentType = "select";
  startMonth = "select";
  startPaymentYear = "select";
  principalDue = [];
  computedInterestDue = [];
  principlebalance = [];
  amorizationResult = {
    LoanAmount: 0,
    monthlyPaymentNotIncludingTaxes: 0,
    totalInterestPaid: 0,
    interestRate: 0,
    computedInterestDue: [],
    principalDue: [],
    principlebalance: [],
  };
  isSubmited = false;
  counter(length: number) {
    return Array.from({ length: length }, (_, i) => i + 1);
  }
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
  calculateEstimatedMonthlyPayment(f) {
    console.log(f);
    this.submitted = true;
    if (f.valid) {
      this.currentLoanAmount =
        this.currentLoanAmount - this.additionalPaymentAmount;
      var result = this.calculateMonthlyMortgagePayment(
        this.currentLoanAmount,
        this.interestRate,
        this.termInYears
      );
      result = Math.round(result * 100) / 100;
      this.amorizationResult.LoanAmount = this.currentLoanAmount;
      this.amorizationResult.monthlyPaymentNotIncludingTaxes = result;
      var loanAmount = this.currentLoanAmount;
      var interestRate = this.interestRate / 100;
      var computedInterestRate = 0;
      var principleDue = 0;
      var totalMonths = this.termInYears * 12;
      this.amorizationResult.totalInterestPaid =
        Math.ceil((result * totalMonths - this.currentLoanAmount) * 100) / 100;
      this.amorizationResult.interestRate = this.interestRate;
      for (var i = 0; i < totalMonths; i++) {
        computedInterestRate = (loanAmount * interestRate) / 12;
        computedInterestRate = this.formatResult(computedInterestRate);
        this.computedInterestDue.push(computedInterestRate);
        principleDue = result - computedInterestRate;
        principleDue = this.formatResult(principleDue);
        this.principalDue.push(principleDue);
        loanAmount = loanAmount - principleDue;
        loanAmount = this.formatResult(loanAmount);
        this.principlebalance.push(loanAmount);
      }
      this.amorizationResult.computedInterestDue = this.computedInterestDue;
      this.amorizationResult.principalDue = this.principalDue;
      this.amorizationResult.principlebalance = this.principlebalance;
      this.amorizationResult = cloneDeep(this.amorizationResult);
      this.isSubmited = true;
    }
  }
  formatResult = (result: number) => {
    return isNaN(parseFloat(result.toFixed(2)))
      ? 0
      : Math.round(result * 100) / 100;
  };
  // calculate() {
  //   this.calculateEstimatedMonthlyPayment();
  // }
}
