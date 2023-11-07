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
import { RefinanceLoanOptionService } from "../../services/refinance-loan-option.service";
import { Result } from "common";
@Component({
  selector: "app-step18",
  templateUrl: "./step18.component.html",
  styleUrls: ["./step18.component.css"],
})
export class RefinanceLoanOptionsStep18Component implements OnInit {
  constructor(
    private _route: Router,
    private formBuilder: FormBuilder,
    private _refinanceLoanOptionService: RefinanceLoanOptionService,
    private _refinanceLoanOptionDataService: RefinanceLoanOptionDataService
  ) {}

  formData: IRefinanceLoanOptionModel;
  form: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ["", Validators.required],
      lasttname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
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
    this._route.navigate(["app/refinance-loan-option-step17"]);
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
    this._refinanceLoanOptionDataService.data = this.formData;

    console.log(this._refinanceLoanOptionDataService.data);
    console.log(this.formData);

    this._refinanceLoanOptionService
      .post<Result<IRefinanceLoanOptionModel>>(
        "AddRefinanceLoanOption",
        this.formData
      )
      .subscribe(
        (response) => {
          console.log(response);
          console.log("Sbmitted");
          this.notify(
            "success",
            "Refinance Loan Option Form Submitted successfully"
          );
          this._refinanceLoanOptionDataService.data = {};
        },
        (error) => {
          console.log(error);
          this.notify("error", "Refinance Loan Option Form Submitting-Error");
        }
      );

    this._route.navigate(["app/home"]);
  }
}
