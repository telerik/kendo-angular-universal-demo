import { TemplateRef } from '@angular/core';
/**
 * Represents the pager template which helps to customize the pager appearance in the Kendo UI Grid.
 *
 * To define a pager template, nest a `<ng-template>` tag with the `kendoPagerTemplate` directive inside `<kendo-grid>`.
 *
 * The template context provides the following fields:
 * - `pageSize`&mdash;The value of the current `pageSize`.
 * - `currentPage`&mdash;The index of the displayed page.
 * - `skip`&mdash;The current skip value.
 * - `total`&mdash;The total number of records.
 * - `totalPages`&mdash;The total number of available pages.
 *
 * @example
 * ```ts-preview
 *
 * _@Component({
 *     selector: 'my-app',
 *     template: `
 *      <kendo-grid
 *        [kendoGridBinding]="gridData"
 *        [pageSize]="1"
 *        [pageable]="true"
 *      >
 *       <kendo-grid-column field="ProductID" title="ID" width="40">
 *       </kendo-grid-column>
 *       <kendo-grid-column field="ProductName" title="Name" width="250">
 *       </kendo-grid-column>
 *       <kendo-grid-column field="UnitPrice" title="Price" width="80" format="{0:c}">
 *       </kendo-grid-column>
 *
 *       <ng-template kendoPagerTemplate let-totalPages="totalPages" let-currentPage="currentPage">
 *          <kendo-pager-prev-buttons></kendo-pager-prev-buttons>
 *          <kendo-pager-numeric-buttons [buttonCount]="10"></kendo-pager-numeric-buttons>
 *          <kendo-pager-next-buttons></kendo-pager-next-buttons>
 *          <kendo-pager-info></kendo-pager-info>
 *       </ng-template>
 *
 *    </kendo-grid>
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
export declare class PagerTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
