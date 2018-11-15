import {Component,NgModule,OnInit,DoCheck} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"
@Component({
    selector:"s1",
    templateUrl:"views/p1.html"
})
class cls1 implements OnInit,DoCheck{
    sno=100
    ngOnInit(){
        console.log("Comp init...")
    }
    ngDoCheck(){
        console.log("Data Updating...")
    }
    ngAfterViewChecked(){
        console.log("Data updated......")
    }
    ngOnDestroy(){
        console.log("Destroyed")
    }
}

@NgModule({
    declarations:[cls1],
    imports:[BrowserModule,FormsModule],
    bootstrap:[cls1]
})
class clsmodule{}

platformBrowserDynamic().bootstrapModule(clsmodule)


