"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dateinput_component_1 = require("./dateinput.component");
var common_1 = require("@angular/common");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var localized_messages_directive_1 = require("./localization/localized-messages.directive");
var dateinput_custom_messages_component_1 = require("./localization/dateinput-custom-messages.component");
var COMPONENT_DIRECTIVES = [
    dateinput_component_1.DateInputComponent,
    dateinput_custom_messages_component_1.DateInputCustomMessagesComponent,
    localized_messages_directive_1.LocalizedMessagesDirective
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the DateInput component.
 */
var DateInputModule = (function () {
    function DateInputModule() {
    }
    return DateInputModule;
}());
DateInputModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [COMPONENT_DIRECTIVES],
                exports: [COMPONENT_DIRECTIVES],
                imports: [common_1.CommonModule, kendo_angular_intl_1.IntlModule]
            },] },
];
/** @nocollapse */
DateInputModule.ctorParameters = function () { return []; };
exports.DateInputModule = DateInputModule;
