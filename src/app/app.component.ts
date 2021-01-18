import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name1 = "Angular " + VERSION.major;
  isChecked = true;
  questions = {
    question1: true,
    question2: false
  };
}
