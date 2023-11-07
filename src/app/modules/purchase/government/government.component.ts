import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AddFinanceApiModel, PostModel } from "@app/modules/models/post.model";
import { ApiService } from "@app/services/api.service";
import { OfflineService } from "@app/services/offline.service";
import { CitizenshipTypeServiceServiceProxy } from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-government",
  templateUrl: "./government.component.html",
  styleUrls: ["./government.component.css"],
})
export class GovernmentComponent implements OnInit {
  submitted = false;
  number: number = 1;
  yes = false;
  model: PostModel = new PostModel();
  apiModel: AddFinanceApiModel = new AddFinanceApiModel();
  cs: any[] = [];
  questions: any[] = [];
  ans = [{ id: 1, jwab: 1 }];
  qans(id) {
    return this.ans.find((x) => x.id == id) ? 1 : 0;
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService,
    private api: ApiService,
    private citizenshipTypeService: CitizenshipTypeServiceServiceProxy
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
    this.getCitizenShipType();
    this.getAllQuestions();
  }
  getCitizenShipType() {
    this.citizenshipTypeService.getCitizenshipTypes().subscribe((res) => {
      this.cs = res;
    });
    // this.api.get("CitizenshipType/citizenship-types").subscribe((x: any) => {
    //   this.cs = x.result;
    // });
  }
  getAllQuestions() {
    let url = "LeadApplicationQuestionsService/GetAll";
    this.api.get(url).subscribe((x: any) => {
      this.questions = x.result;
    });
  }
  onGovClick() {
    const final = this.apiModel.map(this.model);
    this.api
      .put("LeadPurchasingDetailService/Update", final)
      .subscribe((d: any) => {
        if (d.success === true) {
          this.router.navigate(["/app/purchase/gov/2"]);
          this.model.leadApplicationDetailPurchasingId = 1;
        } else {
          console.clear();
          console.log({ d });
        }
      });
    this.saveStep();
  }
  onQsClick() {
    let count = 0;
    this.questions.forEach((ele) => {
      if (ele.hasOwnProperty('isYes')) {
        count++;
      }
    });
    if (count != this.questions.length) {
      this.submitted = true;
    } else {
      this.saveStep();
      // this.router.navigate(["/app/purchase/gov/3"]);
      this.router.navigate(["/app/purchase/credit-score/1"]);
      this.submitted = true;
    }
  }
  onAgreeClick() {
    if (this.model.govAgree1 && this.model.govAgree2 && this.model.govAgree3) {
      this.submitted = false;

      this.saveStep();
      this.router.navigate(["/app/purchase/gov/4"]);
    } else {
      this.submitted = true;
    }
  }
  onQAns(id, ans) {
    let req: any = {
      leadApplicationDetailPurchasingId: this.model.leadApplicationDetailPurchasingId??localStorage.getItem('leadApplicationDetailPurchasingId'),
      questionId: id,
      isYes: ans,
    };
    let url = "LeadQuestionAnswersService/Add";
    this.api.post(url, req).subscribe((x) => {
      console.log(id);
    });
  }
  onFinalNext(f, step) {
    this.submitted = true;
    if (f.valid) {
      this.saveStep();
      const final = this.apiModel.map(this.model);
      this.submitted = false;
      this.api
        .post("LeadPurchasingDetailService/Update", final)
        .subscribe((d: any) => {
          if (d.success === true) {
            alert("Done");
          } else {
            alert("Oops");
            console.clear();
            console.log({ d });
          }
        });
      this.router.navigate(["/app/purchase/gov/" + step]);
    }
  }
  saveStep() {
    this.offline.saveStep(8, this.model);
  }
}
