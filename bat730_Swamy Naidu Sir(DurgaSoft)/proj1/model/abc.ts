import{ Component, NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({
    selector:"s1",
    templateUrl:"views/p1.html"
})
class cls1{
    sno:number=100
    fun1(){
        var sno:number=1233
        alert(this.sno)
        alert(sno)
    }
}

@Component({selector:"s2",templateUrl:"views/p2.html"})
class cls2 extends cls1{}

@NgModule({
    declarations:[cls1,cls2],imports:[BrowserModule],
    bootstrap:[cls1]
})
class clsmod{}
platformBrowserDynamic().bootstrapModule(clsmod)
