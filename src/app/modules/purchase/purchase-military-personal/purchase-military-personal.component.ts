import { Component, OnInit } from "@angular/core";
import { PostModel } from "@app/modules/models/post.model";
import { OfflineService } from "@app/services/offline.service";

@Component({
  selector: "app-purchase-military-personal",
  templateUrl: "./purchase-military-personal.component.html",
  styleUrls: ["./purchase-military-personal.component.css"],
})
export class PurchaseMilitaryPersonalComponent implements OnInit {
  model: PostModel = new PostModel();
  constructor(private offline: OfflineService) {}

  ngOnInit() {
    this.model = this.offline.getStep().data;
  }
  onMilPersonalClick() {
    this.saveStep();
  }

  saveStep() {
    this.offline.saveStep(5, this.model);
  }
}
