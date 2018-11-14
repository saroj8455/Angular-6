import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import RouterModule,Routes class from @angular/router
import {RouterModule,Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmpComponent } from './emp/emp.component';
import { DeptComponent } from './dept/dept.component';
import { ContactComponent } from './contact/contact.component';
import { MoreComponent } from './more/more.component';

//configure the routes path step-1
const appRoutes:Routes=[
  //insert as object
  {path:"",component:HomeComponent},
  {path:"dept",component:DeptComponent},
  {path:"emp",component:EmpComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"more/:id",component:MoreComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmpComponent,
    DeptComponent,
    ContactComponent,
    MoreComponent
  ],
  //register the configuration variable : appRoutes
  //here forRoot is a method of RouterModule class  //step-2
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
