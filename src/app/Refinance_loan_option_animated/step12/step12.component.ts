import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IRefinanceLoanOptionModel } from "@app/interfaces/IRefinanceLoanOptionModel";
import { RefinanceLoanOptionDataService } from "../../services/refinanceLoanOptionData.service";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-step12",
  templateUrl: "./step12.component.html",
  styleUrls: ["./step12.component.css"],
})
export class RefinanceLoanOptionsStep12Component implements OnInit {
  constructor(
    private _route: Router,
    private formBuilder: FormBuilder,
    private _refinanceLoanOptionDataService: RefinanceLoanOptionDataService
  ) {}

  formData: IRefinanceLoanOptionModel;
  form: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      remaining: [null, Validators.required],
    });
    this.formData = this._refinanceLoanOptionDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/refinance-loan-option-step1"]);
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  proceedToPrevious() {
    this._route.navigate(["app/refinance-loan-option-step11"]);
  }
  proceedToNext() {
    this.form.value.remaining = parseInt(this.form.value.remaining);
    var data = this.form.value;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.formData.borrowAdditionalCash = data.remaining;
    this._refinanceLoanOptionDataService.data = this.formData;
    this._route.navigate(["app/refinance-loan-option-step13"]);
  }
}
