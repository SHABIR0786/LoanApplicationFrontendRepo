import { BaseService } from "../../../services/base.service";
import { HttpClient } from "@angular/common/http";
import { ApiRoute } from "../../../../shared/constant/api-route";
import { Injectable } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";

@Injectable({
  providedIn: "root",
})
export class LoanPropertyInfoService extends BaseService {
  constructor(private httpService: HttpClient) {
    super(httpService, AppConsts.remoteServiceBaseUrl);
  }
  getCountries() {
    return this.get(ApiRoute.getCountry, null);
  }
  getStates() {
    return this.get(ApiRoute.getStates, null);
  }
  getCities() {
    return this.get(ApiRoute.getCities, null);
  }
  getLoanPropertyGiftTypes() {
    return this.get(ApiRoute.getLoanPropertyGiftTypes, null);
  }
  create(data: any) {
    return this.post(ApiRoute.createFinancialInfo, data);
  }
}
