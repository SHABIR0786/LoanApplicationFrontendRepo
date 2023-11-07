import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  EmployementDetailAdd,
  MonthlyIncomeDetailsAdd,
  RefinancePost,
} from "@app/modules/models/post.model";
import { ApiService } from "@app/services/api.service";
import { OfflineService } from "@app/services/offline.service";
import { StateServiceServiceProxy, LeadIncomeTypesServiceServiceProxy, LeadEmploymentTypesServiceServiceProxy } from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-income-info",
  templateUrl: "./income-info.component.html",
  styleUrls: ["./income-info.component.css", "./../index.component.css"],
})
export class IncomeInfoComponent implements OnInit {
  number: number = 1;
  model: RefinancePost = new RefinancePost();
  incomeDetailsModel: MonthlyIncomeDetailsAdd = new MonthlyIncomeDetailsAdd();
  states: any[] = [];
  submitted = false;
  employmentTypes = [];
  editEmploymentdetail:any = {};
  editIncomeDetail:any = {};
  editType = "";
  refinanceEmploymentDetails = [];
  otherIncomeDetails = [];
  incomeTypes = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService,
    private stateService: StateServiceServiceProxy,
    private incomeService: LeadIncomeTypesServiceServiceProxy,
    private employmentTypeService: LeadEmploymentTypesServiceServiceProxy,
    private api: ApiService
  ) {
    this.route.params.subscribe((x) => {
      if (x.number) {
        this.number = x.number;
      } else {
        this.router.navigate(["1"]);
      }
    });
  }

  ngOnInit() {
  this.model = this.offline.getStep().data;
    this.getIncomeTypes();
    this.getStates();
    this.getEmployementTypes();
    this.getAllEmployementDetails();
    if (this.model.empState) {
      this.getStateById(this.model.empState);
    }
  }
  onStateChange(event) {
    this.getStateById(event.target.value);
  }
   getIncomeTypes() {
    this.incomeService.getAll().subscribe((x: any) => {
      this.incomeTypes = x;
      console.log(this.incomeTypes);
      this.getOtherIncomeDetails();

    });
  }
  getEmployementTypes() {
    this.employmentTypeService.getAll().subscribe((x: any) => {
      this.employmentTypes = x;
    });
  }
  async getStates() {
  await this.stateService.getStates().subscribe((x: any) => {
      this.states = x;
      this.model.empState = 1;
      this.model.currentStateId = 1;
      this.model.newHomeState = "1";
    });
  }
  getStateById(id) {
    if (id) {
      this.api.get("StateService/GetStateById?id=" + id).subscribe((x: any) => {
        if (x && x.result) {
          this.model.currentStateName = x.result.stateName;
          console.log(this.model.currentStateName);
        }
      });
    }
  }
  // routerLink="/app/refinance/assets-info/1"
  // callToDb() {
  //   this.api.post("LeadRefinancingDetails/Add", this.model).subscribe((x: any) => {
  //       if (x.success == true) {
  //         this.model.leadApplicationDetailRefinancingId = 1;
  //         this.saveStep();
  //         this.router.navigate(["/app/refinance/assets-info/1"]);
  //       }
  //       console.log({ x });
  //     });
  // }
  saveEmpToDb() {
    let _model: EmployementDetailAdd = new EmployementDetailAdd();
    let leadApplicationDetailRefinancingId = localStorage.getItem('LeadApplicationDetailRefinancingId');
    _model.leadApplicationDetailRefinancingId = parseInt(leadApplicationDetailRefinancingId);
    _model.leadApplicationTypeId = 2;
    _model.employeeTypeId = this.model.w2Emp;
    _model.employerName = this.model.w2EmpName;
    _model.employementAddress = this.model.empAddress;
    _model.employementSuite = this.model.empAptUnit;
    _model.employementCity = this.model.empCity;
    _model.employementTaxeId = this.model.empState;
    _model.employementZip = this.model.empZip;
    _model.employerPhoneNumber = this.model.empPhoneNumber;
    _model.isCurrentJob = this.model.isCurrentJob;
    _model.estimatedStartDate = this.model.empEstDate;
    _model.jobTitle = this.model.jobTitle;
    _model.estimatedAnnualBaseSalary = this.model.estAnnualBaseSalary;
    _model.estimatedAnnualBonus = this.model.estAnnualBonus;
    _model.estimatedAnnualCommission = this.model.estAnnualCommision;
    _model.estimatedAnnualOvertime = this.model.estAnnualOverTime;
    _model.isCoBorrower = this.model.coboIncType;
    this.api.post("LeadEmploymentDetailsService/Add", _model).subscribe((x: any) => {
      if (x.success == true) {
        this.router.navigate(["/app/refinance/income/5"]);
      }
    });
  }
  saveStep() {
    this.offline.saveStep(4, this.model);
  }
  onNextClick(f, step) {
    this.submitted = true;
    if (f.valid) {
      this.saveStep();
      // Add Income Type..
      let LeadApplicationDetailRefinancingId = localStorage.getItem('LeadApplicationDetailRefinancingId');
      this.incomeDetailsModel.leadApplicationDetailRefinancingId = parseInt(LeadApplicationDetailRefinancingId);
      this.incomeDetailsModel.LeadApplicationTypeId = 1;
      this.saveStep();
      this.api.post("LeadRefinancingIncomeDetailsService/Add", this.incomeDetailsModel).subscribe((x: any) => {
        if (x.success == true) {
            this.router.navigate(["/app/refinance/income-info/10"])
          }
        });
        
      // End of add income type
      this.router.navigate(["/app/refinance/income/" + step]);
      this.submitted = false;
    }
  }
  saveAfterValidation(f) {
    this.submitted = true;
    if (f.valid) {
      this.saveStep();
      this.saveEmpToDb();
      this.router.navigate(["/app/refinance/income/5"]);

      this.submitted = false;
    }
  }
  deleteincome(id) {
    this.api.delete("LeadRefinancingIncomeDetailsService/Delete?id="+id)
    .subscribe((x: any) => {
      if (x.success == true) {
        let index = this.otherIncomeDetails.findIndex(x=>x.id == id);
        this.otherIncomeDetails.splice(index,1);
      }
    });
  }
  editEmpoyement(empdt) {
    this.editEmploymentdetail = empdt;
    this.editType = "empdt";
    this.router.navigate(["/app/refinance/income/12"]);
  }
  editIncome(incomedetail) {
    this.editIncomeDetail = incomedetail;
    this.editType = "incomedetail";
    this.router.navigate(["/app/refinance/income/12"]);
  }
  updateincomedetail(f) {
    // this.incomeformsubmitted = true;
    if (f.valid) { 
      this.api.put("LeadRefinancingIncomeDetailsService/update", this.editIncomeDetail)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.getOtherIncomeDetails();
            this.router.navigate(["/app/refinance/income/11"]);
          }
        });
    }
  }
  updateemploymentdetail(f) {
    // this.incomeformsubmitted = true;
    if (f.valid) { 
      // this.saveStep();
      // this.editEmploymentdetail.Id = this.editEmploymentdetail.id; 
      this.api
        .put("LeadEmploymentDetailsService/update", this.editEmploymentdetail)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.getAllEmployementDetails();
            this.router.navigate(["/app/refinance/income/11"])
          }
        });
    }
  }
  getIncometType(id) {
    let incomeType = this.incomeTypes.find(x=>x.id == id);
    console.log(incomeType);
    return incomeType.incomeType;
  }
  doneClicked(f) {
    console.log(f);
    if (f.valid) {
      this.saveStep();
      this.router.navigate(["/app/refinance/income/11"]);
    }
  }
  getAllEmployementDetails() {
    let LeadApplicationDetailRefinancingId = localStorage.getItem('LeadApplicationDetailRefinancingId');
    this.api.get("LeadEmploymentDetailsService/GetRefinanceEmployementDetails?id="+LeadApplicationDetailRefinancingId).subscribe((x: any) => {
      if (x.success == true) {
        this.refinanceEmploymentDetails = x.result;
      }
    });
  }
  getOtherIncomeDetails() {
    let LeadApplicationDetailRefinancingId = localStorage.getItem('LeadApplicationDetailRefinancingId');
    this.api.get("LeadRefinancingIncomeDetailsService/GetRefinancingIncomeDetails?id="+LeadApplicationDetailRefinancingId).subscribe((x: any) => {
      if (x.success == true) {
        this.otherIncomeDetails = x.result;
      }
    });
  }
}
