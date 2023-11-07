import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-loan-progress",
  templateUrl: "./loan-progress.component.html",
  styleUrls: ["./loan-progress.component.css"],
})
export class LoanProgressComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  navigateToLoanProcess() {
    this._router.navigate(["app/admin/main-loan-process"]);
  }
}
