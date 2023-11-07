import { Component, OnInit } from "@angular/core";
import { RateModel } from "@app/current-home-loan-rates/models/loanRate.model";
@Component({
  selector: "app-current-home-loan-rates",
  templateUrl: "./current-home-loan-rates.component.html",
  styleUrls: ["./current-home-loan-rates.component.css"],
})
export class CurrentHomeLoanRatesComponent implements OnInit {
  submitted = false;
  form: RateModel = new RateModel();
  constructor() {}

  ngOnInit(): void {}

  submit(form) {
    this.submitted = true;
    console.log(this.form);
    if (form.valid) {
      alert("submitted");
    }
  }
}
