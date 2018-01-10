import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './autocomplete.component';
import { SharedModule } from './shared.module';
import { SharedDirectivesModule } from './shared-directives.module';
var AUTOCOMPLETE_DIRECTIVES = [
    AutoCompleteComponent
];
/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `AutoCompleteComponent`&mdash;The AutoComplete component class.
 * - `ItemTemplateDirective`&mdash;The item template directive.
 * - `HeaderTemplateDirective`&mdash;The header template directive.
 * - `FooterTemplateDirective`&mdash;The footer template directive.
 */
var AutoCompleteModule = (function () {
    function AutoCompleteModule() {
    }
    return AutoCompleteModule;
}());
export { AutoCompleteModule };
AutoCompleteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AUTOCOMPLETE_DIRECTIVES],
                exports: [AUTOCOMPLETE_DIRECTIVES, SharedDirectivesModule],
                imports: [SharedModule]
            },] },
];
/** @nocollapse */
AutoCompleteModule.ctorParameters = function () { return []; };
