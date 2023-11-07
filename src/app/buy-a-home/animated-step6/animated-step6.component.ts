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
  selector: "app-animated-step6",
  templateUrl: "./animated-step6.component.html",
  styleUrls: ["./animated-step6.component.css"],
})
export class AnimatedStep6Component implements OnInit {
  formData: IBuyingHomeModel;
  form: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private _route: Router,
    private _homeBuyingDataService: HomeBuyingDataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: ["", Validators.required],
    });
    this.formData = this._homeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-animated-step1"]);
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-animated-step5"]);
  }

  proceedToNext() {
    var data = this.form.value;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.formData.purchasePrice = data.amount;
    this._homeBuyingDataService.data = this.formData;
    this._route.navigate(["app/buy-a-home-animated-step7"]);
  }
}
