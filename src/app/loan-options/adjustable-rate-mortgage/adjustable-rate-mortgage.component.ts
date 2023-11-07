import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-adjustable-rate-mortgage",
  templateUrl: "./adjustable-rate-mortgage.component.html",
  styleUrls: ["./adjustable-rate-mortgage.component.css"],
})
export class AdjustableRateMortgageComponent implements OnInit {
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
