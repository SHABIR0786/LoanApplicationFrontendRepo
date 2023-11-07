import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { ApiRoute } from "../constant/api-route";

@Injectable({
  providedIn: "root",
})
export class LoanstatusService {
  constructor(private httpService: HttpService) {}

  getLoanStatusbyId(data: any) {
    return this.httpService.get(ApiRoute.loanstatus, data);
  }

  getLoanDetailsById(data: any) {
    return this.httpService.get(ApiRoute.loanDetailsById, data);
  }

  getLoanProgramDetailsById(data: any) {
    return this.httpService.get(ApiRoute.loanProgramDetails, data);
  }
}
