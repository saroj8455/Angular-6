import {Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule} from "@angular/forms"
@Component({
selector:"s1",
templateUrl:"views/p1.html"
})
class cls1{
t1;t2:string;
funlogin(){
if(this.t1=="scott" && this.t2=="scott123")
{
alert("Valid")
}
else
{
alert("Invalid")
}
}
}

@NgModule({
declarations:[cls1],
imports:[BrowserModule,FormsModule],
bootstrap:[cls1]
})
class clsmod{

}

platformBrowserDynamic().bootstrapModule(clsmod)


