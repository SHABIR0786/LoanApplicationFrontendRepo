import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-refinance-calculator",
  templateUrl: "./refinance-calculator.component.html",
  styleUrls: ["./refinance-calculator.component.css"],
})
export class RefinanceCalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  SelectedOption = "lower";
  submitted = false;
  MonthlyPaymentIncludeTaxesandInsurance = false;
  VenetryorCurrentlyServing = false;
  TakeCashOut = null;
  MortgageBalance = null;
  CurrentMonthlyPayment = null;
  YearlyPropertyTaxes = null;
  YearlyHomeInsurance = null;
  HomeWorthToday = null;
  RecommendedOptions = [];
  ZipCode = null;
  RateYourCreditOptions = [
    { value: "Excellent (720 or above)", key: 0 },
    { value: "Good (660 - 719)", key: 1 },
    { value: "Average (620 - 659)", key: 2 },
    { value: "Below Average (580 - 619)", key: 3 },
    { value: "Poor (579 and below)", key: 4 },
  ];
  Taxes = 0;
  Insurance = 0;
  RemainingLoanTermsInYears = null;
  changeSelectedOption(value) {
    this.SelectedOption = value;
  }
  caculatormortgage(f9) {
    this.submitted = true;
    console.log(f9);
    if (f9.valid) {
      this.RecommendedOptions = [];
      if (this.SelectedOption == "lower") {
        var result = this.calculateMonthlyMortgagePayment(
          this.MortgageBalance,
          3.25,
          30
        );
        result = this.formatResult(result);
        if (this.MonthlyPaymentIncludeTaxesandInsurance) {
          this.Taxes = Math.ceil((this.YearlyPropertyTaxes / 12) * 100) / 100;
          this.Insurance =
            Math.ceil((this.YearlyHomeInsurance / 12) * 100) / 100;
          result =
            Math.round((result + this.Taxes + this.Insurance) * 100) / 100;
        }
        var option1 = {
          MonthlyPayment: result,
          Save: this.CurrentMonthlyPayment - this.formatResult(result),
          Term: "30-Year Fixed",
          Rate: 3.25,
          YearlyProtpertyTaxes: this.YearlyPropertyTaxes,
          homeInsurance: this.YearlyHomeInsurance,
        };
        this.RecommendedOptions.push(option1);
        result = this.calculateMonthlyMortgagePayment(
          this.MortgageBalance,
          2.5,
          30
        );
        result = this.formatResult(result);
        if (this.MonthlyPaymentIncludeTaxesandInsurance) {
          result =
            Math.round((result + this.Taxes + this.Insurance) * 100) / 100;
        }
        var option2 = {
          MonthlyPayment: result,
          Save: this.CurrentMonthlyPayment - this.formatResult(result),
          Term: "7/6 Arm Conforming",
          Rate: 2.5,
          YearlyProtpertyTaxes: this.YearlyPropertyTaxes,
          homeInsurance: this.YearlyHomeInsurance,
        };
        this.RecommendedOptions.push(option2);
        result = this.calculateMonthlyMortgagePayment(
          this.MortgageBalance,
          2.625,
          30
        );
        result = this.formatResult(result);
        if (this.MonthlyPaymentIncludeTaxesandInsurance) {
          result =
            Math.round((result + this.Taxes + this.Insurance) * 100) / 100;
        }
        var option3 = {
          MonthlyPayment: result,
          Save: this.CurrentMonthlyPayment - this.formatResult(result),
          Term: "7/6 Arm Conforming",
          Rate: 2.625,
          YearlyProtpertyTaxes: this.YearlyPropertyTaxes,
          homeInsurance: this.YearlyHomeInsurance,
        };
        this.RecommendedOptions.push(option3);
      } else if (this.SelectedOption == "faster") {
        if (this.RemainingLoanTermsInYears > 30) {
          var result = this.calculateMonthlyMortgagePayment(
            this.MortgageBalance,
            3.25,
            30
          );
          const option1 = {
            MonthlyPayment: this.formatResult(result),
            Save: this.RemainingLoanTermsInYears - 30,
            Term: 30,
            Rate: 3.25,
          };
          this.RecommendedOptions.push(option1);
        }
        if (this.RemainingLoanTermsInYears > 8) {
          var result = this.calculateMonthlyMortgagePayment(
            this.MortgageBalance,
            2.375,
            8
          );
          const option2 = {
            MonthlyPayment: this.formatResult(result),
            Save: this.RemainingLoanTermsInYears - 8,
            Term: 8,
            Rate: 2.375,
          };
          this.RecommendedOptions.push(option2);
        }
      } else if (this.SelectedOption == "cashout") {
        // Find the cash out maximum value
        var MaxCashOutLimit = this.HomeWorthToday - this.MortgageBalance;
        if (this.TakeCashOut < MaxCashOutLimit) {
          var newAmount = this.MortgageBalance + this.TakeCashOut;
          console.log(newAmount);
          var result = this.calculateMonthlyMortgagePayment(
            newAmount,
            3.625,
            30
          );
          result = this.formatResult(result);
          const option1 = {
            MonthlyPayment: result,
            Save: this.TakeCashOut,
            Term: 30,
            Rate: 3.625,
          };
          this.RecommendedOptions.push(option1);
          var result = this.calculateMonthlyMortgagePayment(newAmount, 2.5, 30);
          result = this.formatResult(result);
          const option2 = {
            MonthlyPayment: result,
            Save: this.TakeCashOut,
            Term: 30,
            Rate: 2.5,
          };
          this.RecommendedOptions.push(option2);
          var result = this.calculateMonthlyMortgagePayment(
            newAmount,
            2.75,
            30
          );
          result = this.formatResult(result);
          const option3 = {
            MonthlyPayment: result,
            Save: this.TakeCashOut,
            Term: 30,
            Rate: 2.75,
          };
          this.RecommendedOptions.push(option3);
        }
      }
      console.log(this.RecommendedOptions);
      // this.calculateRefinanceMortgagePayment();
    }
  }
  MonthlyPaymentTaxandInschanged(value) {
    this.MonthlyPaymentIncludeTaxesandInsurance = value;
  }
  changeveteran(value) {
    this.VenetryorCurrentlyServing = value;
  }
  calculateMonthlyMortgagePayment = (
    principal: number,
    interestRate: number,
    termInYears: number
  ) => {
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

  calculateMonthlyInterestPayment = (
    monthlyInterestRate: number,
    remainingBalance: number
  ) => {
    return monthlyInterestRate * remainingBalance;
  };

  calculateRefinanceMortgagePayment = (
    loanAmount: number,
    interestRate: number,
    termInYears: number,
    newInterestRate: number,
    newTermInYears: number,
    numberOfPaymentsMade: number
  ) => {
    // base monthly mortage payment
    const monthlyMortgagePayment = this.calculateMonthlyMortgagePayment(
      loanAmount,
      interestRate,
      termInYears
    );
    let remainingBalance = loanAmount;
    let totalPaid = 0;
    let totalInterest = 0;
    for (let i = 0; i < numberOfPaymentsMade; i++) {
      // convert interest rate into a monthly percentage rate
      const monthlyInterestPayment = this.calculateMonthlyInterestPayment(
        interestRate / 100 / 12,
        remainingBalance
      );
      const monthlyPrincipalPayment =
        monthlyMortgagePayment - monthlyInterestPayment;
      // if the total monthly payment is no longer less than remaining balance, then we are at our last payment
      if (remainingBalance - monthlyPrincipalPayment >= 0) {
        remainingBalance -= monthlyPrincipalPayment;
      }
      totalPaid += monthlyPrincipalPayment;
      totalInterest += monthlyInterestPayment;
    }
    // calculate the remaining interest at the end of the number of payments made
    const remainingInterest =
      monthlyMortgagePayment * termInYears * 12 - loanAmount - totalInterest;
    // the new mortgage total is the remaining balance
    const newMortgageTotal = remainingBalance;
    // lets calculate the new monthly mortgage payment with the new mortgage total
    const newMonthlyMortgagePayment = this.calculateMonthlyMortgagePayment(
      newMortgageTotal,
      newInterestRate,
      newTermInYears
    );
    //calculate remaining total interest
    const newRemainingInterest =
      newMonthlyMortgagePayment * newTermInYears * 12 - remainingBalance;
    // build out the response
    const response = {
      interestSaved: this.formatResult(
        remainingInterest - newRemainingInterest
      ),
      oldMonthlyMortgage: {
        monthlyMortgagePayment: this.formatResult(monthlyMortgagePayment),
        remainingInterest: this.formatResult(remainingInterest),
      },
      newMonthlyMortgage: {
        newMortgageTotal: this.formatResult(newMortgageTotal),
        monthlyMortgagePayment: this.formatResult(newMonthlyMortgagePayment),
        remainingInterest: this.formatResult(newRemainingInterest),
      },
      totalPaid: this.formatResult(totalPaid),
    };
    return response;
  };

  formatResult = (result: number) => {
    return isNaN(parseFloat(result.toFixed(2)))
      ? 0
      : parseFloat(result.toFixed(2));
  };
}
