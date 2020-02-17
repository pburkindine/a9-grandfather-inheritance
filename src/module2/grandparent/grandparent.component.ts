import { Directive, Input } from "@angular/core";
import { BaseClass } from "../base-class";

@Directive()
export abstract class GrandparentComponentBase<T extends BaseClass> {
  @Input() foo: number;
}
