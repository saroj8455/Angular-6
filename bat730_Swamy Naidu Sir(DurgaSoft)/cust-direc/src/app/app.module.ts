import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Direct1Directive } from './direct1.directive';
import { Dire2Directive } from './dire2.directive';
import { Comp2Component } from './comp2/comp2.component';
import { D3Directive } from './d3.directive';

@NgModule({
  declarations: [
    AppComponent,
    Direct1Directive,
    Dire2Directive,
    Comp2Component,
    D3Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,Comp2Component]
})
export class AppModule { }
