import { Component, OnInit } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";

@Component({
  selector: "app-tab-bar",
  templateUrl: "./tab-bar.component.html",
  styleUrls: ["./tab-bar.component.css"],
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBarComponent
    }
  ]
})
export class TabBarComponent extends TabGroupComponent {}
