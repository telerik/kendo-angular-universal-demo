"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Represents the column footer cell template of the Kendo ExcelExport column component.
 *
 * It helps to customize the footer cell for the column.
 */
var FooterTemplateDirective = (function () {
    function FooterTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return FooterTemplateDirective;
}());
FooterTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoExcelExportFooterTemplate]'
            },] },
];
/** @nocollapse */
FooterTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
]; };
exports.FooterTemplateDirective = FooterTemplateDirective;
