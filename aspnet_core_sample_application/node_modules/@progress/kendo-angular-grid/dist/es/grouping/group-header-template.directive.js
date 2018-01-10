import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the group header cell template of the Grid which helps to customize the content of the group header item.
 *
 * To define the group header template, nest a `<ng-template>` tag with
 * the `kendoGridGroupHeaderTemplate` directive inside `<kendo-grid-column>`.
 *
 * The template context is set to the current data item and the following additional fields are passed:
 * - `group`&mdash;The current group item.
 * - `field`&mdash;The name of the field by which data is grouped.
 * - `value`&mdash;The current group value.
 * - `aggregates`&mdash;All aggregate values for the current group.
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
 *                 <ng-template kendoGridGroupHeaderTemplate let-group let-field="field" let-value="value">
 *                    <strong>{{field}}</strong>: {{value}}
 *                 </ng-template>
 *             </kendo-grid-column>
 *         </kendo-grid>
 *     `
 * })
 *
 * class AppComponent {
 *     public groups = [{ field: "ProductName" }];
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
 *
 * ```
 */
var GroupHeaderTemplateDirective = (function () {
    function GroupHeaderTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return GroupHeaderTemplateDirective;
}());
export { GroupHeaderTemplateDirective };
GroupHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoGridGroupHeaderTemplate]'
            },] },
];
/** @nocollapse */
GroupHeaderTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef, decorators: [{ type: Optional },] },
]; };
