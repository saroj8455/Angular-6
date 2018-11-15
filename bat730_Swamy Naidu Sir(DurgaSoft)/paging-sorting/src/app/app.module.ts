import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from "ngx-pagination"
import { AppComponent } from './app.component';
import {OrderModule} from "ngx-order-pipe"
import {Ng2SearchPipeModule} from "ng2-search-filter"
import {FormsModule} from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,BrowserModule,Ng2SearchPipeModule,NgxPaginationModule,OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
