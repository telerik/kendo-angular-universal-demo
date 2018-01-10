import { Component, Input, HostBinding } from '@angular/core';
import { GroupsService } from './groups.service';
import { GroupInfoService } from './group-info.service';
import { columnsSpan } from "../columns/column-common";
/**
 * @hidden
 */
var GroupHeaderComponent = (function () {
    function GroupHeaderComponent(groupsService, groupInfoService) {
        this.groupsService = groupsService;
        this.groupInfoService = groupInfoService;
        this.skipGroupDecoration = false;
        this.hasDetails = false;
        this.columns = [];
        this.groups = [];
    }
    Object.defineProperty(GroupHeaderComponent.prototype, "groupItemClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    GroupHeaderComponent.prototype.prefixGroupCell = function (item) {
        return new Array(item.level);
    };
    GroupHeaderComponent.prototype.toggleGroup = function (item) {
        this.groupsService.toggleRow(item.index, item.data);
        return false;
    };
    GroupHeaderComponent.prototype.groupSpan = function (item) {
        var columnCount = columnsSpan(this.columns);
        if (this.skipGroupDecoration) {
            return columnCount;
        }
        var groupCount = (this.groups || []).length;
        if (this.hasDetails) {
            columnCount++;
        }
        return groupCount + columnCount - item.level;
    };
    GroupHeaderComponent.prototype.groupButtonStyles = function (groupIndex) {
        var expanded = this.groupsService.isExpanded(groupIndex);
        return { 'k-i-collapse': expanded, 'k-i-expand': !expanded, 'k-icon': true };
    };
    GroupHeaderComponent.prototype.formatForGroup = function (item) {
        return this.groupInfoService.formatForGroup(item);
    };
    GroupHeaderComponent.prototype.groupTitle = function (item) {
        return this.groupInfoService.groupTitle(item);
    };
    GroupHeaderComponent.prototype.groupHeaderTemplate = function (item) {
        return this.groupInfoService.groupHeaderTemplate(item);
    };
    return GroupHeaderComponent;
}());
export { GroupHeaderComponent };
GroupHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: '[kendoGridGroupHeader]',
                template: "\n        <ng-template [ngIf]=\"!skipGroupDecoration\">\n            <td [class.k-group-cell]=\"true\" *ngFor=\"let g of prefixGroupCell(item)\"></td>\n        </ng-template>\n        <td [attr.colspan]=\"groupSpan(item)\">\n            <p class=\"k-reset\">\n                <ng-template [ngIf]=\"!skipGroupDecoration\">\n                    <a href=\"#\" tabindex=\"-1\" (click)=\"toggleGroup(item)\"\n                        [ngClass]=\"groupButtonStyles(item.index)\">\n                    </a>\n                    <ng-template [ngIf]=\"!groupHeaderTemplate(item)\">\n                    {{groupTitle(item)}}: {{item.data | valueOf:\"value\": formatForGroup(item)}}\n                    </ng-template>\n                    <ng-template\n                        [templateContext]=\"{\n                            templateRef: groupHeaderTemplate(item),\n                            group: item.data,\n                            aggregates: item.data?.aggregates,\n                            value: item.data?.value,\n                            field: item.data?.field,\n                            $implicit: item.data\n                            }\">\n                    </ng-template>\n                </ng-template>\n            </p>\n        </td>\n    "
            },] },
];
/** @nocollapse */
GroupHeaderComponent.ctorParameters = function () { return [
    { type: GroupsService, },
    { type: GroupInfoService, },
]; };
GroupHeaderComponent.propDecorators = {
    'item': [{ type: Input },],
    'skipGroupDecoration': [{ type: Input },],
    'hasDetails': [{ type: Input },],
    'columns': [{ type: Input },],
    'groups': [{ type: Input },],
    'groupItemClass': [{ type: HostBinding, args: ['class.k-grouping-row',] },],
};
