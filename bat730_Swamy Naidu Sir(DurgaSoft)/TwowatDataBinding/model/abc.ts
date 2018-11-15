import {Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"

@Component({
templateUrl:"views/p1.html",
selector:"s1"
})
class clscomp{
sno:number=1234
}

@NgModule({
declarations:[clscomp],
imports:[BrowserModule,FormsModule],
bootstrap:[clscomp]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)





