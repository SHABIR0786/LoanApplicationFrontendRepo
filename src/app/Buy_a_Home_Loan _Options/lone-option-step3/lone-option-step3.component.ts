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
  selector: "app-lone-option-step3",
  templateUrl: "./lone-option-step3.component.html",
  styleUrls: ["./lone-option-step3.component.css"],
})
export class LoneOptionStep3Component implements OnInit {
  constructor(
    private _route: Router,
    private formBuilder: FormBuilder,
    private _loanOptionHomeBuyingDataService: LoanOptionHomeBuyingDataService
  ) {}

  formData: IBuyingHomeLoanOptionModel;
  form: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      zipCode: ["", Validators.required],
    });
    this.formData = this._loanOptionHomeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-loan-options-animated-step1"]);
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-loan-options-animated-step2"]);
  }
  proceedToNext() {
    var data = this.form.value;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.formData.zipCode = data.zipCode;
    this._loanOptionHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-loan-options-animated-step4"]);
  }
}
