import { TemplateRef } from '@angular/core';
/**
 * Represents the column group footer cell template of the Grid which helps to customize the group footer cell for the column.
 *
 * To define the group footer template, nest a `<ng-template>` tag with
 * the `kendoGridGroupFooterTemplate` directive inside `<kendo-grid-column>`.
 *
 * The template context is set to the current aggregates and the following additional fields are passed:
 * - `column`&mdash;Defines an instance of the `ColumnComponent` option.
 * - `field`&mdash;The current column field name.
 * - `group`&mdash;The current group data item.
 *
 * @example
 * ```ts-preview
 * import { process } from '@progress/kendo-data-query';
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *         <kendo-grid [data]="gridData" [group]="groups">
 *             <kendo-grid-column field="ProductName">
 *                 <ng-template kendoGridGroupFooterTemplate let-aggregates let-field="field">
 *                    Count: {{aggregates[field].count}}
 *                 </ng-template>
 *             </kendo-grid-column>
 *         </kendo-grid>
 *     `
 * })
 *
 * class AppComponent {
 *     public groups = [{ field: "ProductName", aggregates: [{ field: "ProductName", aggregate: "count" }] }];
 *
 *     public gridData = process([{
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
 *     ], {
 *      group: this.groups
 *     });
 * }
 * ```
 */
export declare class GroupFooterTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
