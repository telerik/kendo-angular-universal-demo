"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var datepicker_component_1 = require("./datepicker.component");
var common_1 = require("@angular/common");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var calendar_module_1 = require("../calendar/calendar.module");
var templates_module_1 = require("../calendar/templates.module");
var dateinput_module_1 = require("../dateinput/dateinput.module");
var localized_messages_directive_1 = require("./localization/localized-messages.directive");
var datepicker_custom_messages_component_1 = require("./localization/datepicker-custom-messages.component");
var COMPONENT_DIRECTIVES = [
    datepicker_component_1.DatePickerComponent,
    datepicker_custom_messages_component_1.DatePickerCustomMessagesComponent,
    localized_messages_directive_1.LocalizedMessagesDirective
];
var COMPONENT_MODULES = [
    dateinput_module_1.DateInputModule,
    calendar_module_1.CalendarModule,
    kendo_angular_intl_1.IntlModule,
    kendo_angular_popup_1.PopupModule,
    templates_module_1.TemplatesModule
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the DatePicker component.
 */
var DatePickerModule = (function () {
    function DatePickerModule() {
    }
    return DatePickerModule;
}());
DatePickerModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [COMPONENT_DIRECTIVES],
                exports: [COMPONENT_DIRECTIVES, templates_module_1.TemplatesModule],
                imports: [common_1.CommonModule].concat(COMPONENT_MODULES)
            },] },
];
/** @nocollapse */
DatePickerModule.ctorParameters = function () { return []; };
exports.DatePickerModule = DatePickerModule;
