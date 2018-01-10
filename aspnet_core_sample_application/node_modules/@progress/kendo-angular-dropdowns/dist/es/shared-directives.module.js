import { NgModule } from '@angular/core';
import { ItemTemplateDirective } from './templates/item-template.directive';
import { HeaderTemplateDirective } from './templates/header-template.directive';
import { FooterTemplateDirective } from './templates/footer-template.directive';
import { NoDataTemplateDirective } from './templates/no-data-template.directive';
var SHARED_DIRECTIVES = [
    HeaderTemplateDirective,
    FooterTemplateDirective,
    ItemTemplateDirective,
    NoDataTemplateDirective
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
export { SharedDirectivesModule };
SharedDirectivesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SHARED_DIRECTIVES],
                exports: [SHARED_DIRECTIVES]
            },] },
];
/** @nocollapse */
SharedDirectivesModule.ctorParameters = function () { return []; };
