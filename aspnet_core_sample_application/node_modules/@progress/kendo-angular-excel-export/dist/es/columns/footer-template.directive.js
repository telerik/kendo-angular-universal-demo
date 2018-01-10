import { Directive, TemplateRef, Optional } from '@angular/core';
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
export { FooterTemplateDirective };
FooterTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoExcelExportFooterTemplate]'
            },] },
];
/** @nocollapse */
FooterTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef, decorators: [{ type: Optional },] },
]; };
