import { Component, HostBinding, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { GroupInfoService } from './group-info.service';
/**
 * @hidden
 */
var GroupIndicatorComponent = (function () {
    function GroupIndicatorComponent(groupInfoService) {
        this.groupInfoService = groupInfoService;
        this.directionChange = new EventEmitter();
        this.remove = new EventEmitter();
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
export { GroupIndicatorComponent };
GroupIndicatorComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: '[kendoGroupIndicator]',
                template: "\n        <a href=\"#\" class=\"k-link\" (click)=\"toggleDirection()\">\n            <span class=\"k-icon\"\n                [class.k-i-sort-asc-sm]=\"dir === 'asc'\"\n                [class.k-i-sort-desc-sm]=\"dir === 'desc'\"></span>\n            {{title}}</a>\n        <a class=\"k-button k-button-icon k-bare\" (click)=\"removeDescriptor()\">\n            <span class=\"k-icon k-i-group-delete\"></span>\n        </a>\n    "
            },] },
];
/** @nocollapse */
GroupIndicatorComponent.ctorParameters = function () { return [
    { type: GroupInfoService, },
]; };
GroupIndicatorComponent.propDecorators = {
    'directionChange': [{ type: Output },],
    'remove': [{ type: Output },],
    'group': [{ type: Input },],
    'groupIndicatorClass': [{ type: HostBinding, args: ["class.k-group-indicator",] },],
};
