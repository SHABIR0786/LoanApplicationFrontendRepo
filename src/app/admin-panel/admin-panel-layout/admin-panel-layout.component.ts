import { Component, OnInit, Input } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";
import { Router } from "@angular/router";
import { LoanstatusService } from "../../../shared/service/loanstatus.service";
import { AdminUserServices } from "../../../shared/service/adminUser.service";
import { UtilsService } from "abp-ng2-module";
import { NotificationService } from "@app/services/notification.service";
import { SessionServiceProxy } from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-admin-panel-layout",
  templateUrl: "./admin-panel-layout.component.html",
  styleUrls: ["./admin-panel-layout.component.css"],
})
export class AdminPanelLayoutComponent implements OnInit {
  @Input() pageName: string;
    constructor(
      private sessionService: SessionServiceProxy,
      private AdminUserServices: AdminUserServices,
      private LoanstatusService: LoanstatusService,
      private _router: Router ) {}

  loanStatus: any;
  loanApplicantName: any;
  loanApplicationNumber: any;
  loanApplicantAddress: any;
  loanProgramName: any;
  loanProgramId: any;
  mortageConsultant: any;
  NMLSId: any;
  userName: string;
  toggleSidebar: boolean;

  ngOnInit(): void {
    this.getUserDetails();
    // this.getAdminUserDetails();
    this.toggleSidebar = false;
    this.getLoanStatusById();
    this.getLoanDetailsById();
    console.log("pageName", this.pageName);
  }

  getUserDetails() {
    this.sessionService.getCurrentLoginInformations().subscribe((res) => {
      this.userName = res.user.name;
    });
  }
  getAdminUserDetails() {
    let obj = {
      params: {
        id: 1,
      },
    };
    this.AdminUserServices.getAdminDetailsbyId(obj).subscribe(
      (Response: any) => {
        this.userName = Response.result.userName;
      }
    );
  }

  toggleSidebarFunc() {
    this.toggleSidebar = !this.toggleSidebar;
  }
  getLoanStatusById() {
    let obj = {
      params: {
        id: 1,
      },
    };
    this.LoanstatusService.getLoanStatusbyId(obj).subscribe((res: any) => {
      this.loanStatus = res.result.status;
    });
  }

  getLoanDetailsById() {
    let obj = {
      params: {
        id: 1,
      },
    };
    this.LoanstatusService.getLoanDetailsById(obj).subscribe(
      (loanDetails: any) => {
        console.log(loanDetails);
        this.loanApplicantName = loanDetails.result.borrowerName;
        this.loanApplicationNumber = loanDetails.result.loanNo;
        this.loanApplicantAddress = loanDetails.result.propertyAddress;
        this.mortageConsultant = loanDetails.result.mortageConsultant;
        this.NMLSId = loanDetails.result.nmlsId;
        this.getLoanProgramById(loanDetails.result.loanProgramId);
      }
    );
  }
  
  navigateToloanApplicationsList() {
    //this.pageName = Enums.AdminProfile;
    this._router.navigate(["app/admin/loan-application-list"]);
  }
  getLoanProgramById(programId: any) {
    let obj = {
      params: {
        id: programId,
      },
    };
    this.LoanstatusService.getLoanProgramDetailsById(obj).subscribe(
      (result: any) => {
        this.loanProgramName = result.result.loanProgram;
      }
    );
  }

  checkProfilePageView() {
    if (!localStorage.getItem("profilePage"))
      localStorage.setItem("profilePage", "true");
    else localStorage.removeItem("profilePage");
    return localStorage.getItem("profilePage") ? false : true;
  }
  logOut(reload?: boolean) {
    // this._utilsService.deleteCookie("Abp.AuthToken", "enc_auth_token");
    abp.auth.clearToken();
    abp.utils.setCookieValue(
      AppConsts.authorization.encryptedAuthTokenName,
      undefined,
      undefined,
      abp.appPath
    );
    if (reload !== false) {
      location.href = AppConsts.appBaseUrl;
    }
  }
  navigateToProfile() {
    this._router.navigate(["app/admin/profile"]);
  }
}
