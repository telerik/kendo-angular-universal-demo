"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_template_directive_1 = require("./templates/item-template.directive");
var header_template_directive_1 = require("./templates/header-template.directive");
var footer_template_directive_1 = require("./templates/footer-template.directive");
var no_data_template_directive_1 = require("./templates/no-data-template.directive");
var SHARED_DIRECTIVES = [
    header_template_directive_1.HeaderTemplateDirective,
    footer_template_directive_1.FooterTemplateDirective,
    item_template_directive_1.ItemTemplateDirective,
    no_data_template_directive_1.NoDataTemplateDirective
];
/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `ItemTemplateDirective`&mdash;The item template directive.
 * - `HeaderTemplateDirective`&mdash;The header template directive.
 * - `FooterTemplateDirective`&mdash;The footer template directive.
 * - `NoDataTemplateDirective`&mdash;The noData template directive.
 */
var SharedDirectivesModule = (function () {
    function SharedDirectivesModule() {
    }
    return SharedDirectivesModule;
}());
SharedDirectivesModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [SHARED_DIRECTIVES],
                exports: [SHARED_DIRECTIVES]
            },] },
];
/** @nocollapse */
SharedDirectivesModule.ctorParameters = function () { return []; };
exports.SharedDirectivesModule = SharedDirectivesModule;
