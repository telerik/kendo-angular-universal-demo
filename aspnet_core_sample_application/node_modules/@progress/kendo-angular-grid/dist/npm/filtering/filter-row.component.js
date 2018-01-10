"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
FilterRowComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: '[kendoGridFilterRow]',
                template: "\n      <th\n         [class.k-group-cell]=\"true\"\n         *ngFor=\"let g of groups\">\n      </th>\n      <th\n         [class.k-hierarchy-cell]=\"true\"\n         *ngIf=\"detailTemplate?.templateRef\">\n      </th>\n      <th *ngFor=\"let column of columns;\" kendoGridFilterCell [column]=\"column\" [filter]=\"filter\"></th>\n    "
            },] },
];
/** @nocollapse */
FilterRowComponent.ctorParameters = function () { return []; };
FilterRowComponent.propDecorators = {
    'columns': [{ type: core_1.Input },],
    'filter': [{ type: core_1.Input },],
    'groups': [{ type: core_1.Input },],
    'detailTemplate': [{ type: core_1.Input },],
    'filterRowClass': [{ type: core_1.HostBinding, args: ['class.k-filter-row',] },],
};
exports.FilterRowComponent = FilterRowComponent;
