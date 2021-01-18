import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.css"]
})
export class ToggleComponent implements OnInit {
  @Input() header: string;
  @Input() question: string;
  @Input() content: string;
  @Input() checked = true;

  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
