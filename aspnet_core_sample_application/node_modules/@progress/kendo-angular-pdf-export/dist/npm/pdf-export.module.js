"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pdf_export_component_1 = require("./pdf-export.component");
var pdf_margin_component_1 = require("./pdf-margin.component");
var pdf_template_directive_1 = require("./pdf-template.directive");
var COMPONENT_DIRECTIVES = [
    pdf_export_component_1.PDFExportComponent,
    pdf_margin_component_1.PDFMarginComponent,
    pdf_template_directive_1.PDFTemplateDirective
];
/**
 * Represents the [NgModule](https://angular.io/guide/ngmodule) definition for the PDF Export directive.
 */
var PDFExportModule = (function () {
    function PDFExportModule() {
    }
    return PDFExportModule;
}());
PDFExportModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [COMPONENT_DIRECTIVES],
                exports: [COMPONENT_DIRECTIVES]
            },] },
];
/** @nocollapse */
PDFExportModule.ctorParameters = function () { return []; };
exports.PDFExportModule = PDFExportModule;
