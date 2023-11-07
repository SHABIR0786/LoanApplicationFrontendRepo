import { Component, Injector, OnInit } from "@angular/core";
import { LoanstatusService } from "../../../shared/service/loanstatus.service";
import { LoanManagementService } from "../../../shared/service/loanmanagement.service";
import {
  AdminDisclosureServiceServiceProxy,
  AdminLoanApplicationDocumentServiceServiceProxy,
  AdminLoanDetailServiceServiceProxy,
  AdminLoanProgramServiceServiceProxy,
  AdminLoanStatusServiceServiceProxy,
  AdminLoanSummaryStatusServiceServiceProxy,
  SessionServiceProxy,
  UploadAdminLoanApplicationDocument,
} from "@shared/service-proxies/service-proxies";
import { indexOf } from "lodash";
import { AppComponentBase } from "@shared/app-component-base";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent
  extends AppComponentBase
  implements OnInit {
  constructor(
    injector: Injector,
    private LoanstatusService: LoanstatusService,
    private LoanManagmentService: LoanManagementService,
    private adminLoanDetailService: AdminLoanDetailServiceServiceProxy,
    private adminLoanProgramService: AdminLoanProgramServiceServiceProxy,
    private adminLoanStatusService: AdminLoanStatusServiceServiceProxy,
    private adminLoanStatusSummaryService: AdminLoanSummaryStatusServiceServiceProxy,
    private adminLoanApplicationDocService: AdminLoanApplicationDocumentServiceServiceProxy,
    private adminDisclouserService: AdminDisclosureServiceServiceProxy,
    private sessionService: SessionServiceProxy
  ) {
    super(injector);
  }
  loanStatus: any;
  loanApplicantName: any;
  loanApplicationNumber: any;
  loanApplicantAddress: any;
  loanProgramName: any;
  loanProgramId: any;
  mortageConsultant: any;
  NMLSId: any;
  disclouser: any;
  isUploadedStatus: string = "";
  ////////////////////////
  adminLoanDetails: any;
  adminLoanProgramId: any;
  adminLoanProgramName: any;
  adminLoanId: any;
  adminLoanStatusId: any;
  adminLoanStatus: string;
  title: any;
  allDisclouser: any = [];
  userId: any;
  alldocs: any = [];
  fICO: any = false;
  loanDoc: any = false;
  doc1003: any = false;
  borrowerCerti: any = false;
  disclousersDoc: any = false;
  rateLock: any = false;
  request: UploadAdminLoanApplicationDocument = new UploadAdminLoanApplicationDocument();
  ngOnInit(): void {
    this.getAdminLoanDocuments();
    this.getUserId();
    // this.getLoanStatusById();
    // this.getLoanDetailsById();
    // this.getAdminDisclouserDetails();
    this.getAdminLoanDetailsbyId();
    this.getAllDisclosers();
  }
  // getAdminLoanDetailsbyId(){
  //   this.adminLoanDetailService.getById(4).subscribe(res=>{
  //     this.adminLoanDetails=res;
  //     this.adminLoanProgramId = this.adminLoanDetails.loanProgramId;
  //     this.adminLoanId = this.adminLoanDetails.loanApplicationId;
  //   })
  // }
  getUserId() {
    this.sessionService.getCurrentLoginInformations().subscribe((res) => {
      this.userId = res.user.id;
    });
  }
  getAdminLoanDetailsbyId() {
    this.adminLoanDetailService.getById(4).subscribe((res) => {
      this.adminLoanDetails = res;
      this.adminLoanProgramId = this.adminLoanDetails.loanProgramId;
      this.adminLoanId = this.adminLoanDetails.loanApplicationId;
      this.getAdminLoanProgramById();
      this.getAdminLoanSummaryStatusById();
    });
  }
  getAdminLoanProgramById() {
    this.adminLoanProgramService
      .getById(this.adminLoanProgramId)
      .subscribe((res) => {
        this.adminLoanProgramName = res.loanProgram;
      });
  }
  getAdminLoanSummaryStatusById() {
    this.adminLoanStatusSummaryService
      .getById(this.adminLoanId)
      .subscribe((res) => {
        this.adminLoanStatusId = res.statusId;

        this.adminLoanStatusService
          .getById(this.adminLoanStatusId)
          .subscribe((res) => {
            this.adminLoanStatus = res.status;
          });
      });
  }
  getAllDisclosers() {
    this.adminDisclouserService.getAll().subscribe((res) => {
      this.allDisclouser = res;
    });
  }
  getAdminLoanDocuments() {
    this.adminLoanApplicationDocService.getAll().subscribe((res) => {
      this.alldocs = res.filter((res) => res.userId == this.userId);
      this.rateLock =
        res.filter((res) => res.disclosureId == 1).length > 0
          ? res.filter((res) => res.disclosureId == 1)[0]
          : false;
      this.disclousersDoc =
        res.filter((res) => res.disclosureId == 2).length > 0
          ? res.filter((res) => res.disclosureId == 2)[0]
          : false;
      this.borrowerCerti =
        res.filter((res) => res.disclosureId == 3).length > 0
          ? res.filter((res) => res.disclosureId == 3)[0]
          : false;
      this.doc1003 =
        res.filter((res) => res.disclosureId == 4).length > 0
          ? res.filter((res) => res.disclosureId == 4)[0]
          : false;
      this.fICO =
        res.filter((res) => res.disclosureId == 6).length > 0
          ? res.filter((res) => res.disclosureId == 6)[0]
          : false;
      this.loanDoc =
        res.filter((res) => res.disclosureId == 5).length > 0
          ? res.filter((res) => res.disclosureId == 5)[0]
          : false;
    });
  }
  ////////////////////////////////
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

  getAdminDisclouserDetails() {
    let obj = {
      params: {
        id: 1,
      },
    };
    this.LoanManagmentService.getallAdminDisclouser(obj).subscribe(
      (res: any) => {
        this.disclouser = res.result;
        console.log(res);
      }
    );
  }

  // UploadDocument() {
  //   const content_ = new FormData();

  //   if (loanId === null || loanId === undefined)
  //     throw new Error("The parameter 'loanId' cannot be null.");
  //   else content_.append("LoanId", loanId.toString());

  //   if (disclosureId === null || disclosureId === undefined)
  //     throw new Error("The parameter 'disclosureId' cannot be null.");
  //   else content_.append("DisclosureId", disclosureId.toString());

  //   if (userId === null || userId === undefined)
  //     throw new Error("The parameter 'userId' cannot be null.");
  //   else content_.append("UserId", userId.toString());

  //   if (formFile === null || formFile === undefined)
  //     throw new Error("The parameter 'formFile' cannot be null.");
  //   else
  //     content_.append(
  //       "formFile",
  //       formFile.data,
  //       formFile.fileName ? formFile.fileName : "formFile"
  //     );

  //   let options_: any = {
  //     body: content_,

  //     observe: "response",

  //     responseType: "blob",

  //     headers: new HttpHeaders({
  //       Accept: "text/plain",
  //     }),
  //   };
  //   this.LoanManagmentService.UploadDocument(obj).subscribe();
  // }
  uploadFile(file, disId: any) {
    if (file) {
      this.isUploadedStatus = "start";
      file = {
        fileName: file[0].name,
        // name: type,
        data: file[0],
      };
    }
    this.adminLoanApplicationDocService
      .uploadFile(4, disId, this.userId, file)
      .subscribe((res) => {
        window.location.reload();
        this.notify.info("Uploaded Successfully");
        this.isUploadedStatus = "end";
      });
  }
  deleteFile(disId: any) {
    abp.message.confirm(
      this.l("This File will be deleted...!!"),
      undefined,
      (result: boolean) => {
        if (result) {
          this.adminLoanApplicationDocService
            .deleteFile(disId, this.userId)
            .subscribe((res) => {
              window.location.reload();
              this.notify.info("File successfully deleted");
            });
        }
      }
    );
  }
}
