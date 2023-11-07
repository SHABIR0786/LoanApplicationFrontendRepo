import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  post(serviceName: string, data: any = {}, isAuth = true) {
    return this.httpClient.post(environment.apiUrl + serviceName, data);
  }

  put(serviceName: string, data) {
    const options = {
      headers: new HttpHeaders({ "Content-Type": "image/jpeg" }),
    };
    return this.httpClient.put(serviceName, data, options);
  }
  get(serviceName: string, data: any, isAuth = true) {
    return this.httpClient.get(environment.apiUrl + serviceName, data);
  }
  delete(serviceName: string, isAuth = true) {
    const accessToken = JSON.parse(localStorage.getItem("clientData"));
    const options = {
      headers: new HttpHeaders({ "x-access-token": accessToken.token }),
    };
    return this.httpClient.delete(environment.apiUrl + serviceName, options);
  }

  getWithHeader(serviceName: string, data: any, isAuth = true) {
    const options = { observe: "response" as "response" };
    return this.httpClient.get(environment.apiUrl + serviceName, options);
  }

  getDataFromExternalLink(serviceName: string) {
    return this.httpClient.get(serviceName);
  }
}
