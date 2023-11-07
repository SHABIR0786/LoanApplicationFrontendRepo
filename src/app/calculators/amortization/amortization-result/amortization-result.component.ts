import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  ViewChild,
} from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-amortization-result",
  templateUrl: "./amortization-result.component.html",
  styleUrls: ["./amortization-result.component.css"],
})
export class AmortizationResultComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit(): void {}
  canvas: any;
  ctx: any;
  @ViewChild("mychart") mychart: any;
  @Input() data: any;
  ngAfterViewInit() {
    // this.canvas = this.mychart.nativeElement;
    // this.ctx = this.canvas.getContext("2d");
    // new Chart(this.ctx, {
    //   type: "line",
    //   data: {
    //     datasets: [
    //       {
    //         label: "Interesst",
    //         data: this.data.computedInterestDue,
    //         backgroundColor: "rgb(115 185 243 / 65%)",
    //         borderColor: "#007ee7",
    //         fill: true,
    //       },
    //       {
    //         label: "Payment",
    //         data: this.data.principalDue,
    //         backgroundColor: "#47a0e8",
    //         borderColor: "#007ee7",
    //         fill: true,
    //       }
    //     ],
    //     labels: Array.from({length: 30}, (v, k) => k+2023),
    //   },
    // });
  }
  showChart() {
    if (this.mychart?.nativeElement) {
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext("2d");
      new Chart(this.ctx, {
        type: "line",
        data: {
          datasets: [
            {
              label: "Interest",
              data: this.data.computedInterestDue,
              backgroundColor: "#f9ee63",
              borderColor: "#f9ee63",
              fill: true,
            },
            {
              label: "Payment",
              data: this.data.principalDue,
              backgroundColor: "#caecf9",
              borderColor: "#caecf9",
              fill: true,
            },
            {
              label: "balance",
              data: this.data.principlebalance,
              backgroundColor: "#b5121b",
              borderColor: "#b5121b",
              fill: true,
            },
          ],
          labels: Array.from(
            { length: 360 },
            (v, k) => k + new Date().getFullYear()
          ),
        },
      });
    }
  }
  ngOnChanges(changes) {
    const instance = this;
    setTimeout(function () {
      instance.showChart();
    }, 2000);
  }
}
