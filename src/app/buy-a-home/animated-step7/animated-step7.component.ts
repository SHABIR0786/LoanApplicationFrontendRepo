import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IBuyingHomeModel } from "@app/interfaces/IBuyingHomeModel";
import { HomeBuyingDataService } from "../../services/homeBuyingData.service";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-animated-step7",
  templateUrl: "./animated-step7.component.html",
  styleUrls: ["./animated-step7.component.css"],
})
export class AnimatedStep7Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private _route: Router,
    private _homeBuyingDataService: HomeBuyingDataService
  ) {}
  formData: IBuyingHomeModel;
  form: FormGroup;
  submitted = false;
  get StepSevenControl() {
    return this.form.controls;
  }

  downPayment = 0;
  downPaymentPercent = 0;
  Percentage = null;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      downPayment: [null, Validators.required],
      downPaymentPercent: [null, [Validators.max(100), Validators.min(0)]],
    });
    this.formData = this._homeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-animated-step1"]);
    }

    this.Percentage = this.form.value.downPaymentPercent;
  }

  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-animated-step6"]);
  }
  percentageChange(e) {
    if (
      this.formData.downPayment > this._homeBuyingDataService.data.purchasePrice
    ) {
      e.preventDefault();
      this.form.controls["downPayment"].setValue(
        this._homeBuyingDataService.data.purchasePrice
      );
    }
    // this.form.controls["downPaymentPercent"].setValue(
    //   (parseFloat(e.target.value.split("$")[1].replace(/,/g, "")) * 100) /
    //     parseFloat(this._homeBuyingDataService.data.purchasePrice)
    // );
    this.formData.downPayment =
      (parseFloat(this.Percentage) *
        parseFloat(this._homeBuyingDataService.data.purchasePrice)) /
      100;
  }

  downPaymentChange(e) {
    if (e.target.value > this._homeBuyingDataService.data.purchasePrice) {
      e.preventDefault();
      this.form.controls["downPayment"].setValue(
        this._homeBuyingDataService.data.purchasePrice
      );
    }
    this.form.controls["downPaymentPercent"].setValue(
      (parseFloat(e.target.value.split("$")[1].replace(/,/g, "")) * 100) /
        parseFloat(this._homeBuyingDataService.data.purchasePrice)
    );

    this.Percentage =
      (parseFloat(e.target.value.split("$")[1].replace(/,/g, "")) * 100) /
      parseFloat(this._homeBuyingDataService.data.purchasePrice);
    this.Percentage = this.Percentage.toFixed(0);
  }

  proceedToNext() {
    var data = this.form.value;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.formData.downPayment = data.downPayment;
    this.formData.downPaymentPercent = data.downPaymentPercent;
    this._homeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-animated-step8"]);
  }
}
