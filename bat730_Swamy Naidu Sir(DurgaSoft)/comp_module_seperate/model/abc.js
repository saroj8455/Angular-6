"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var login_1 = require("./login");
var reg_1 = require("./reg");
var clsmodule = /** @class */ (function () {
    function clsmodule() {
    }
    clsmodule = __decorate([
        core_1.NgModule({
            declarations: [login_1.clslogin, reg_1.clsreg],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [login_1.clslogin, reg_1.clsreg]
        })
    ], clsmodule);
    return clsmodule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmodule);
