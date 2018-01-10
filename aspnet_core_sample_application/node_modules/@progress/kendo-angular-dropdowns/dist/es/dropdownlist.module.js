import { NgModule } from '@angular/core';
import { DropDownListComponent } from './dropdownlist.component';
import { ValueTemplateDirective } from './templates/value-template.directive';
import { SharedModule } from './shared.module';
import { SharedDirectivesModule } from './shared-directives.module';
var DROPDOWNLIST_DIRECTIVES = [
    DropDownListComponent,
    ValueTemplateDirective
];
/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `DropDownListComponent`&mdash;The DropDownList component class.
 * - `ItemTemplateDirective`&mdash;The item template directive.
 * - `ValueTemplateDirective`&mdash;The value template directive.
 * - `HeaderTemplateDirective`&mdash;The header template directive.
 * - `FooterTemplateDirective`&mdash;The footer template directive.
 */
var DropDownListModule = (function () {
    function DropDownListModule() {
    }
    return DropDownListModule;
}());
export { DropDownListModule };
DropDownListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DROPDOWNLIST_DIRECTIVES],
                exports: [DROPDOWNLIST_DIRECTIVES, SharedDirectivesModule],
                imports: [SharedModule]
            },] },
];
/** @nocollapse */
DropDownListModule.ctorParameters = function () { return []; };
