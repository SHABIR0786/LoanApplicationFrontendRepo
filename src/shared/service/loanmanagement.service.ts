import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { ApiRoute } from "../constant/api-route";
@Injectable({
  providedIn: "root",
})
export class LoanManagementService {
  constructor(private httpService: HttpService) {}

  UploadDocument(data: any) {
    return this.httpService.post(ApiRoute.documentupload, data);
  }
  getallAdminDisclouser(data: any) {
    return this.httpService.get(ApiRoute.adminDisclouser, data);
  }
  getLoanApplicationList(keyword: any, SkipCount: any) {
    return this.httpService.get(ApiRoute.loanApplication, keyword, SkipCount);
  }
  getCurrentLoginInformations(data: any) {
    return this.httpService.get(ApiRoute.GetCurrentLoginInformations, data);
  }
}
