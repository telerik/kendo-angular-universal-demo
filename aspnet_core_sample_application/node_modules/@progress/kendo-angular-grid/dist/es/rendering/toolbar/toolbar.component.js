import { Component, HostBinding } from '@angular/core';
import { GridComponent } from "../../grid.component";
/**
 * @hidden
 */
var ToolbarComponent = (function () {
    function ToolbarComponent(grid) {
        this.grid = grid;
    }
    Object.defineProperty(ToolbarComponent.prototype, "classNames", {
        get: function () {
            return 'k-header k-grid-toolbar';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarComponent.prototype, "toolbarTemplateRef", {
        get: function () {
            return this.grid.toolbarTemplate ? this.grid.toolbarTemplate.templateRef : undefined;
        },
        enumerable: true,
        configurable: true
    });
    return ToolbarComponent;
}());
export { ToolbarComponent };
ToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'kendo-grid-toolbar',
                template: "\n        <ng-template\n            *ngIf=\"toolbarTemplateRef\"\n            [ngTemplateOutlet]=\"toolbarTemplateRef\">\n        </ng-template>\n    "
            },] },
];
/** @nocollapse */
ToolbarComponent.ctorParameters = function () { return [
    { type: GridComponent, },
]; };
ToolbarComponent.propDecorators = {
    'classNames': [{ type: HostBinding, args: ['class',] },],
};
