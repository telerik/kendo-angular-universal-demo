"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Represents the column cell template of the Grid.
 * It helps to customize the content of the cells.
 *
 * To define the cell template, nest a `<ng-template>` tag with the `kendoGridCellTemplate` directive inside
 * a `<kendo-grid-column>` tag.
 *
 * The template context is set to the current data item and the following additional fields are passed:
 * - `columnIndex`&mdash;The current column index.
 * - `rowIndex`&mdash;The current row index.
 * - `dataItem`&mdash;The current data item.
 * - `column`&mdash;The current column instance.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *         <kendo-grid [data]="gridData">
 *             <kendo-grid-column field="ProductName">
 *                 <ng-template kendoGridCellTemplate let-dataItem let-rowIndex="rowIndex">
 *                     Row: {{rowIndex}} /
 *                     <strong>{{dataItem.ProductName}}</strong>
 *                     ({{dataItem.Discontinued ? "discontinued" : "active"}})
 *                 </ng-template>
 *             </kendo-grid-column>
 *         </kendo-grid>
 *     `
 * })
 *
 * class AppComponent {
 *     public gridData = [{
 *         "ProductID": 1,
 *         "ProductName": "Chai",
 *         "UnitPrice": 18.0000,
 *         "Discontinued": false
 *       }, {
 *         "ProductID": 2,
 *         "ProductName": "Chang",
 *         "UnitPrice": 19.0000,
 *         "Discontinued": true
 *       }
 *     ];
 * }
 *
 * ```
 */
var CellTemplateDirective = (function () {
    function CellTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return CellTemplateDirective;
}());
CellTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoGridCellTemplate]'
            },] },
];
/** @nocollapse */
CellTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
]; };
exports.CellTemplateDirective = CellTemplateDirective;
