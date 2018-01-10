import { Component, Input } from '@angular/core';
import { columnsToRender } from '../../columns/column-common';
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
            return columnsToRender(this.columns);
        },
        enumerable: true,
        configurable: true
    });
    return ColGroupComponent;
}());
export { ColGroupComponent };
ColGroupComponent.decorators = [
    { type: Component, args: [{
                selector: '[kendoGridColGroup]',
                template: "\n    <ng-template [ngIf]=\"true\">\n        <col [class.k-group-col]=\"true\" *ngFor=\"let g of groups\" />\n        <col [class.k-hierarchy-col]=\"true\" *ngIf=\"detailTemplate?.templateRef\"/>\n        <col *ngFor=\"let column of columnsToRender\" [style.width.px]=\"column.width\"/>\n    </ng-template>\n    "
            },] },
];
/** @nocollapse */
ColGroupComponent.ctorParameters = function () { return []; };
ColGroupComponent.propDecorators = {
    'columns': [{ type: Input },],
    'groups': [{ type: Input },],
    'detailTemplate': [{ type: Input },],
};
