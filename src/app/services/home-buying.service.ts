import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HomeBuyingService extends BaseService {
  constructor(http: HttpClient) {
    super(http, "services/app/HomeBuyingService");
  }
}
