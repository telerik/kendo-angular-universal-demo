import { NgModule } from '@angular/core';
import { PDFExportComponent } from './pdf-export.component';
import { PDFMarginComponent } from './pdf-margin.component';
import { PDFTemplateDirective } from './pdf-template.directive';
var COMPONENT_DIRECTIVES = [
    PDFExportComponent,
    PDFMarginComponent,
    PDFTemplateDirective
];
/**
 * Represents the [NgModule](https://angular.io/guide/ngmodule) definition for the PDF Export directive.
 */
var PDFExportModule = (function () {
    function PDFExportModule() {
    }
    return PDFExportModule;
}());
export { PDFExportModule };
PDFExportModule.decorators = [
    { type: NgModule, args: [{
                declarations: [COMPONENT_DIRECTIVES],
                exports: [COMPONENT_DIRECTIVES]
            },] },
];
/** @nocollapse */
PDFExportModule.ctorParameters = function () { return []; };
