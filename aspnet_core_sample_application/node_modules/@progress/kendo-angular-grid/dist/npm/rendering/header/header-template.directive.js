"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Represents the column header cell template of the Grid.
 * It helps to customize the table header cell for the column.
 *
 * To define a header template, nest a `<ng-template>` tag with the `kendoGridHeaderTemplate` directive inside `<kendo-grid-column>`.
 * The template context is set to the current column and the following additional fields are passed:
 * - `column`&mdash;Defines an instance of the `ColumnComponent` option.
 * - `columnIndex`&mdash;Defines the current column index.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *         <kendo-grid [data]="gridData">
 *             <kendo-grid-column field="ProductName">
 *                 <ng-template kendoGridHeaderTemplate let-column let-columnIndex="columnIndex">
 *                   {{column.field}}({{columnIndex}})
 *                 </ng-template>
 *             </kendo-grid-column>
 *              <kendo-grid-column field="UnitPrice">
 *                 <ng-template kendoGridHeaderTemplate let-column let-columnIndex="columnIndex">
 *                   {{column.field}}({{columnIndex}})
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
var HeaderTemplateDirective = (function () {
    function HeaderTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return HeaderTemplateDirective;
}());
HeaderTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoGridHeaderTemplate]'
            },] },
];
/** @nocollapse */
HeaderTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
]; };
exports.HeaderTemplateDirective = HeaderTemplateDirective;
