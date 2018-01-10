"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pdf_component_1 = require("./pdf.component");
var pdf_margin_component_1 = require("./pdf-margin.component");
var pdf_command_directive_1 = require("./pdf-command.directive");
var pdf_template_directive_1 = require("./pdf-template.directive");
var exportedModules = [
    pdf_component_1.PDFComponent,
    pdf_margin_component_1.PDFMarginComponent,
    pdf_command_directive_1.PDFCommandDirective,
    pdf_template_directive_1.PDFTemplateDirective
];
var declarations = [
    pdf_component_1.PDFComponent,
    pdf_margin_component_1.PDFMarginComponent,
    pdf_command_directive_1.PDFCommandDirective,
    pdf_template_directive_1.PDFTemplateDirective
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the Grid PDF component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Grid and PDF modules
 * import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, GridModule, PDFModule], // import Grid and PDF modules
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
var PDFModule = (function () {
    function PDFModule() {
    }
    return PDFModule;
}());
PDFModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [declarations],
                exports: [exportedModules]
            },] },
];
/** @nocollapse */
PDFModule.ctorParameters = function () { return []; };
exports.PDFModule = PDFModule;
