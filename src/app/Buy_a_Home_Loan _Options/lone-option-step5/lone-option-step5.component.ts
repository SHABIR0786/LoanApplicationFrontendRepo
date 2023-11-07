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
  selector: "app-lone-option-step5",
  templateUrl: "./lone-option-step5.component.html",
  styleUrls: ["./lone-option-step5.component.css"],
})
export class LoneOptionStep5Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private _route: Router,
    private _loanOptionHomeBuyingDataService: LoanOptionHomeBuyingDataService
  ) {}
  formData: IBuyingHomeLoanOptionModel;
  form: FormGroup;
  submitted = false;
  // Percentage = null;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      estimatePrice: [null, Validators.required],
      downPayment: [null, Validators.required],
      downPaymentPercent: [null, Validators.required],
    });
    this.formData = this._loanOptionHomeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-loan-options-animated-step1"]);
    }
    // else {
    //  this.Percentage = this.formData.downPaymentPercent;
    // }
  }
  percentChange() {
    this.form.value.estimatePrice = parseInt(this.form.value.estimatePrice);
    this.form.value.downPayment = parseInt(this.form.value.downPayment);
    console.log(this.form.value.downPaymentPercent);
    if (this.form.value.downPayment <= this.form.value.estimatePrice) {
      this.form.value.downPaymentPercent =
        (this.form.value.downPayment / this.form.value.estimatePrice) * 100;
      this.form.value.downPaymentPercent = this.form.value.downPaymentPercent.toFixed(
        0
      );
      this.formData.downPaymentPercent = this.form.value.downPaymentPercent;
      this.submitted = true;
    } else {
      this.form.controls["downPayment"].setValue(0);
      this.form.value.downPaymentPercent = 0;
      this.submitted = false;
    }
  }
  downpaymentchange() {
    this.form.value.estimatePrice = parseInt(this.form.value.estimatePrice);
    this.form.value.downPaymentPercent = parseInt(
      this.form.value.downPaymentPercent
    );
    console.log(this.form.value.downPaymentPercent);
    if (this.form.value.downPaymentPercent <= 100) {
      this.form.value.downPayment =
        (this.form.value.downPaymentPercent * this.form.value.estimatePrice) /
        100;
      this.form.value.downPayment = this.form.value.downPayment.toFixed(0);
      this.formData.downPayment = this.form.value.downPayment;
      this.submitted = true;
    } else {
      this.form.controls["downPayment"].setValue(0);
      this.form.value.downPaymentPercent = 0;
      this.submitted = false;
    }
  }
  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-loan-options-animated-step4"]);
  }
  proceedToNext() {
    var data = this.form.value;
    if (this.form.invalid && !this.submitted) {
      return;
    }
    this.formData.estimatePrice = data.estimatePrice;
    this.formData.downPayment = data.downPayment;
    this.formData.downPaymentPercent = data.downPaymentPercent;
    this._loanOptionHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-loan-options-animated-step6"]);
  }
}
