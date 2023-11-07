import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-acknowledgements-agreements",
  templateUrl: "./acknowledgements-agreements.component.html",
  styleUrls: ["./acknowledgements-agreements.component.css"],
})
export class AcknowledgementsAgreementsComponent implements OnInit {
  currentDate: Date = new Date();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // if(localStorage.financialInfoAssetsLiabilitiesModels != undefined && localStorage.financialInfoAssetsLiabilitiesModels != '')
    // {
    //   this.financialInfoAssetsLiabilitiesModels =JSON.parse(localStorage.getItem('financialInfoAssetsLiabilitiesModels'));
    // }
  }
  create() {
    this.router.navigateByUrl(
      "app/admin/incomplete-loan-application/military-service"
    );
  }

  fixDecimals(event: any) {
    debugger;
    var vals = event.target.value.replace(",", "");
    if (vals != "") {
      vals = parseFloat(vals).toFixed(2);
      var int: number = parseInt(vals);
      var dec = vals - int;
      if (dec > 0) {
        event.target.value = int + dec;
      } else {
        event.target.value = int + ".00";
      }
      var parts = event.target.value.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      event.target.value = parts.join(".");
    } else {
      event.target.value = "0.00";
    }
  }

  onBlurDt(event: any) {
    var sDate = new Date(event.target.value);
    var currentDate = new Date();
    if (
      sDate.getFullYear() < 1900 ||
      sDate > currentDate ||
      this.isValidDate(sDate.getFullYear(), sDate.getMonth(), sDate.getDay()) ==
        false
    ) {
      event.target.value = currentDate.getDate().toString();
    } else {
    }

    if (Number.isNaN(sDate.getDate())) {
      event.target.value = "";
    }
  }

  isValidDate(year, month, day) {
    var d = new Date(year, month, day);
    if (
      d.getFullYear() == year &&
      d.getMonth() == month &&
      d.getDate() == day
    ) {
      return true;
    }
    return false;
  }
}
