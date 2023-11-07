import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RefinancePost } from "@app/modules/models/post.model";
import { OfflineService } from "@app/services/offline.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  number: number = 1;
  isEdit = false;
  model: RefinancePost = new RefinancePost();
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offline: OfflineService
  ) {
    // this.offline.clear();
    this.route.params.subscribe((x) => {
      if (x.number) {
        this.number = x.number;
      } else {
        this.router.navigate(["1"]);
      }
    });
  }
  onMorOpt(obj: boolean) {
    this.model.isWorkingWithEzalready = obj == true ? 1 : 0;
    this.saveStep();
    //this.model.objectiveReason
  }
  onReason(obj: string) {
    this.model.objectiveReason = obj;
    this.saveStep();
  }
  ngOnInit() {
    this.model = this.offline.getStep().data;
    console.log(this.model);
  }

  saveStep() {
    this.offline.saveStep(1, this.model);
  }

  nextClicked(f, step) {
    this.submitted = true;
    console.log(f);
    if (f.valid) {
      this.router.navigate(["/app/refinance/welcome/", step]);
      this.submitted = false;

      // this.saveStep();
    }
  }
}
