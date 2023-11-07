import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { ApiRoute } from "../constant/api-route";

@Injectable({
  providedIn: "root",
})
export class AdminUserServices {
  constructor(private httpService: HttpService) {}

  getAdminDetailsbyId(data: any) {
    return this.httpService.get(ApiRoute.adminUserDetailsById, data);
  }

  updateAdminUserName(data: any) {
    return this.httpService.put(ApiRoute.updateAdminUserName + "" + data, null);
  }

  updateAdminEmail(data: any) {
    return this.httpService.put(
      ApiRoute.updateAdminEmailAddress + "" + data,
      null
    );
  }
  updateChangePassword(data: any) {
    return this.httpService.put(
      ApiRoute.updateChangePassword + "" + data,
      null
    );
  }
}
