"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
GroupHeaderTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoExcelExportGroupHeaderTemplate]'
            },] },
];
/** @nocollapse */
GroupHeaderTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
]; };
exports.GroupHeaderTemplateDirective = GroupHeaderTemplateDirective;
