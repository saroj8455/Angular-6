import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {clslogin} from "./login"
import {clsreg} from "./reg"
@NgModule({
    declarations:[clslogin,clsreg],
    imports:[BrowserModule],
    bootstrap:[clslogin,clsreg]
})
class clsmodule{}

platformBrowserDynamic().bootstrapModule(clsmodule)
