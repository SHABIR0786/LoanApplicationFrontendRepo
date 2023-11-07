import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IBuyingHomeModel } from "@app/interfaces/IBuyingHomeModel";
import { HomeBuyingService } from "../../services/home-buying.service";
import { HomeBuyingDataService } from "../../services/homeBuyingData.service";
import { Result } from "common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-animated-step19",
  templateUrl: "./animated-step19.component.html",
  styleUrls: ["./animated-step19.component.css"],
})
export class AnimatedStep19Component implements OnInit {
  formData: IBuyingHomeModel;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _route: Router,
    private _homeBuyingService: HomeBuyingService,
    private _homeBuyingDataService: HomeBuyingDataService
  ) {}

  get refferedByFormControls() {
    return this.form.controls;
  }

  refferedBy = "Google";
  refferedByList = ["Google", "Facebook", "Instagram", "Twitter", "Youtube"];
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      refferedBy: [null, Validators.required],
    });

    this.formData = this._homeBuyingDataService.data;
    if (this.formData == null || this.formData == undefined) {
      this._route.navigate(["app/buy-a-home-animated-step1"]);
    }
  }

  proceedToPrevious() {
    this._route.navigate(["app/buy-a-home-animated-step18"]);
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
    this._homeBuyingDataService.data = this.formData;
    console.log(this._homeBuyingDataService.data);
    console.log(this.formData);

    this._homeBuyingService
      .post<Result<IBuyingHomeModel>>("Create", this.formData)
      .subscribe(
        (response) => {
          console.log(response);
          console.log("Sbmitted");
          this.notify("success", "Buying Home Form Submitted successfully");
          this._homeBuyingDataService.data = {};
          // this._dataService.loanApplication = response.result;
          // this.form.patchValue(this._dataService.loanApplication.loanDetails);
        },
        (error) => {
          console.log(error);
          this.notify("error", "Buying Home Form Submitting-Error");
        }
      );
    this._route.navigate(["app/home"]);
  }
}
