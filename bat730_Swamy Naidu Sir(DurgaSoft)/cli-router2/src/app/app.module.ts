import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule} from "@angular/forms"
import {cls1} from "./newfile"
var ob=[{
  path:"log",component:LoginComponent
},{
  path:"welc",component:WelcomeComponent
}]
var robj=RouterModule.forRoot(ob)
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,robj,FormsModule
  ],
  providers: [cls1],
  bootstrap: [AppComponent]
})
export class AppModule { }
