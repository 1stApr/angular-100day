import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { StackBarChartComponent } from "./stack-bar-chart/stack-bar-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";

import { TabPanelComponent } from "./tab-bar/tab-panel.component";
import { TabGroupComponent } from "./tab-bar/tab-group.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BarChartComponent,
    StackBarChartComponent,
    PieChartComponent,
    LineChartComponent,

    TabPanelComponent,
    TabGroupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
