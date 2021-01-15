import {
  Component,
  VERSION,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  QueryList,
  ViewChildren
} from "@angular/core";
import { ToggleComponent } from "./toggle.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChildren(ToggleComponent) toggleComp: QueryList<ToggleComponent>;
  @ViewChild("nameInput", { static: true, read: ElementRef })
  nameInput: ElementRef<HTMLButtonElement>;

  name1 = "AngularTest " + VERSION.major;
  isChecked = true;
  showLast = true;
  ngOnInit() {
    console.log(this.nameInput);
    // this.nameInput.nativeElement.focus();
  }
  ngAfterViewInit() {
    this.toggleComp.changes.subscribe(console.log);
  }
}
