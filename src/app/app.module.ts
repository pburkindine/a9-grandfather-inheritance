import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from './parent/parent.component';
import { GrandparentComponent } from './grandparent/grandparent.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, ParentComponent, GrandparentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
