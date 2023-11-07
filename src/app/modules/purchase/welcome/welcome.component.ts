import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostModel } from "@app/modules/models/post.model";
import { OfflineService } from "@app/services/offline.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  model: PostModel = new PostModel();
  number: number = 1;
  yes = false;
  ezLoadOfficer = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService
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
  }
  setOption(e) {
    this.model.stage = e;
    this.offline.saveStep(2, this.model);
  }
  setEzOption(e) {
    this.model.workingWdEz = e;
    this.offline.saveStep(2, this.model);
  }
  onEZNext() {
    this.model.ezLoadOfficer = this.ezLoadOfficer;
    this.offline.saveStep(2, this.model);
  }
}
