import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  view: string = "recipes";

  toggleView(view: string) {
    this.view = view;
  }
}
