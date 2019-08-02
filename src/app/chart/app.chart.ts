import { Component, ViewChild, Input } from "@angular/core";

import { Chart } from "angular-highcharts";

@Component({
  selector: "appChart",
  templateUrl: "./app.chart.html",
  styleUrls: ["./app.chart.css"]
})
export class AppChart {
  @Input() source: any;
  chart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Linechart"
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Line 1",
        data: source.data
      }
    ]
  });
}
