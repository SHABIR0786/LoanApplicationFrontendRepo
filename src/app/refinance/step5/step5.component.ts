import { Component, OnInit, AfterViewInit } from "@angular/core";
import { IRefinanceBuyingHomeModel } from "@app/interfaces/IRefinanceBuyingHomeModel";
import { RefinanceHomeBuyingDataService } from "../../services/refinanceHomeBuyingData.service";
import { Router } from "@angular/router";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-step5",
  templateUrl: "./step5.component.html",
  styleUrls: ["./step5.component.css"],
})
export class Step5Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private _route: Router,
    private _refinanceHomeBuyingDataService: RefinanceHomeBuyingDataService
  ) {}

  formData: IRefinanceBuyingHomeModel = {};
  form: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: ["", Validators.required],
    });
    this.formData = this._refinanceHomeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/refinance-step1"]);
    }
    console.log(this.formData.HomePrice);
    var value = (this.formData.HomePrice * 100) / 50000000;
    const Element: any = document.getElementById("myRange") as HTMLInputElement;
    if (value) {
      Element.value = value;
    } else {
      Element.value = 0;
    }
    //  this.backgroundColor = 'linear-gradient(to right, #F47741 0%, #F47741 '+ value +'%, #000000 '+ value +'%, #000000 100%);';
  }

  change(value) {
    const Element = document.getElementById("myRange") as HTMLInputElement;
    this.form.controls["amount"].setValue((value * 50000000) / 100);
    Element.style.background =
      "linear-gradient(to right, #F47741 0%, #F47741 " +
      value +
      "%, #000000 " +
      value +
      "%, black 100%)";
  }

  changeamount() {
    const Element: any = document.getElementById("myRange") as HTMLInputElement;
    Element.value = (this.formData.HomePrice * 100) / 50000000;
    Element.style.backgroundColor =
      "linear-gradient(to right, #F47741 0%, #F47741 " +
      Element.value +
      "%, #000000 " +
      Element.value +
      "%, black 100%)";
  }

  ngAfterViewInit() {
    var value = (this.formData.HomePrice * 100) / 50000000;
    if (value) {
      const Element: any = document.getElementById(
        "myRange"
      ) as HTMLInputElement;
      console.log(value);
      Element.value = value;
      Element.style.background =
        "linear-gradient(to right, #F47741 0%, #F47741 " +
        value +
        "%, #000000 " +
        value +
        "%, black 100%)";
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  proceedToPrevious() {
    this._route.navigate(["app/refinance-step4"]);
  }

  proceedToNext() {
    var data = this.form.value;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.formData.HomePrice = data.amount;
    this._refinanceHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/refinance-step6"]);
  }
}
