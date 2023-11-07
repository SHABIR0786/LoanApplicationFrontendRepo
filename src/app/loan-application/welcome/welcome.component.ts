import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { LoanApplicationService } from "../../services/loan-application.service";
import { Result } from "common";
import { Router } from "@angular/router";
import { ILoanApplicationModel } from "../../interfaces/ILoanApplicationModel";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private _dataService: DataService,
    private _route: Router,
    private _loanApplicationService: LoanApplicationService
  ) {}

  ngOnInit(): void {}
  submitForm() {
    const formData = this.sanitizeFormData(this._dataService.loanApplication);
    this._loanApplicationService
      .post<Result<ILoanApplicationModel>>("Add", formData)
      .subscribe(
        (response: any) => {
          this._dataService.loanApplication = response.result;
          this._route.navigate(["app/loan-detail"], {
            queryParams: {
              id: parseInt(response.result.id),
            },
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  sanitizeFormData(formData) {
    formData = Object.assign({}, formData);
    for (const key in formData) {
      if (key && formData.hasOwnProperty(key) && formData[key]) {
        if (
          typeof formData[key] === "object" &&
          Object.keys(formData[key]).length === 0
        ) {
          formData[key] = undefined;
        }
      }
    }
    return formData;
  }
}
