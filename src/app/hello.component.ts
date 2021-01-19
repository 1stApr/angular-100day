import { Component, Input } from "@angular/core";

@Component({
  selector: "hello2",
  template: `
    <h1>{{ name200 }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name200: string;
}
