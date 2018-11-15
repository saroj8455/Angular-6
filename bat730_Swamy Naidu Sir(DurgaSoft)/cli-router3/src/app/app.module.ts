import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

var obj=[{
  path:"prod",component:ProductComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(obj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
