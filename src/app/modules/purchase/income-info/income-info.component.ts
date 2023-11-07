import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  EmployementDetailAdd,
  MonthlyIncomeDetailsAdd
} from "@app/modules/models/post.model";
import { ApiService } from "@app/services/api.service";
import { OfflineService } from "@app/services/offline.service";
import {
  AddLeadEmploymentDetails,
  LeadEmploymentDetailsServiceServiceProxy,
  StateServiceServiceProxy,
  LeadIncomeTypesServiceServiceProxy,
  LeadEmploymentTypesServiceServiceProxy
} from "@shared/service-proxies/service-proxies";
import * as moment from "moment";

@Component({
  selector: "app-income-info",
  templateUrl: "./income-info.component.html",
  styleUrls: ["./income-info.component.css"],
})
export class IncomeInfoComponent implements OnInit {
  number: number = 1;
  yes = false;
  model: EmployementDetailAdd = new EmployementDetailAdd();
  incomeDetailsModel: MonthlyIncomeDetailsAdd = new MonthlyIncomeDetailsAdd();
  purchaseEmploymentDetails = [];
  states = [];
  incomeTypes = [];
  employmentTypes = [];
  otherIncomeDetails = [];
  editEmploymentdetail:any = {};
  editIncomeDetail:any = {};
  editType = "";
  submitted = false;
  incomeformsubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService,
    private api: ApiService,
    private stateService: StateServiceServiceProxy,
    private incomeService: LeadIncomeTypesServiceServiceProxy,
    private employmentTypeService: LeadEmploymentTypesServiceServiceProxy,
    private leadEmpDetail: LeadEmploymentDetailsServiceServiceProxy
  ) {
    this.route.params.subscribe((x) => {
      if (x.number) {
        this.number = x.number;
      } else {
        router.navigate(["1"]);
      }
    });
  }

  ngOnInit() {
    this.model = this.offline.getStep().data;
    this.getIncomeTypes();
    this.getStates();
    this.getEmployementTypes();
    this.getAllEmployementDetails();
    this.getOtherIncomeDetails();
    if (this.model.currentStateId) {
      this.getStateById(this.model.employementTaxeId);
    }
  }
  onStateChange(event) {
    this.getStateById(event.target.value);
  }
  editEmpoyement(empdt) {
    this.editEmploymentdetail = empdt;
    console.log(this.editEmploymentdetail);
    this.editType = "empdt";
    this.router.navigate(["/app/purchase/income-info/8"]);
  }
  editIncome(incomedetail) {
    this.editIncomeDetail = incomedetail;
    console.log(this.editIncomeDetail);
    this.editType = "incomedetail";
    this.router.navigate(["/app/purchase/income-info/8"]);
  }
  getStateName(id) {
   let state = this.states.find(x=>x.id == id);
   return state.stateName;
  }
  getIncometType(id) {
    let incomeType = this.incomeTypes.find(x=>x.id == id);
    return incomeType.incomeType;
  }
  
  getStates() {
    this.stateService.getStates().subscribe((x: any) => {
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
          // this.model.empState = "1";
          // this.model.currentStateId = 1;
          // this.model.newHomeState = "1";
          // this.model.newHomeState = x.result[0].id;
        }
      });
    }
  }
  EmpHistory(e) {
    console.log(e);
    this.model.currentOrPastEmployementHistory = e;
  }
  onHaveMoreClick(e) {}
  onIncomeComplete() {
    this.saveStep();
  }
  ReviewInfo() {
    this.getOtherIncomeDetails();
    this.getAllEmployementDetails();
    this.router.navigate(["/app/purchase/income-info/7"]);
  }
  getIncomeTypes() {
    this.incomeService.getAll().subscribe((x: any) => {
      this.incomeTypes = x;
    });
  }
  getEmployementTypes() {
    this.employmentTypeService.getAll().subscribe((x: any) => {
      this.employmentTypes = x;
    });
  }
  updateincomedetail(f) {
    this.incomeformsubmitted = true;
    if (f.valid) { 
      this.api.put("LeadRefinancingIncomeDetailsService/update", this.editIncomeDetail)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.getOtherIncomeDetails();
            this.router.navigate(["/app/purchase/income-info/7"]);
          }
        });
    }
  }
  updateemploymentdetail(f) {
    this.incomeformsubmitted = true;
    if (f.valid) { 
      // this.saveStep();
      this.editEmploymentdetail.Id = this.editEmploymentdetail.id; 
      this.api
        .put("LeadEmploymentDetailsService/update", this.editEmploymentdetail)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.getAllEmployementDetails();
            this.router.navigate(["/app/purchase/income-info/7"])
          }
        });
    }
  }
  deleteEmployment(id) {
    this.api.delete("LeadEmploymentDetailsService/Delete?id="+id)
    .subscribe((x: any) => {
      if (x.success == true) {
        let index = this.purchaseEmploymentDetails.findIndex(x=>x.id == id);
        this.purchaseEmploymentDetails.splice(index,1);
      }
    });
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
  addIncome(f) {
    this.incomeformsubmitted = true;
    if (f.valid) { 
      let leadApplicationDetailPurchasingId = localStorage.getItem('leadApplicationDetailPurchasingId');
      this.incomeDetailsModel.leadApplicationDetailPurchasingId = parseInt(leadApplicationDetailPurchasingId);
      this.incomeDetailsModel.LeadApplicationTypeId = 1;
      this.saveStep();
      this.api
        .post("LeadRefinancingIncomeDetailsService/Add", this.incomeDetailsModel)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.router.navigate(["/app/purchase/income-info/5"])
          }
        });
    }
  }
  getOtherIncomeDetails() {
    let leadApplicationDetailPurchasingId = localStorage.getItem('leadApplicationDetailPurchasingId');
    this.model.leadApplicationDetailPurchasingId = parseInt(leadApplicationDetailPurchasingId);
    this.api.get("LeadRefinancingIncomeDetailsService/getPurchaseIncomeDetails?id="+leadApplicationDetailPurchasingId).subscribe((x: any) => {
      if (x.success == true) {
        this.otherIncomeDetails = x.result;
        console.log(this.otherIncomeDetails);
      }
    });
  }
  saveEmpToDb(f) {
    this.submitted = true;
    var _model = new EmployementDetailAdd();
    _model.map(this.model);
    if (f.valid) {
      let leadApplicationDetailPurchasingId = localStorage.getItem('leadApplicationDetailPurchasingId');
      this.model.leadApplicationDetailPurchasingId = parseInt(leadApplicationDetailPurchasingId);
      this.model.leadApplicationTypeId = 1;
      this.saveStep();
      this.api
        .post("LeadEmploymentDetailsService/Add", _model)
        .subscribe((x: any) => {
          if (x.success == true) {
            this.router.navigate(["/app/purchase/income-info/4"]);
          }
        });
    }
  }
  addanother() {
    this.model.employeeTypeId =  null;
    this.model.currentOrPastEmployementHistory = false;
    this.model.employerName = "";
    this.model.employementAddress = "";
    this.model.employementSuite = "";
    this.model.employementCity = "";
    this.model.employementTaxeId = null;
    this.model.employementZip = "";
    this.model.employerPhoneNumber = "";
    this.model.isCurrentJob = null;
    this.model.estimatedStartDate = "";
    this.model.jobTitle = "";
    this.model.estimatedAnnualBaseSalary = null;
    this.model.estimatedAnnualBonus = null;
    this.model.estimatedAnnualCommission = null;
    this.model.estimatedAnnualOvertime = null;
    this.model.currentStateId = 1;
    this.model.empState = 1;
    this.model.newHomeState = "1";
    this.model.currentStateName = "";
    this.router.navigate(["/app/purchase/income-info/2"]);
  }
  getAllEmployementDetails() {
    let leadApplicationDetailPurchasingId = localStorage.getItem('leadApplicationDetailPurchasingId');
    this.model.leadApplicationDetailPurchasingId = parseInt(leadApplicationDetailPurchasingId);
    this.api.get("LeadEmploymentDetailsService/GetPurchaseEmployementDetails?id="+leadApplicationDetailPurchasingId).subscribe((x: any) => {
      if (x.success == true) {
        this.purchaseEmploymentDetails = x.result;
      }
    });
  }
  saveStep() {
    this.offline.saveStep(5, this.model);
  }

  onNextClick(f, step) {
    this.submitted = true;
    if (f.valid) {
      this.router.navigate(["/app/purchase/income-info/" + step]);
      this.submitted = false;
    }
  }

  doneClicked(f) {
    if (f.valid) {
      this.router.navigate(["/app/purchase/income-info/7"]);
    }
  }
}
