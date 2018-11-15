import {Component,NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"

@Component({
    selector:"footersel",
    templateUrl:"views/footer.html"
})
class clsfooter{}

@Component({
    selector:"mainsel",
    templateUrl:"views/main.html"
})
class clsmain{}

@Component({
    selector:"headersel",
    templateUrl:"views/header.html"
})
class clsheader{}

@Component({
    selector:"contentsel",
    templateUrl:"views/content.html"
})
class clscontent{}

@Component({
    selector:"leftsel",
    templateUrl:"views/left.html"
})
class clsleft{}

@Component({
    selector:"rightsel",
    templateUrl:"views/right.html"
})
class clsright{}

@NgModule({
    declarations:[clscontent,clsfooter,clsheader,clsleft,clsmain,clsright],
    imports:[BrowserModule],
    bootstrap:[clsmain]
})
class clsmod{}

platformBrowserDynamic().bootstrapModule(clsmod)





