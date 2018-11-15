import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

var obj=[{
  path:"",component:ContactusComponent
},{
  path:"abt",component:AboutusComponent
},
{
  path:"cnt",component:ContactusComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(obj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
