import { BaseService } from "../../../services/base.service";
import { HttpClient } from "@angular/common/http";
import { AppConsts } from "@shared/AppConsts";
import { ApiRoute } from "../../../../shared/constant/api-route";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MilitaryServicesService extends BaseService {
  constructor(private httpService: HttpClient) {
    super(httpService, AppConsts.remoteServiceBaseUrl);
  }
  createMilitaryService(data) {
    return this.post(ApiRoute.createMilitaryService, data);
  }
}
