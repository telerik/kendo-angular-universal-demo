import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the filter-cell template.
 */
var FilterCellTemplateDirective = (function () {
    function FilterCellTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return FilterCellTemplateDirective;
}());
export { FilterCellTemplateDirective };
FilterCellTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoGridFilterCellTemplate]'
            },] },
];
/** @nocollapse */
FilterCellTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef, decorators: [{ type: Optional },] },
]; };
