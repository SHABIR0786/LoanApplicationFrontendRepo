import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-thirty-year-fixed-mortgage",
  templateUrl: "./thirty-year-fixed-mortgage.component.html",
  styleUrls: ["./thirty-year-fixed-mortgage.component.css"],
})
export class ThirtyYearFixedMortgageComponent implements OnInit {
  ReadMore: boolean = true;

  visible: boolean = false;

  onclick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }

  ReadMoreOne: boolean = true;

  visibleOne: boolean = false;

  onclickOne() {
    this.ReadMoreOne = !this.ReadMoreOne;
    this.visibleOne = !this.visibleOne;
  }

  ReadMoretwo: boolean = true;

  visibletwo: boolean = false;

  onclicktwo() {
    this.ReadMoretwo = !this.ReadMoretwo;
    this.visibletwo = !this.visibletwo;
  }

  constructor() {}

  ngOnInit(): void {}
}
