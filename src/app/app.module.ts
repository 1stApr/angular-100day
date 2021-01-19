import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group.component';
import { StackBarComponent } from './stack-bar/stack-bar.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StackBarChartComponent } from './stack-bar-chart/stack-bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { StackBarDirective } from './stack-bar.directive';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,TabGroupComponent,TabPanelComponent,TabBsGroupComponent, StackBarComponent, BarChartComponent, StackBarChartComponent, PieChartComponent, StackBarDirective, LineChartComponent, TabBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
