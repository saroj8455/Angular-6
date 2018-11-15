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
var clsfooter = /** @class */ (function () {
    function clsfooter() {
    }
    clsfooter = __decorate([
        core_1.Component({
            selector: "footersel",
            templateUrl: "views/footer.html"
        })
    ], clsfooter);
    return clsfooter;
}());
var clsmain = /** @class */ (function () {
    function clsmain() {
    }
    clsmain = __decorate([
        core_1.Component({
            selector: "mainsel",
            templateUrl: "views/main.html"
        })
    ], clsmain);
    return clsmain;
}());
var clsheader = /** @class */ (function () {
    function clsheader() {
    }
    clsheader = __decorate([
        core_1.Component({
            selector: "headersel",
            templateUrl: "views/header.html"
        })
    ], clsheader);
    return clsheader;
}());
var clscontent = /** @class */ (function () {
    function clscontent() {
    }
    clscontent = __decorate([
        core_1.Component({
            selector: "contentsel",
            templateUrl: "views/content.html"
        })
    ], clscontent);
    return clscontent;
}());
var clsleft = /** @class */ (function () {
    function clsleft() {
    }
    clsleft = __decorate([
        core_1.Component({
            selector: "leftsel",
            templateUrl: "views/left.html"
        })
    ], clsleft);
    return clsleft;
}());
var clsright = /** @class */ (function () {
    function clsright() {
    }
    clsright = __decorate([
        core_1.Component({
            selector: "rightsel",
            templateUrl: "views/right.html"
        })
    ], clsright);
    return clsright;
}());
var clsmod = /** @class */ (function () {
    function clsmod() {
    }
    clsmod = __decorate([
        core_1.NgModule({
            declarations: [clscontent, clsfooter, clsheader, clsleft, clsmain, clsright],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [clsmain]
        })
    ], clsmod);
    return clsmod;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(clsmod);
