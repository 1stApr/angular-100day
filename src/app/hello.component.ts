import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Angular {{ name }}!</h1>
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
  @Input() name: number;

  ngOnInit() {
    console.log("Hello Init");
  }
  ngOnDestroy() {
    console.log("Hello Destroy");
  }
}
