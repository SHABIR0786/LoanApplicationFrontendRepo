import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AddFinanceApiModel, PostModel } from "@app/modules/models/post.model";
import { ApiService } from "@app/services/api.service";
import { OfflineService } from "@app/services/offline.service";

@Component({
  selector: "app-credit-score",
  templateUrl: "./credit-score.component.html",
  styleUrls: ["./credit-score.component.css"],
})
export class CreditScoreComponent implements OnInit {
  submitted = false;
  number: number = 1;
  model: PostModel = new PostModel();
  apiModel: AddFinanceApiModel = new AddFinanceApiModel();

  constructor(
    private router: Router,
    private offline: OfflineService,
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((x) => {
      if (x.number) {
        this.number = x.number;
      } else {
        router.navigate(["1"]);
      }
    });
  }

  ngOnInit(): void {}

  onAgreeClick() {
    if (this.model.govAgree1 && this.model.govAgree2 && this.model.govAgree3) {
      this.submitted = false;

      this.saveStep();
      this.router.navigate(["/app/purchase/credit-score/2"]);
    } else {
      this.submitted = true;
    }
  }
  saveStep() {
    this.offline.saveStep(8, this.model);
  }

  onFinalNext(f, step) {
    this.submitted = true;
    if (f.valid) {
      this.saveStep();
      const final = this.apiModel.map(this.model);
      this.submitted = false;
      this.api
        .put("LeadPurchasingDetailService/Update", final)
        .subscribe((d: any) => {
          if (d.success === true) {
            // Clear offline
            localStorage.removeItem('offline');
            localStorage.removeItem('leadApplicationDetailPurchasingId');
            localStorage.localStorage('step');
            // alert("Done");
          } else {
            alert("Oops");
            console.clear();
            console.log({ d });
          }
        });
      this.router.navigate(["/app/purchase/credit-score/" + step]);
    }
  }

  formatSSN(value) {
    if (!value) return value;
    const ssn = value.replace(/[^\d]/g, "");
    const ssnLength = ssn.length;

    if (ssnLength < 4) return ssn;

    if (ssnLength < 6) {
      return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
    }

    return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 9)}`;
  }

  inputSSN(e: any) {
    const inputField = document.getElementById("ssn");
    const formattedInputValue = this.formatSSN(e.target.value);
    e.target.value = formattedInputValue;
  }
}
