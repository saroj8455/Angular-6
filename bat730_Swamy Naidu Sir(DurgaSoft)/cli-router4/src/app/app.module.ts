import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http"
import { AppComponent } from './app.component';
import { DisplaymoreComponent } from './displaymore/displaymore.component';
import {RouterModule} from "@angular/router";
import { DispallComponent } from './dispall/dispall.component'
var obj=[{
  path:"disp",component:DisplaymoreComponent
},{
  path:"",component:DispallComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    DisplaymoreComponent,
    DispallComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(obj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
