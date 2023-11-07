import { Component, Input } from "@angular/core";

@Component({
  selector: "app-summary-expand-data",
  templateUrl: "./summary-expand-data.component.html",
  styleUrls: ["./summary-expand-data.component.css"],
})
export class SummaryExpandDataComponent {
  @Input() heading: string;
  @Input() data: string;
}
