import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RefinancePost } from "@app/modules/models/post.model";
import { ApiService } from "@app/services/api.service";
import { OfflineService } from "@app/services/offline.service";

@Component({
  selector: "app-credit-score",
  templateUrl: "./credit-score.component.html",
  styleUrls: ["./credit-score.component.css", "./../index.component.css"],
})
export class CreditScoreComponent implements OnInit {
  submitted = false;
  number: number = 1;
  model: RefinancePost = new RefinancePost();
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
    this.model = this.offline.getStep().data;
  }
  abc(r = "/app/refinance/gov/2") {
    this.saveStep();
    this.model.id = this.model.leadApplicationDetailRefinancingId;
    this.api
      .put("LeadRefinancingDetailsService/Update", this.model)
      .subscribe((x: any) => {
        if (x.success) {
          this.router.navigate([r]);
        }
      });
  }
  saveStep() {
    this.offline.saveStep(7, this.model);
  }
  onFinalCLick(f) {
    this.submitted = true;
    if (f.valid) {
      this.saveStep();
      this.abc("/app/refinance/thanks");
      localStorage.removeItem("offline");
      localStorage.removeItem("LeadApplicationDetailRefinancingId");
      localStorage.localStorage("step");
      this.submitted = false;
    }
  }
  onNextClick() {
    if (
      this.model.isCertify &&
      this.model.isReadEconsent &&
      this.model.isReadThirdPartyConsent
    ) {
      this.submitted = false;

      this.abc("/app/refinance/credit-score/2");
    } else {
      this.submitted = true;
    }
  }
}
