import { Input, Directive } from "@angular/core";
import { GrandparentComponentBase } from "../../module2/grandparent/grandparent.component";
import { InstanceClass1 } from "./instant-class";

@Directive()
export abstract class ParentComponentBase extends GrandparentComponentBase<
  InstanceClass1
> {
  @Input() foo: number;
}
