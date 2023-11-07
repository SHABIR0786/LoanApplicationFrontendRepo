import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RefinancePost } from "@app/modules/models/post.model";
import { OfflineService } from "@app/services/offline.service";
import { environment } from "environments/environment";
import { ApiService } from "@app/services/api.service";
@Component({
  selector: "app-gov-info",
  templateUrl: "./gov-info.component.html",
  styleUrls: ["./gov-info.component.css", "./../index.component.css"],
})
export class GovInfoComponent implements OnInit {
  submitted = false;
  number: number = 1;
  model: RefinancePost = new RefinancePost();
  questions: any[] = [];
  cs: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService,
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
    this.getAllQuestions();
    this.getCitizenShipType();
    this.model = this.offline.getStep().data;
  }
  getCitizenShipType() {
    this.api
      .get("CitizenshipTypeService/GetCitizenshipTypes")
      .subscribe((x: any) => {
        this.cs = x.result;
      });
  }
  getAllQuestions() {
    let url = "LeadApplicationQuestionsService/GetAll";
    this.api.get(url).subscribe((x: any) => {
      this.questions = x.result;
      this.questions.forEach((obj) => {
        obj.isYes = false;
      });
    });
  }
  onGovClick() {
    this.saveStep();
    this.model.id = this.model.leadApplicationDetailRefinancingId;
    this.api
      .put("LeadRefinancingDetailsService/Update", this.model)
      .subscribe((x: any) => {
        if (x.success) {
          this.router.navigate(["/app/refinance/gov/2"]);
        }
      });
  }
  abc(a) {
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
      this.model.id = this.model.leadApplicationDetailRefinancingId;
      this.api
        .put("LeadRefinancingDetailsService/Update", this.model)
        .subscribe((x: any) => {
          if (x.success) {
            this.router.navigate([a]);
          }
        });
    }
  }
  onQAns(id, ans) {
    let req: any = {
      leadApplicationDetailRefinancingId: this.model
        .leadApplicationDetailRefinancingId,
      questionId: id,
      isYes: ans,
    };
    let url = "/LeadQuestionAnswersService/Add";
    this.api.post(url, req).subscribe((x) => {
      console.log(id);
    });
  }
  saveStep() {
    this.offline.saveStep(6, this.model);
  }
}
