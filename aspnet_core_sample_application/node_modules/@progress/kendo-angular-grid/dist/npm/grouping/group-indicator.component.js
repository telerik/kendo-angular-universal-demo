"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var group_info_service_1 = require("./group-info.service");
/**
 * @hidden
 */
var GroupIndicatorComponent = (function () {
    function GroupIndicatorComponent(groupInfoService) {
        this.groupInfoService = groupInfoService;
        this.directionChange = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
    }
    Object.defineProperty(GroupIndicatorComponent.prototype, "groupIndicatorClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupIndicatorComponent.prototype, "title", {
        get: function () {
            return this.groupInfoService.groupTitle(this.group);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupIndicatorComponent.prototype, "dir", {
        get: function () {
            return this.group.dir ? this.group.dir : "asc";
        },
        enumerable: true,
        configurable: true
    });
    GroupIndicatorComponent.prototype.toggleDirection = function () {
        this.directionChange.emit({
            dir: this.dir === "asc" ? "desc" : "asc",
            field: this.group.field
        });
        return false;
    };
    GroupIndicatorComponent.prototype.removeDescriptor = function () {
        this.remove.emit({
            dir: this.group.dir,
            field: this.group.field
        });
        return false;
    };
    return GroupIndicatorComponent;
}());
GroupIndicatorComponent.decorators = [
    { type: core_1.Component, args: [{
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                selector: '[kendoGroupIndicator]',
                template: "\n        <a href=\"#\" class=\"k-link\" (click)=\"toggleDirection()\">\n            <span class=\"k-icon\"\n                [class.k-i-sort-asc-sm]=\"dir === 'asc'\"\n                [class.k-i-sort-desc-sm]=\"dir === 'desc'\"></span>\n            {{title}}</a>\n        <a class=\"k-button k-button-icon k-bare\" (click)=\"removeDescriptor()\">\n            <span class=\"k-icon k-i-group-delete\"></span>\n        </a>\n    "
            },] },
];
/** @nocollapse */
GroupIndicatorComponent.ctorParameters = function () { return [
    { type: group_info_service_1.GroupInfoService, },
]; };
GroupIndicatorComponent.propDecorators = {
    'directionChange': [{ type: core_1.Output },],
    'remove': [{ type: core_1.Output },],
    'group': [{ type: core_1.Input },],
    'groupIndicatorClass': [{ type: core_1.HostBinding, args: ["class.k-group-indicator",] },],
};
exports.GroupIndicatorComponent = GroupIndicatorComponent;
