import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
@Injectable()
export class ApiService {
  API_BASE = environment.baseApi;
  constructor(private http: HttpClient) {}
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.API_BASE}${url}`);
  }
  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.API_BASE}${url}`, data);
  }
  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.API_BASE}${url}`, data);
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.API_BASE}${url}`);
  }
}
