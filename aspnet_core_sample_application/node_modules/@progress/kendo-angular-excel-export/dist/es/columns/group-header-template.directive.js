import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the group header cell template of the ExcelExport column component.
 *
 * It helps to customize the content of the group header item.
 */
var GroupHeaderTemplateDirective = (function () {
    function GroupHeaderTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return GroupHeaderTemplateDirective;
}());
export { GroupHeaderTemplateDirective };
GroupHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoExcelExportGroupHeaderTemplate]'
            },] },
];
/** @nocollapse */
GroupHeaderTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef, decorators: [{ type: Optional },] },
]; };
