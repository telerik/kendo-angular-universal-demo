import { NgModule } from '@angular/core';
import { DatePickerComponent } from './datepicker.component';
import { CommonModule } from '@angular/common';
import { IntlModule } from '@progress/kendo-angular-intl';
import { PopupModule } from '@progress/kendo-angular-popup';
import { CalendarModule } from '../calendar/calendar.module';
import { TemplatesModule } from '../calendar/templates.module';
import { DateInputModule } from '../dateinput/dateinput.module';
import { LocalizedMessagesDirective } from './localization/localized-messages.directive';
import { DatePickerCustomMessagesComponent } from './localization/datepicker-custom-messages.component';
var COMPONENT_DIRECTIVES = [
    DatePickerComponent,
    DatePickerCustomMessagesComponent,
    LocalizedMessagesDirective
];
var COMPONENT_MODULES = [
    DateInputModule,
    CalendarModule,
    IntlModule,
    PopupModule,
    TemplatesModule
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
export { DatePickerModule };
DatePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [COMPONENT_DIRECTIVES],
                exports: [COMPONENT_DIRECTIVES, TemplatesModule],
                imports: [CommonModule].concat(COMPONENT_MODULES)
            },] },
];
/** @nocollapse */
DatePickerModule.ctorParameters = function () { return []; };
