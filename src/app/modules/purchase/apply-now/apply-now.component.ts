import { Component, OnInit } from "@angular/core";
import { PostModel } from "@app/modules/models/post.model";
import { OfflineService } from "@app/services/offline.service";
@Component({
  selector: "app-apply-now",
  templateUrl: "./apply-now.component.html",
  styleUrls: ["./apply-now.component.css"],
})
export class ApplyNowComponent implements OnInit {
  model: PostModel = new PostModel();
  constructor(private offline: OfflineService) {}

  ngOnInit() {
    this.model = this.offline.getStep().data;
  }
  setChoice(e: number) {
    this.model.firstChoice = e.toString();
    this.offline.saveStep(1, this.model);
  }
}
