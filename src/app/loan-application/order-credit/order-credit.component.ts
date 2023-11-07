import { Component, DoCheck, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { LoanApplicationService } from "../../services/loan-application.service";
import { Result } from "common";
import { ILoanApplicationModel } from "@app/interfaces/ILoanApplicationModel";

@Component({
  selector: "app-order-credit",
  templateUrl: "./order-credit.component.html",
  styleUrls: ["./order-credit.component.css"],
})
export class OrderCreditComponent implements OnInit, DoCheck {
  data: any = {};

  constructor(
    private _dataService: DataService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute,
    private _loanApplicationService: LoanApplicationService
  ) {}

  ngDoCheck(): void {
    this._dataService.updateData(this.data, "orderCredit");
  }

  ngOnInit(): void {
    const response: Result<ILoanApplicationModel> = this._activatedRoute
      .snapshot.data.loanApp;

    if (response && response.success)
      this._dataService.loanApplication = response.result;
    if(this._dataService.loanApplication.orderCredit){
    this.data = this._dataService.loanApplication.orderCredit;
    }
    if(!this.data){
      this.data = {};
    }
  }

  prepareFormData(response) {
    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        response[key] = response[key] || {};
      }
    }
    return response;
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

  submitForm() {
    const formData = this.sanitizeFormData(this._dataService.loanApplication);

    this._loanApplicationService
      .post<Result<ILoanApplicationModel>>("Add", formData)
      .subscribe(
        (response) => {
          this._dataService.loanApplication = response.result;
          this.data = this._dataService.loanApplication.orderCredit;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  proceedToNext() {
    this.submitForm();
    // this._ngWizardService.next();

    this._activatedRoute.queryParams.subscribe(async (params) => {
      const id = params["id"];
      if (id) {
        this._route.navigate(["app/additional-detail"], {
          queryParams: {
            id: id,
          },
        });
      } else {
        this._route.navigate(["app/additional-detail"]);
      }
    });
  }

  proceedToPrevious() {
    this.submitForm();
    this._activatedRoute.queryParams.subscribe(async (params) => {
      const id = params["id"];
      if (id) {
        this._route.navigate(["app/employment-income"], {
          queryParams: {
            id: id,
          },
        });
      } else {
        this._route.navigate(["app/employment-income"]);
      }
    });
  }
}
