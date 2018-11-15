import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { C2Component } from './c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    C2Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,C2Component]
})
export class AppModule { }
