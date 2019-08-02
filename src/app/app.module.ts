import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppMaterialModules } from "./material.module";
import { ChartModule } from "angular-highcharts";

import { AppMain } from "./main/app.main";
import { AppTopMenu } from "./topMenu/app.topMenu";
import { AppHeader } from "./mainHeader/app.mainHeader";
import { AppChart } from "./chart/app.chart";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModules,
    ChartModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppMain, AppTopMenu, AppHeader, AppChart],
  bootstrap: [AppMain]
})
export class AppModule {}
