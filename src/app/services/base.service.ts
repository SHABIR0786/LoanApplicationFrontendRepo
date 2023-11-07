import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { AppConsts } from "../../shared/AppConsts";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  token = abp.auth.getToken();
  cookieLangValue = abp.utils.getCookieValue("Abp.Localization.CultureName");

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Abp.TenantId": `${abp.multiTenancy.getTenantIdCookie()}`,
    ".AspNetCore.Culture": `c=${this.cookieLangValue}|uic=${this.cookieLangValue}`,
    Accept: "application/json",
  });

  constructor(private http: HttpClient, private baseRoute: string) {}

  get<T>(route = "", queryParams = {}, headers = {}): Observable<T> {
    headers = Object.assign(this.headers, headers);
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    const url = this.urlGenerator(route);
    return this.http.get<T>(url, {
      headers: headers,
      params: queryParams,
      withCredentials: true,
    });
  }

  getImage(route: string): Observable<Blob> {
    const url = this.urlGenerator(route);
    return this.http.get(url, { responseType: "blob" });
  }

  getFile(route: string, responseType): Observable<any> {
    const url = this.urlGenerator(route);
    return this.http.get(url, { responseType });
  }

  getFilePost(route: string, payload, responseType): Observable<any> {
    const url = this.urlGenerator(route);
    return this.http.post(url, payload, { responseType });
  }

  post<T>(
    route = "",
    payload,
    queryParams = {},
    headers = {},
    responseType?
  ): Observable<T> {
    headers = Object.assign(this.headers, headers);
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    const url = this.urlGenerator(route);
    return this.http.post<T>(url, payload, {
      headers: headers,
      params: queryParams,
      responseType: responseType || "json",
    });
  }

  upload<T>(route = "", payload, responseType?): Observable<T> {
    const url = this.urlGenerator(route);

    const headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "application/json");

    return this.http.post<T>(url, payload, {
      headers: headers,
      responseType: responseType || "json",
    });
  }

  put<T>(route = "", payload, queryParams = {}, headers = {}): Observable<T> {
    headers = Object.assign(this.headers, headers);
    const url = this.urlGenerator(route);
    return this.http.put<T>(url, payload, {
      headers: headers,
      params: queryParams,
    });
  }

  delete<T>(route = "", queryParams = {}, headers = {}): Observable<T> {
    headers = Object.assign(this.headers, headers);
    const url = this.urlGenerator(route);
    return this.http.delete<T>(url, { headers: headers, params: queryParams });
  }

  private urlGenerator(route: string): string {
    const baseURL =  ``;
    const baseRoute=`https://74.208.32.89/loan-backend/api`;
    return [baseURL, baseRoute, route].filter((obj) => obj).join("/");
  }
}
