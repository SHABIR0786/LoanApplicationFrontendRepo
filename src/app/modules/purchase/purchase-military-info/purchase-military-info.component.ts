import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostModel } from "@app/modules/models/post.model";
import { OfflineService } from "@app/services/offline.service";

@Component({
  selector: "app-purchase-military-info",
  templateUrl: "./purchase-military-info.component.html",
  styleUrls: ["./purchase-military-info.component.css"],
})
export class PurchaseMilitaryInfoComponent implements OnInit {
  number: number = 1;
  model: PostModel = new PostModel();
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
    this.model.milStatus = e;
    this.saveStep();
  }
  onMilBranchClick(e) {
    this.model.milBranch = e;
    this.saveStep();
  }
  onMilETSClick(e) {
    this.model.milEts = e;
    this.saveStep();
  }
  onMilVaLoanClick(e) {
    this.model.milVa = e;
    this.saveStep();
  }
  onMilLiveClick(e) {
    this.model.milLive = e;
  }
  saveStep() {
    this.offline.saveStep(4, this.model);
  }
}
