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
import { LoanOptionHomeBuyingService } from "../../services/loan-option-home-buying.service";
import { Result } from "common";
@Component({
  selector: "app-lone-option-step14",
  templateUrl: "./lone-option-step14.component.html",
  styleUrls: ["./lone-option-step14.component.css"],
})
export class LoneOptionStep14Component implements OnInit {
  constructor(
    private _route: Router,
    private formBuilder: FormBuilder,
    private _loanOptionhomeBuyingService: LoanOptionHomeBuyingService,
    private _loanOptionHomeBuyingDataService: LoanOptionHomeBuyingDataService
  ) {}
  formData: IBuyingHomeLoanOptionModel;
  form: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ["", Validators.required],
      lasttname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
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
    this._route.navigate(["app/buy-a-home-loan-options-animated-step13"]);
  }

  notify(type, message) {
    (() => {
      let n = document.createElement("div");
      let id = Math.random().toString(36).substr(2, 10);
      n.setAttribute("id", id);
      n.classList.add("notification", type);
      n.innerText = message;
      let n_div = document.getElementsByClassName("notification_area");
      n_div[0].id = "notification-area";
      document.getElementById("notification-area").appendChild(n);
      setTimeout(() => {
        var notifications = document
          .getElementById("notification-area")
          .getElementsByClassName("notification");
        for (let i = 0; i < notifications.length; i++) {
          if (notifications[i].getAttribute("id") == id) {
            notifications[i].remove();
            break;
          }
        }
        n_div[0].id = "";
      }, 5000);
    })();
  }
  SubmitForm() {
    var data = this.form.value;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.formData.firstName = data.firstname;
    this.formData.lastName = data.lasttname;
    this.formData.emailAddress = data.email;
    this.formData.phoneNumber = data.phone;
    this._loanOptionHomeBuyingDataService.data = this.formData;

    this._loanOptionhomeBuyingService
      .post<Result<IBuyingHomeLoanOptionModel>>("AddLoanOption", this.formData)
      .subscribe(
        (response) => {
          this.notify(
            "success",
            "Loan Option Buying Home Form Submitted successfully"
          );
          this._loanOptionHomeBuyingDataService.data = {};
        },
        (error) => {
          console.log(error);
          this.notify("error", "Loan Option Buying Home Form Submitting-Error");
        }
      );

    this._route.navigate(["app/home"]);
  }
}
