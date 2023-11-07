import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { OfflineService } from "@app/services/offline.service";
const ROUTE_DATA = [
  // "/app/purchase/",
  "/app/purchase/welcome/",
  "/app/purchase/property-info/",
  "/app/purchase/military-info/",
  "/app/purchase/personal-info/",
  "/app/purchase/income-info/",
  "/app/purchase/assets-info/",
  "/app/purchase/gov/",
  "/app/purchase/credit-score/",
];
const TABS_DATA = [];
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  a: number = 0;
  constructor(private router: Router, private offlineService: OfflineService) {
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        var d = x.urlAfterRedirects.replace(/[0-9]/g, "");
        ROUTE_DATA.filter((obj, i) => {
          if (obj == d) {
            this.a = i;
          }
        });
        // if (x.urlAfterRedirects === "/app/purchase") {
        //   this.a = 0;
        // } else {
        //   ROUTE_DATA.filter((obj, i) => {
        //     if (new RegExp(obj + "(.*?)").test(x.urlAfterRedirects)) {
        //       this.a = i + 1;
        //     }
        //   });
        // }
      }
      //this.stepNav();
    });
  }

  ngOnInit() {}
  stepNav() {
    const stepData = this.offlineService.getStep();
    this.router.navigate(["/app/" + ROUTE_DATA[stepData.step - 1]]);
  }
}
