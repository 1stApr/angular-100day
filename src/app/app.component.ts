import { Component, VERSION } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "AngularTest " + VERSION.major;
  nameVersion = "Angular " + VERSION.major;
  counter = 1;
  show = false;

  user = {
    name: 11,
    age: 22
  };


  handlerClick() {
    console.log("Clicked!", event);
  }
}
