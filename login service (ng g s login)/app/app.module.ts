import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//step -2 import the service 
import {LoginserviceService} from './loginservice.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  //put in provider step-3
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
