import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IRefinanceBuyingHomeModel } from "@app/interfaces/IRefinanceBuyingHomeModel";
import { RefinanceHomeBuyingDataService } from "../../services/refinanceHomeBuyingData.service";
import { RefinanceHomeBuyingService } from "../../services/refinance-home-buying.service";
import { Result } from "common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-step19",
  templateUrl: "./step19.component.html",
  styleUrls: ["./step19.component.css"],
})
export class Step19Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private _route: Router,
    private _refinancehomeBuyingService: RefinanceHomeBuyingService,
    private _refinanceHomeBuyingDataService: RefinanceHomeBuyingDataService
  ) {}
  refferedBy = "Google";
  refferedByList = ["Google", "Facebook", "Instagram", "Twitter", "Youtube"];
  formData: IRefinanceBuyingHomeModel = {};
  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      refferedBy: [null, Validators.required],
    });
    this.formData = this._refinanceHomeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/refinance-step1"]);
    }
  }
  proceedToPrevious() {
    this._refinanceHomeBuyingDataService.data = this.formData;
    this._route.navigate(["app/refinance-step18"]);
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
    this.formData.refferedBy = this.refferedBy;
    this._refinanceHomeBuyingDataService.data = this.formData;

    console.log(this._refinanceHomeBuyingDataService.data);
    console.log(this.formData);

    this._refinancehomeBuyingService
      .post<Result<IRefinanceBuyingHomeModel>>("AddRefinance", this.formData)
      .subscribe(
        (response) => {
          console.log(response);
          console.log("Sbmitted");
          this.notify(
            "success",
            "Refinance Buying Home Form Submitted successfully"
          );
          this._refinanceHomeBuyingDataService.data = {};
          // this._dataService.loanApplication = response.result;
          // this.form.patchValue(this._dataService.loanApplication.loanDetails);
        },
        (error) => {
          console.log(error);
          this.notify("error", "Refinance Buying Home Form Submitting-Error");
        }
      );

    this._route.navigate(["app/home"]);
  }
}
