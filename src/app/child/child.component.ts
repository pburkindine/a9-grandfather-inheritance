import { Component, OnInit } from "@angular/core";
import { ParentComponentBase } from "../parent/parent.component";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent extends ParentComponentBase {

}
