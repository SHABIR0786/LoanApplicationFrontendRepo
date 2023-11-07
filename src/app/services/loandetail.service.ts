import { Injectable } from "@angular/core";
import { HttpService } from "../../../src/shared/http/http.service";
import { ApiRoute } from "../../../src/shared/constant/api-route";
@Injectable({
  providedIn: "root",
})
export class LoandetailService {
  constructor(private httpService: HttpService) {}
  getLoanSummary(data: any) {
    return this.httpService.get(ApiRoute.loanSummary, data);
  }
}
