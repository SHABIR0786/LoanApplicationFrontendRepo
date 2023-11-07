import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-acknowledgements-agreements",
  templateUrl: "./acknowledgements-agreements.component.html",
  styleUrls: ["./acknowledgements-agreements.component.css"],
})
export class AcknowledgementsAgreementsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // if(localStorage.financialInfoAssetsLiabilitiesModels != undefined && localStorage.financialInfoAssetsLiabilitiesModels != '')
    // {
    //   this.financialInfoAssetsLiabilitiesModels =JSON.parse(localStorage.getItem('financialInfoAssetsLiabilitiesModels'));
    // }
  }
  create()
  {
    this.router.navigateByUrl('app/admin/incomplete-loan-application/military-service');
  }
}
