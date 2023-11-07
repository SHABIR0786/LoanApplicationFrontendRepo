import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-va-loan",
  templateUrl: "./va-loan.component.html",
  styleUrls: ["./va-loan.component.css"],
})
export class VaLoanComponent implements OnInit {
  constructor() {}
  ReadMoreOne = true;
  visibleOne = false;
  visibleTwo = false;
  ReadMoreTwo = true;

  ngOnInit(): void {}
  onclickOne() {
    this.ReadMoreOne = !this.ReadMoreOne;
    this.visibleOne = !this.visibleOne;
  }
  onclickTwo() {
    this.ReadMoreTwo = !this.ReadMoreTwo;
    this.visibleTwo = !this.visibleTwo;
  }
}
