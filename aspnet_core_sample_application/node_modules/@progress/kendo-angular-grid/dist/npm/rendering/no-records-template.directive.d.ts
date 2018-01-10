import { TemplateRef } from '@angular/core';
/**
 * Represents the no-records template of the Grid.
 * Provides a way to customize the appearance of the item that is displayed when no data is present.
 *
 * To define the no-record template, nest a `<ng-template>` tag with the `kendoGridNoRecordsTemplate` directive inside `<kendo-grid>`.
 *
 * > When the locked columns of the Grid are in use, the template is displayed in the non-locked part of the content.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *   selector: 'my-app',
 *   template: `
 *       <kendo-grid [data]="data">
 *         <kendo-grid-column field="ProductID"></kendo-grid-column>
 *         <kendo-grid-column field="ProductName"></kendo-grid-column>
 *         <kendo-grid-column field="UnitPrice"></kendo-grid-column>
 *         <ng-template kendoGridNoRecordsTemplate>
 *            There are not products. <a href="#" (click)="refresh()">Click here to refresh</a>.
 *         </ng-template>
 *       </kendo-grid>
 *   `
 * })
 *
 * class AppComponent {
 *     public data = [];
 *     public refresh() {
 *       this.data = [{
 *            "ProductID": 1,
 *            "ProductName": "Chai",
 *            "UnitPrice": 18.0000,
 *            "Discontinued": false,
 *            "Category": {
 *                "CategoryID": 1,
 *                "CategoryName": "Beverages",
 *                "Description": "Soft drinks, coffees, teas, beers, and ales"
 *            }
 *          }, {
 *            "ProductID": 2,
 *            "ProductName": "Chang",
 *            "UnitPrice": 19.0000,
 *            "Discontinued": false,
 *            "Category": {
 *                "CategoryID": 1,
 *                "CategoryName": "Beverages",
 *                "Description": "Soft drinks, coffees, teas, beers, and ales"
 *            }
 *          }, {
 *            "ProductID": 3,
 *            "ProductName": "Aniseed Syrup",
 *            "UnitPrice": 10.0000,
 *            "Discontinued": false,
 *            "Category": {
 *                "CategoryID": 2,
 *                "CategoryName": "Condiments",
 *                "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
 *            }
 *        }];
 *
 *     }
 * }
 *
 * ```
 */
export declare class NoRecordsTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
