"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var date_pipe_1 = require("./date.pipe");
var number_pipe_1 = require("./number.pipe");
var intl_service_1 = require("./intl.service");
var cldr_intl_service_1 = require("./cldr-intl.service");
var pipes = [
    date_pipe_1.DatePipe,
    number_pipe_1.NumberPipe
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the Intl services.
 */
var IntlModule = (function () {
    function IntlModule() {
    }
    return IntlModule;
}());
IntlModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [pipes],
                exports: [pipes],
                providers: [
                    { provide: intl_service_1.IntlService, useClass: cldr_intl_service_1.CldrIntlService }
                ]
            },] },
];
/** @nocollapse */
IntlModule.ctorParameters = function () { return []; };
exports.IntlModule = IntlModule;
