import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AddFinanceApiModel, PostModel } from "@app/modules/models/post.model";
import { ApiService } from "@app/services/api.service";
import { OfflineService } from "@app/services/offline.service";
import {
  AccountServiceProxy,
  RegisterInput,
  StateServiceServiceProxy,
} from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.css", "./../index.component.css"],
})
export class PersonalInfoComponent implements OnInit {
  submitted = false;
  number: number = 1;
  model: PostModel = new PostModel();
  states: any[] = [];
  cities: any[] = [];
  dependents: number = 0;
  matched = false;
  user: RegisterInput = new RegisterInput();
  isEdit = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService,
    private api: ApiService,
    private stateService: StateServiceServiceProxy,
    private accountService: AccountServiceProxy
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
    this.getState();
    this.model = this.offline.getStep().data;
  }
  onStateChange(event) {
    this.getStateById(event.target.value);
  }
  getState() {
    this.stateService.getStates().subscribe((x: any) => {
      this.states = x;
      this.model.empState = "1";
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

  refersomeone() {
    this.model.isSomeOneRefer = 1;
  }

  onPersClick(f, step) {
    this.submitted = true;
    if (this.model.personalPassword === this.model.personalPasswordCon) {
      this.matched = true;
    }
    if (f.valid) {
      this.router.navigate(["/app/purchase/personal-info", step]);
      this.submitted = false;
      this.matched = false;
      this.saveStep();
    }
  }
  referClick(e: boolean) {
    this.model.isSomeOneRefer = e ? 1 : 0;
    this.saveStep();
  }
  maritalClick(e: string) {
    this.model.maritialStatus = e;
    this.saveStep();
  }
  edit() {
    this.isEdit = true;
    this.router.navigate(["/app/purchase/personal-info/9"]);
  }
  done() {
    this.isEdit = true;
    this.router.navigate(["/app/purchase/personal-info/8"]);
  }

  onDepPlusClick() {
    this.dependents += 1;
  }
  onDepMinClick() {
    if (this.dependents > 0) this.dependents -= 1;
  }
  onDepNext() {
    this.model.numberOfDependents = this.dependents;
    this.saveStep();
  }
  onDepSkipNext() {
    this.model.numberOfDependents = 0;
    this.saveStep();
  }
  ownApply(e: boolean) {
    this.model.isApplyOwn = e ? 1 : 0;
    this.saveStep();
  }
  onPersonalClick() {
    this.saveStep();
  }
  onExpenClick() {
    this.saveStep();
  }
 async saveToDb() {
    this.saveStep();
    var _model = new AddFinanceApiModel();
    _model.map(this.model);
    this.user.name = this.model.personalLegalFirstName;
    this.user.surname = this.model.personalLegalLastName;
    this.user.userName = this.model.personalEmailAddress;
    this.user.emailAddress = this.model.personalEmailAddress;
    this.user.password = this.model.personalPassword;
    // check if the user already exist then update the leadpurchasing detailservice
    let leadApplicationDetailPurchasingId = localStorage.getItem('leadApplicationDetailPurchasingId');
    if(leadApplicationDetailPurchasingId) {
    await this.api.get('/LeadPurchasingDetailService/GetById?id='+leadApplicationDetailPurchasingId).subscribe((res:any) => {
      if(res.result && res.result.id) {
        this.updateLeadPurchasingDetail(_model,leadApplicationDetailPurchasingId);
      } else {
        this.addLeadPurchasingDetail(_model);
      }
    })
    } else {
      this.addLeadPurchasingDetail(_model);
    }
  }
  addLeadPurchasingDetail(_model) {
    this.api.post("/LeadPurchasingDetailService/Add", _model).subscribe((x: any) => {
      if (x.success == true) {
        this.model.leadApplicationDetailPurchasingId = x.result;
        this.saveStep();
        localStorage.setItem('leadApplicationDetailPurchasingId',x.result);
        this.accountService.register(this.user).subscribe((res:any) => {
          this.router.navigate(["/app/purchase/income-info/1"]);
        });
      }
    });
  }
  updateLeadPurchasingDetail(_model,leadApplicationDetailPurchasingId) {
    _model.id = leadApplicationDetailPurchasingId;
    this.api.put("/LeadPurchasingDetailService/Update", _model).subscribe((x: any) => {
      if (x.success == true) {
        this.saveStep();
        this.router.navigate(["/app/purchase/income-info/1"]);
        // this.accountService.register(this.user).subscribe((res:any) => {
        //   this.router.navigate(["/app/purchase/income-info/1"]);
        // });
      }
    });
  }
  saveStep() {
    this.offline.saveStep(4, this.model);
  }
  doneClicked(f) {
    if (f.valid) {
      this.router.navigate(["/app/purchase/personal-info/8"]);
    }
  }
}
