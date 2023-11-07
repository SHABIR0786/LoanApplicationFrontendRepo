import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
const ROUTE_DATA = [
  "/app/refinance/",
  "/app/refinance/welcome/",
  "/app/refinance/property-info/",
  "/app/refinance/personal-info/",
  "/app/refinance/income-info/",
  "/app/refinance/assets-info/",
  "/app/refinance/gov/",
  "/app/refinance/gov/",
];
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  a: number = 0;

  constructor(private router: Router) {
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
  goToHome() {
    this.router.navigate(["/refinance"]);
  }
}
