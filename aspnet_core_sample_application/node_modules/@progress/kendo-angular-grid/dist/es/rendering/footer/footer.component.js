import { Component, Input, HostBinding } from '@angular/core';
import { columnsToRender } from '../../columns/column-common';
/**
 * @hidden
 */
var FooterComponent = (function () {
    function FooterComponent() {
        this.columns = [];
        this.groups = [];
        this.lockedColumnsCount = 0;
    }
    Object.defineProperty(FooterComponent.prototype, "footerClass", {
        get: function () {
            return !this.scrollable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FooterComponent.prototype, "columnsToRender", {
        get: function () {
            return columnsToRender(this.columns || []);
        },
        enumerable: true,
        configurable: true
    });
    return FooterComponent;
}());
export { FooterComponent };
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: '[kendoGridFooter]',
                template: "\n    <ng-template [ngIf]=\"true\">\n        <tr [class.k-footer-template]=\"true\">\n            <td\n                [class.k-group-cell]=\"true\"\n                *ngFor=\"let g of groups\">\n            </td>\n            <td\n                [class.k-hierarchy-cell]=\"true\"\n                *ngIf=\"detailTemplate?.templateRef\">\n            </td>\n            <td\n                [ngClass]=\"column.footerClass\"\n                [ngStyle]=\"column.footerStyle\"\n                *ngFor=\"let column of columnsToRender; let columnIndex = index\">\n                <ng-template\n                    [templateContext]=\"{\n                        templateRef: column.footerTemplateRef,\n                        columnIndex: lockedColumnsCount + columnIndex,\n                        column: column,\n                        $implicit: column\n                    }\">\n                </ng-template>\n            </td>\n        </tr>\n    </ng-template>\n    "
            },] },
];
/** @nocollapse */
FooterComponent.ctorParameters = function () { return []; };
FooterComponent.propDecorators = {
    'columns': [{ type: Input },],
    'groups': [{ type: Input },],
    'detailTemplate': [{ type: Input },],
    'scrollable': [{ type: Input },],
    'lockedColumnsCount': [{ type: Input },],
    'footerClass': [{ type: HostBinding, args: ['class.k-grid-footer',] },],
};
