import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-loan-process",
  templateUrl: "./main-loan-process.component.html",
  styleUrls: ["./main-loan-process.component.css"],
})
export class MainLoanProcessComponent implements OnInit {
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  applyNow() {
    this._route.navigate(["/app/purchase"]);
  }
}
