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
