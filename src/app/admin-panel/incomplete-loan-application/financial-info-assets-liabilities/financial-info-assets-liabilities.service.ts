import { BaseService } from "../../../services/base.service";
import { HttpClient } from "@angular/common/http";
import { ApiRoute } from "../../../../shared/constant/api-route";
import { Injectable } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";

@Injectable({
  providedIn: "root",
})
export class FinancialInfoAssetsLiabilitiesService extends BaseService {
  constructor(private httpService: HttpClient) {
    super(httpService, AppConsts.remoteServiceBaseUrl);
  }
  getAssetTypes() {
    return this.get(ApiRoute.getAssetTypes, null);
  }
  getCreditTypes() {
    return this.get(ApiRoute.getCreditTypes, null);
  }
  getFinancialLaibilitiesTypes() {
    return this.get(ApiRoute.getFinancialLaibilitiesTypes, null);
  }
  getFinancialOtherLaibilitiesTypes() {
    return this.get(ApiRoute.getFinancialOtherLaibilitiesTypes, null);
  }
  getFinancialAccountTypes() {
    return this.get(ApiRoute.getFinancialAccountTypes, null);
  }
  getAllFinancialInfoAssetsLiabilities(data) {
    return this.get(ApiRoute.getMortgageApplicationAssetandLiability, {
      Sorting: "",
      SkipCount: 0,
      MaxResultCount: 10,
    });
  }
  createFinancialInfoAssetsLiabilities(data) {
    return this.post(ApiRoute.createMortgageApplicationAssetandLiability, data);
  }
}
