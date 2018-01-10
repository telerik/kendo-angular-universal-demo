"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var groups_service_1 = require("./groups.service");
var group_info_service_1 = require("./group-info.service");
var column_common_1 = require("../columns/column-common");
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
        var columnCount = column_common_1.columnsSpan(this.columns);
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
GroupHeaderComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: '[kendoGridGroupHeader]',
                template: "\n        <ng-template [ngIf]=\"!skipGroupDecoration\">\n            <td [class.k-group-cell]=\"true\" *ngFor=\"let g of prefixGroupCell(item)\"></td>\n        </ng-template>\n        <td [attr.colspan]=\"groupSpan(item)\">\n            <p class=\"k-reset\">\n                <ng-template [ngIf]=\"!skipGroupDecoration\">\n                    <a href=\"#\" tabindex=\"-1\" (click)=\"toggleGroup(item)\"\n                        [ngClass]=\"groupButtonStyles(item.index)\">\n                    </a>\n                    <ng-template [ngIf]=\"!groupHeaderTemplate(item)\">\n                    {{groupTitle(item)}}: {{item.data | valueOf:\"value\": formatForGroup(item)}}\n                    </ng-template>\n                    <ng-template\n                        [templateContext]=\"{\n                            templateRef: groupHeaderTemplate(item),\n                            group: item.data,\n                            aggregates: item.data?.aggregates,\n                            value: item.data?.value,\n                            field: item.data?.field,\n                            $implicit: item.data\n                            }\">\n                    </ng-template>\n                </ng-template>\n            </p>\n        </td>\n    "
            },] },
];
/** @nocollapse */
GroupHeaderComponent.ctorParameters = function () { return [
    { type: groups_service_1.GroupsService, },
    { type: group_info_service_1.GroupInfoService, },
]; };
GroupHeaderComponent.propDecorators = {
    'item': [{ type: core_1.Input },],
    'skipGroupDecoration': [{ type: core_1.Input },],
    'hasDetails': [{ type: core_1.Input },],
    'columns': [{ type: core_1.Input },],
    'groups': [{ type: core_1.Input },],
    'groupItemClass': [{ type: core_1.HostBinding, args: ['class.k-grouping-row',] },],
};
exports.GroupHeaderComponent = GroupHeaderComponent;
