"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var combobox_component_1 = require("./combobox.component");
var shared_module_1 = require("./shared.module");
var shared_directives_module_1 = require("./shared-directives.module");
var COMBOBOX_DIRECTIVES = [
    combobox_component_1.ComboBoxComponent
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
ComboBoxModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [COMBOBOX_DIRECTIVES],
                exports: [COMBOBOX_DIRECTIVES, shared_directives_module_1.SharedDirectivesModule],
                imports: [shared_module_1.SharedModule]
            },] },
];
/** @nocollapse */
ComboBoxModule.ctorParameters = function () { return []; };
exports.ComboBoxModule = ComboBoxModule;
