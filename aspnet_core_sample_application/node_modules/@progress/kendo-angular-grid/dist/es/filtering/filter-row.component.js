import { Component, Input, HostBinding } from '@angular/core';
/**
 * @hidden
 */
var FilterRowComponent = (function () {
    function FilterRowComponent() {
        this.columns = [];
        this.groups = [];
        this.filterRowClass = true;
    }
    return FilterRowComponent;
}());
export { FilterRowComponent };
FilterRowComponent.decorators = [
    { type: Component, args: [{
                selector: '[kendoGridFilterRow]',
                template: "\n      <th\n         [class.k-group-cell]=\"true\"\n         *ngFor=\"let g of groups\">\n      </th>\n      <th\n         [class.k-hierarchy-cell]=\"true\"\n         *ngIf=\"detailTemplate?.templateRef\">\n      </th>\n      <th *ngFor=\"let column of columns;\" kendoGridFilterCell [column]=\"column\" [filter]=\"filter\"></th>\n    "
            },] },
];
/** @nocollapse */
FilterRowComponent.ctorParameters = function () { return []; };
FilterRowComponent.propDecorators = {
    'columns': [{ type: Input },],
    'filter': [{ type: Input },],
    'groups': [{ type: Input },],
    'detailTemplate': [{ type: Input },],
    'filterRowClass': [{ type: HostBinding, args: ['class.k-filter-row',] },],
};
