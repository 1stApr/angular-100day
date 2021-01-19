import { Component, EventEmitter,  Input, Output } from "@angular/core";
import { TabPanelComponent } from "./tab-panel.component";



@Component({
  selector: 'tab-group',
  templateUrl: "./tab-group.component.html",
  styles:[`
    .tab-headers{
      display:flex;
      padding-bottom:0.5rem;
      border-bottom: 1px solid #000;
      margin-bottom:0.5rem;
    }
    .tab-header-item{
      margin-right: 0.5rem;
      padding: 5px 10px;
    }
    .tab-header-item.active{
      border: 1px solid red;
    }
  `]
})

export class TabGroupComponent{
  tabPanelList: TabPanelComponent[]=[];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();
  addTab(tab: TabPanelComponent){
    this.tabPanelList = [...this.tabPanelList,tab]
  }
  removeTab(tab: TabPanelComponent){
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp,index)=>{
      if(tp === tab){
        found = index;
        return false;
      }
      return true;
    });
    if(found === this.activeIndex){
      this.activeIndexChange.emit(found === this.tabPanelList.length ? found = 1:found);
    }
  }

}