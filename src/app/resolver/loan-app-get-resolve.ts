import { LoanApplicationService } from "./../services/loan-application.service";
import { Result } from "./../../common";
import { ILoanApplicationModel } from "./../interfaces/ILoanApplicationModel";
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "@app/services/data.service";

@Injectable()
export class GetLoanAppResolve
  implements Resolve<Result<ILoanApplicationModel>> {
  constructor(
    private _loanApplicationService: LoanApplicationService,
    private _dataService: DataService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Result<ILoanApplicationModel>> | Result<ILoanApplicationModel> {
    const id = route.queryParams["id"];
    if (id) {
      return this._loanApplicationService.get<Result<ILoanApplicationModel>>(
        `Get?id=${id}`
      );
    }

    const result: Result<ILoanApplicationModel> = {
      result: this._dataService.loanApplication,
      success: true,
      targetUrl: "",
      unAuthorizedRequest: true,
      urror: "",
    };
    return result;
  }
}
