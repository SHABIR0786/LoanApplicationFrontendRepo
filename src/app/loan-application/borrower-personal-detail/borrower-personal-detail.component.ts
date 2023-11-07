import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IBorrowerModel } from "../../interfaces/IBorrowerModel";

@Component({
  selector: "app-borrower-personal-detail",
  templateUrl: "./borrower-personal-detail.component.html",
  styleUrls: ["./borrower-personal-detail.component.css"],
})
export class BorrowerPersonalDetailComponent implements OnInit, DoCheck {
  id = Math.random().toString(36).substring(2);
  @Input() heading: string;
  @Input() form: FormGroup;
  @Input() data: IBorrowerModel = {};
  @Output() onDataChange: EventEmitter<any> = new EventEmitter<any>();

  maritalStatuses = [];
  suffixes = [];

  constructor() {}

  ngOnInit(): void {
    this.loadMaritalStatuses();
    this.loadSuffixes();
  }

  ngDoCheck() {
    this.data = this.form.value;
    this.onDataChange.next(this.form.value);
  }

  loadMaritalStatuses() {
    this.maritalStatuses = [
      {
        id: 1,
        name: "Married",
      },
      {
        id: 2,
        name: "Unmarried (single, divorced, widowed)",
      },
      {
        id: 3,
        name: "Separated",
      },
    ];
  }

  loadSuffixes() {
    this.suffixes = [
      {
        id: "Jr.",
        name: "Jr.",
      },
      {
        id: "Sr.",
        name: "Sr.",
      },
      {
        id: "II",
        name: "II",
      },
      {
        id: "III",
        name: "III",
      },
      {
        id: "IV",
        name: "IV",
      },
      {
        id: "V",
        name: "V",
      },
      {
        id: "VI",
        name: "VI",
      },
    ];
  }
}
