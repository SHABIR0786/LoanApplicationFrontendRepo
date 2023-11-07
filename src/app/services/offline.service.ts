import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { FormArray, FormGroup } from "@angular/forms";
import { ILoanApplicationModel } from "../interfaces/ILoanApplicationModel";
import { Router } from "@angular/router";
const ROUTE_DATA = [
  "/purchase/welcome/1",
  "/purchase/property-info/1",
  "/purchase/property-info/1",
  "/purchase/income-info/1",
  "/purchase/assets-info/1",
  "/purchase/gov/1",
  "/app/purchase/gov/5",
];
@Injectable()
export class OfflineService {
  constructor(private router: Router) {}
  saveStep(step, data) {
    localStorage.setItem("offline", JSON.stringify(data));
    localStorage.setItem("step", step);
  }
  moveTo() {
    const stepData = this.getStep();
    this.router.navigate([ROUTE_DATA[stepData.step - 1]]);
  }
  clear() {
    localStorage.setItem("offline", "{}");
    localStorage.setItem("step", "");
  }
  getStep() {
    let num: number = 1;
    try {
      num = parseInt(localStorage.getItem("step"));
    } catch (error) {
      num = 1;
    }
    return {
      step: num,
      data: localStorage.getItem("offline")
        ? JSON.parse(localStorage.getItem("offline"))
        : {},
    };
  }
}
