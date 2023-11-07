import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RefinancePost } from "@app/modules/models/post.model";
import { ApiService } from "@app/services/api.service";
import { OfflineService } from "@app/services/offline.service";
import { StateServiceServiceProxy } from "@shared/service-proxies/service-proxies";
@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.css", "./../index.component.css"],
})
export class PersonalInfoComponent implements OnInit {
  submitted = false;
  number: number = 1;
  model: RefinancePost = new RefinancePost();
  deps = 0;
  states: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService,
    private api: ApiService,
    private stateService: StateServiceServiceProxy
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
    this.getStates();
    if (this.model.currentStateId) {
      this.getStateById(this.model.currentStateId);
    }
    this.model = this.offline.getStep().data;
  }
  onStateChange(event) {
    this.getStateById(event.target.value);
  }
  getStates() {
    this.stateService.getStates().subscribe((x: any) => {
      this.states = x;
      this.model.empState = 1;
      this.model.currentStateId = 1;
      this.model.newHomeState = "1";
      this.model.empState = 1;
      this.model.currentStateId = 1;
      this.model.personalStateId = 1;
      this.model.propertyStateId = 1;
    });
  }
  getStateById(id) {
    if (id) {
      this.api.get("StateService/GetStateById?id=" + id).subscribe((x: any) => {
        if (x && x.result) {
          this.model.currentStateName = x.result.stateName;
          this.model.empStateName = x.result.stateName;
          // this.model.empState = "1";
          // this.model.currentStateId = 1;

          // this.model.newHomeState = "1";
          // this.model.newHomeState = x.result[0].id;
        }
      });
    }
  }
  minDep() {
    if (this.model.numberOfDependents > 0) {
      this.model.numberOfDependents--;
    }
  }
  maxDep() {
    this.model.numberOfDependents++;
  }
  saveStep() {
    this.offline.saveStep(3, this.model);
  }
  onNextStep(f, step) {
    this.submitted = true;
    if (f.valid) {
      this.router.navigate(["/app/refinance/personal-info", step]);
      this.saveStep();
      this.submitted = false;
    }
  }

  coBorrowerNextClick(f) {
    this.submitted = true;
    if (f.valid) {
      this.router.navigate(["/app/refinance/income/1"]);
      // save data to refiance section 
      this.addLeadRefinancingDetail(this.model);
      this.saveStep();
      this.submitted = false;
    }
  }
  addLeadRefinancingDetail(_model) {
    this.api.post("/LeadRefinancingDetailsService/Add", _model).subscribe((x: any) => {
      if (x.success == true) {
        console.log(x);
        // this.model.leadApplicationDetailPurchasingId = x.result;
        this.saveStep();
        localStorage.setItem('LeadApplicationDetailRefinancingId',x.result);
        // this.accountService.register(this.user).subscribe((res:any) => {
        //   this.router.navigate(["/app/purchase/income-info/1"]);
        // });
      }
    });
  }
  milClick(obj: boolean) {
    this.model.isMilitaryMember = obj == true ? 1 : 0;
    this.saveStep();
  }

  doneClicked(f) {
    if (f.valid) {
      this.router.navigate(["/app/refinance/personal-info/6"]);
    }
  }
}
