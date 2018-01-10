import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the column group footer cell template of the ExcelExport column component.
 *
 * It helps to customize the group footer cell for the column.
 */
var GroupFooterTemplateDirective = (function () {
    function GroupFooterTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return GroupFooterTemplateDirective;
}());
export { GroupFooterTemplateDirective };
GroupFooterTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoExcelExportGroupFooterTemplate]'
            },] },
];
/** @nocollapse */
GroupFooterTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef, decorators: [{ type: Optional },] },
]; };
