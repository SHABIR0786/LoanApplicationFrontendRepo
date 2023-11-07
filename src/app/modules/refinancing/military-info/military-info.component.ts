import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RefinancePost } from "@app/modules/models/post.model";
import { OfflineService } from "@app/services/offline.service";

@Component({
  selector: "app-military-info",
  templateUrl: "./military-info.component.html",
  styleUrls: ["./military-info.component.css"],
})
export class MilitaryInfoComponent implements OnInit {
  number: number = 1;
  model: RefinancePost = new RefinancePost();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService
  ) {
    this.route.params.subscribe((x) => {
      if (x.number) {
        this.number = x.number;
      } else {
        this.router.navigate(["/purchase/purchase-mil-info/1"]);
      }
    });
  }

  ngOnInit() {
    this.model = this.offline.getStep().data;
  }
  onMilitaryStatusClick(e) {
    this.model.currentMilitaryStatus = e;
    this.saveStep();
  }
  onMilBranchClick(e) {
    this.model.militaryBranch = e;
    this.saveStep();
  }
  onMilETSClick(e) {
    // this.model.etsdate = e;
    this.saveStep();
  }
  onMilVaLoanClick(e) {
    this.model.isValoanPreviously = e;
    this.saveStep();
  }
  onMilLiveClick(e) {
    this.model.whoLivingInHome = e;
  }
  saveStep() {
    this.offline.saveStep(4, this.model);
  }
}
