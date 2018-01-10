import { NgModule } from '@angular/core';
import { DateInputComponent } from './dateinput.component';
import { CommonModule } from '@angular/common';
import { IntlModule } from '@progress/kendo-angular-intl';
import { LocalizedMessagesDirective } from './localization/localized-messages.directive';
import { DateInputCustomMessagesComponent } from './localization/dateinput-custom-messages.component';
var COMPONENT_DIRECTIVES = [
    DateInputComponent,
    DateInputCustomMessagesComponent,
    LocalizedMessagesDirective
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
export { DateInputModule };
DateInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [COMPONENT_DIRECTIVES],
                exports: [COMPONENT_DIRECTIVES],
                imports: [CommonModule, IntlModule]
            },] },
];
/** @nocollapse */
DateInputModule.ctorParameters = function () { return []; };
