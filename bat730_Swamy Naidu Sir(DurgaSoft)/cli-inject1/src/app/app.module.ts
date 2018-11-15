import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import {class1} from "./cls";
import {class2} from "./cls2"
import { Comp2Component } from './comp2/comp2.component'
@NgModule({
  declarations: [
    AppComponent,
    Comp2Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [class1,class2],
  bootstrap: [AppComponent,Comp2Component]
})
export class AppModule { }
