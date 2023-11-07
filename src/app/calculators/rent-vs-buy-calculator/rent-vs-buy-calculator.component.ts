import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-rent-vs-buy-calculator",
  templateUrl: "./rent-vs-buy-calculator.component.html",
  styleUrls: ["./rent-vs-buy-calculator.component.css"],
})
export class RentVsBuyCalculatorComponent implements OnInit {
  RentvsBuyForm: FormGroup;
  form: Object = {};
  submitted = false;
  buyingCosts = [];
  rentingCosts = [];
  loanTerms = 0;
  rental = {};
  DownPaymentType = "usd";
  DownPaymentPercent = 0;
  DownPaymentUSD = 50000;

  fillingTaxStatus = [
    "Single",
    "Married Filing Jointly",
    "Married Filing Separately",
    "Head of Household",
    "Qualified Widow",
  ];
  RateYourCreditOptions = [
    { value: "Excellent (720 or above)", key: 0 },
    { value: "Good (660 - 719)", key: 1 },
    { value: "Average (620 - 659)", key: 2 },
    { value: "Below Average (580 - 619)", key: 3 },
    { value: "Poor (579 and below)", key: 4 },
  ];
  constructor(private fb: FormBuilder) {}
  get RentvsBuyFormControl() {
    return this.RentvsBuyForm.controls;
  }
  myForm() {}
  ngOnInit(): void {
    this.RentvsBuyForm = this.fb.group({
      home_price: [500000, Validators.required],
      down_payment: [20, Validators.required],
      interest_rate: [7.03, Validators.required],
      loan_term: [30, Validators.required],
      buy_closing: [2, Validators.required],
      property_tax: [1.5, Validators.required],
      tax_increase: [3, Validators.required],
      home_insurance: [2500, Validators.required],
      hoa_fee: [0, Validators.required],
      maintenance_cost: [1.5, Validators.required],
      home_value_appreciation: [3, Validators.required],
      cost_insurance_increase: [3, Validators.required],
      selling_closing_costs: [7, Validators.required],

      monthly_rental_fee: [3000, Validators.required],
      rental_fee_increase: [3, Validators.required],
      renter_insurance: [15, Validators.required],
      security_deposit: [3000, Validators.required],
      upfront_cost: [100],

      average_investment_return: [5, Validators.required],
      marginal_federal_tax_rate: [25, Validators.required],
      marginal_state_tax_rate: [0, Validators.required],
      tax_filing_status: ["MarriedJoint", Validators.required],
    });
  }

  getNumberRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
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
  calculateEstimatedMonthlyPayment() {
    const homePrice = this.RentvsBuyForm.value.home_price;
    const downPaymentPercentage = this.RentvsBuyForm.value.down_payment;
    const interestRate = this.RentvsBuyForm.value.interest_rate;
    const loanTermYears = this.RentvsBuyForm.value.loan_term;
    const buyingClosingCostsPercentage = this.RentvsBuyForm.value.buy_closing;
    const propertyTaxRate = this.RentvsBuyForm.value.property_tax;
    const propertyTaxIncreaseRate = this.RentvsBuyForm.value.tax_increase;
    const homeInsurance = this.RentvsBuyForm.value.home_insurance;
    const monthlyRentalFee = this.RentvsBuyForm.value.monthly_rental_fee;
    const rentalFeeIncreaseRate = this.RentvsBuyForm.value.rental_fee_increase;
    const renterInsuranceMonthly = this.RentvsBuyForm.value.renter_insurance;
    const securityDeposit = this.RentvsBuyForm.value.security_deposit;
    const upfrontCost = this.RentvsBuyForm.value.upfront_cost;
    const maintenanceCostRate = this.RentvsBuyForm.value.maintenance_cost;
    const homeValueAppreciationRate = this.RentvsBuyForm.value
      .home_value_appreciation;
    const costInsuranceIncreaseRate = this.RentvsBuyForm.value
      .cost_insurance_increase;
    const sellingClosingCostsPercentage = this.RentvsBuyForm.value
      .selling_closing_costs;

    // Initialize variables
    let buyingCosts = [];
    let rentingCosts = [];
    let monthlyMortgagePayment =
      ((homePrice - homePrice * (downPaymentPercentage / 100)) *
        (interestRate / 100 / 12)) /
      (1 - Math.pow(1 + interestRate / 100 / 12, -loanTermYears * 12));
    let remainingLoan = homePrice - homePrice * (downPaymentPercentage / 100);

    for (let year = 1; year <= 30; year++) {
      // Calculate annual buying costs for year N
      const monthlyPropertyTax =
        (homePrice *
          (propertyTaxRate / 100) *
          Math.pow(1 + propertyTaxIncreaseRate / 100, year - 1)) /
        12;
      const monthlyMaintenanceCost =
        (homePrice *
          (maintenanceCostRate / 100) *
          Math.pow(1 + costInsuranceIncreaseRate / 100, year - 1)) /
        12;
      const monthlySellingCosts =
        (homePrice *
          (sellingClosingCostsPercentage / 100) *
          Math.pow(1 + homeValueAppreciationRate / 100, year - 1)) /
        12;
      const annualBuyingCost =
        monthlyMortgagePayment * 12 +
        monthlyPropertyTax * 12 +
        homeInsurance +
        monthlyMaintenanceCost * 12 +
        monthlySellingCosts;

      // Calculate annual renting costs for year N
      const monthlyRent =
        monthlyRentalFee * Math.pow(1 + rentalFeeIncreaseRate / 100, year - 1);
      const annualRenterInsurance = renterInsuranceMonthly * 12;
      const annualUpfrontCost = upfrontCost;
      const annualRentingCost =
        monthlyRent * 12 + annualRenterInsurance + annualUpfrontCost;

      // Store the results
      buyingCosts.push(annualBuyingCost);
      rentingCosts.push(annualRentingCost);
    }
    this.buyingCosts = buyingCosts;
    this.rentingCosts = rentingCosts;
    this.loanTerms = this.RentvsBuyForm.value.loan_term;
  }
  downPaymentTypeUpdated(value) {
    this.DownPaymentType = value;
    if (value == "usd") {
      this.RentvsBuyForm.controls.downPaymentInput.setValue(
        this.DownPaymentUSD
      );
    } else {
      this.RentvsBuyForm.controls.downPaymentInput.setValue(
        this.DownPaymentPercent
      );
    }
  }
}
