"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
GroupFooterTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoExcelExportGroupFooterTemplate]'
            },] },
];
/** @nocollapse */
GroupFooterTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
]; };
exports.GroupFooterTemplateDirective = GroupFooterTemplateDirective;
