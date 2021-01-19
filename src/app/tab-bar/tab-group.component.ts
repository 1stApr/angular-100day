import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TabPanelComponent } from "./tab-panel.component";

@Component({
  selector: "tab-group",
  templateUrl: "./tab-group.component.html",
  styles: [``]
})
export class TabGroupComponent {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();
  addTab(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
  }
}
