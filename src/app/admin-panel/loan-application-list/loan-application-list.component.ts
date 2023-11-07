import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { AdminLoanDetailServiceServiceProxy } from "@shared/service-proxies/service-proxies";
import { LoanManagementService } from "@shared/service/loanmanagement.service";

@Component({
  selector: "app-loan-application-list",
  templateUrl: "./loan-application-list.component.html",
  styleUrls: ["./loan-application-list.component.css"],
})
export class LoanApplicationListComponent implements OnInit {
  Custom: any[];
  CurrentLoginInfo: any;
  allLoanApplications: any = [];
  constructor(
    private LoanManagmentService: LoanManagementService,
    private adminLoanDetailService: AdminLoanDetailServiceServiceProxy,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.getAllLoanApplications();
    this.getLoanApplicationList();
    this.getCurrentLoginInformations();
  }
  getAllLoanApplications() {
    this.adminLoanDetailService.getAll().subscribe((res) => {
      this.allLoanApplications = res;
    });
  }
  ///////////////
  getLoanApplicationList() {
    let obj = {
      params: {
        keyword: "",
        skip: 0,
        MaxResultCount: 100,
      },
    };
    this.LoanManagmentService.getLoanApplicationList(obj, null).subscribe(
      (res: any) => {
        console.log(res.result);
        this.Custom = res.result.items;
      }
    );
  }
  getCurrentLoginInformations() {
    let obj = {
      params: {},
    };
    this.LoanManagmentService.getCurrentLoginInformations(obj).subscribe(
      (res: any) => {
        console.log(res.result.application);
        this.CurrentLoginInfo = res.result.application;
      }
    );
  }
  checkLoanStatus() {
    this._route.navigate(["/app/admin/home"]);
  }
}
