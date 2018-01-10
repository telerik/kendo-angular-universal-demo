"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var autocomplete_component_1 = require("./autocomplete.component");
var shared_module_1 = require("./shared.module");
var shared_directives_module_1 = require("./shared-directives.module");
var AUTOCOMPLETE_DIRECTIVES = [
    autocomplete_component_1.AutoCompleteComponent
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
AutoCompleteModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [AUTOCOMPLETE_DIRECTIVES],
                exports: [AUTOCOMPLETE_DIRECTIVES, shared_directives_module_1.SharedDirectivesModule],
                imports: [shared_module_1.SharedModule]
            },] },
];
/** @nocollapse */
AutoCompleteModule.ctorParameters = function () { return []; };
exports.AutoCompleteModule = AutoCompleteModule;
