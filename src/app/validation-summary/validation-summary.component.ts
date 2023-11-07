import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "validation-summary",
  templateUrl: "./validation-summary.component.html",
  styleUrls: ["./validation-summary.component.css"],
})
export class ValidationSummaryComponent implements OnInit {
  @Input() control: AbstractControl;

  constructor() {}

  ngOnInit(): void {}
}
