import { Injectable } from "@angular/core";
import { HttpService } from "../../shared/http/http.service";
import { ApiRoute } from "../../shared/constant/api-route";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private httpService: HttpService) {}
  getAllNotification(data) {
    return this.httpService.get(ApiRoute.adminnotification, data);
  }
}
