import { BaseService } from "../../../services/base.service";
import { HttpClient } from "@angular/common/http";
import { ApiRoute } from "../../../../shared/constant/api-route";
import { Injectable } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";

@Injectable({
  providedIn: "root",
})
export class DeclarationsService extends BaseService {
  constructor(private httpService: HttpClient) {
    super(httpService, AppConsts.remoteServiceBaseUrl);
  }
  create(data: any) {
    return this.post(ApiRoute.createDeclarations, data);
  }
}
