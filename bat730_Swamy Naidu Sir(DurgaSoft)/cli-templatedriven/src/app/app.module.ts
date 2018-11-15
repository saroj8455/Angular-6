import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  id: any;
  userName: string;
  email: string;
  userRole: string;
  profileImage: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}
