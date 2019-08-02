import { Component, ViewChild } from "@angular/core";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "my-app",
  templateUrl: "./app.main.html",
  styleUrls: ["./app.main.css"]
})
export class AppMain {
  charts = [
    { key: 1, value: "chart1", data: [1, 2, 3] },
    { key: 2, value: "chart2", data: [-1, 3, 7] },
    { key: 3, value: "chart3", data: [1, 2, 3] },
    { key: 4, value: "chart2", data: [1, 2, 3] }
  ];
}
