import { NgModule } from '@angular/core';
import { ComboBoxComponent } from './combobox.component';
import { SharedModule } from './shared.module';
import { SharedDirectivesModule } from './shared-directives.module';
var COMBOBOX_DIRECTIVES = [
    ComboBoxComponent
];
/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `ComboBoxComponent`&mdash;The ComboBox component class.
 * - `ItemTemplateDirective`&mdash;The item template directive.
 * - `HeaderTemplateDirective`&mdash;The header template directive.
 * - `FooterTemplateDirective`&mdash;The footer template directive.
 */
var ComboBoxModule = (function () {
    function ComboBoxModule() {
    }
    return ComboBoxModule;
}());
export { ComboBoxModule };
ComboBoxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [COMBOBOX_DIRECTIVES],
                exports: [COMBOBOX_DIRECTIVES, SharedDirectivesModule],
                imports: [SharedModule]
            },] },
];
/** @nocollapse */
ComboBoxModule.ctorParameters = function () { return []; };
