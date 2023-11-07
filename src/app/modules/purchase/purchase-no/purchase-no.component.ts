import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-purchase-no",
  templateUrl: "./purchase-no.component.html",
  styleUrls: ["./purchase-no.component.css"],
})
export class PurchaseNoComponent implements OnInit {
  number: number = 2;
  constructor(private router: ActivatedRoute) {
    router.params.subscribe((x) => {
      console.log({ x });
      if (x.number) {
        this.number = x.number;
      }
    });
  }

  ngOnInit() {}
}
