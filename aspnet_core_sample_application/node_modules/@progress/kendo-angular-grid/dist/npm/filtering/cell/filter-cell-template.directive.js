"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Represents the filter-cell template.
 */
var FilterCellTemplateDirective = (function () {
    function FilterCellTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return FilterCellTemplateDirective;
}());
FilterCellTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoGridFilterCellTemplate]'
            },] },
];
/** @nocollapse */
FilterCellTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
]; };
exports.FilterCellTemplateDirective = FilterCellTemplateDirective;
