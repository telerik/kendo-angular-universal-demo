"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var column_common_1 = require("../../columns/column-common");
/**
 * @hidden
 */
var ColGroupComponent = (function () {
    function ColGroupComponent() {
        this.columns = [];
        this.groups = [];
    }
    Object.defineProperty(ColGroupComponent.prototype, "columnsToRender", {
        get: function () {
            return column_common_1.columnsToRender(this.columns);
        },
        enumerable: true,
        configurable: true
    });
    return ColGroupComponent;
}());
ColGroupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: '[kendoGridColGroup]',
                template: "\n    <ng-template [ngIf]=\"true\">\n        <col [class.k-group-col]=\"true\" *ngFor=\"let g of groups\" />\n        <col [class.k-hierarchy-col]=\"true\" *ngIf=\"detailTemplate?.templateRef\"/>\n        <col *ngFor=\"let column of columnsToRender\" [style.width.px]=\"column.width\"/>\n    </ng-template>\n    "
            },] },
];
/** @nocollapse */
ColGroupComponent.ctorParameters = function () { return []; };
ColGroupComponent.propDecorators = {
    'columns': [{ type: core_1.Input },],
    'groups': [{ type: core_1.Input },],
    'detailTemplate': [{ type: core_1.Input },],
};
exports.ColGroupComponent = ColGroupComponent;
