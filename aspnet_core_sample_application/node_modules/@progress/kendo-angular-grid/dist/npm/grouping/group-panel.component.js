"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var group_connection_service_1 = require("./group-connection.service");
var draggable_directive_1 = require("../common/draggable.directive");
var utils_1 = require("../utils");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
/**
 * @hidden
 */
var GroupPanelComponent = (function () {
    function GroupPanelComponent(connection, draggableService, element, localization) {
        var _this = this;
        this.connection = connection;
        this.draggableService = draggableService;
        this.localization = localization;
        this.change = new core_1.EventEmitter();
        this.groups = [];
        this.subscription = connection
            .register(element.nativeElement)
            .subscribe(function (_a) {
            var field = _a.field, idx = _a.idx;
            return _this.insert(field, idx);
        });
    }
    Object.defineProperty(GroupPanelComponent.prototype, "groupHeaderClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupPanelComponent.prototype, "text", {
        get: function () {
            return this.emptyText ? this.emptyText : this.localization.get('groupPanelEmpty');
        },
        set: function (value) {
            this.emptyText = value;
        },
        enumerable: true,
        configurable: true
    });
    GroupPanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription.add(utils_1.observe(this.dropTargets)
            .subscribe(function (items) {
            return _this.connection.registerItems(items.map(function (x) { return x.nativeElement; }));
        }));
        this.subscription.add(utils_1.observe(this.draggables)
            .subscribe(function (items) {
            return _this.draggableService.connect(items.toArray());
        }));
    };
    GroupPanelComponent.prototype.ngOnDestroy = function () {
        this.draggableService.unsubscribe();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    GroupPanelComponent.prototype.directionChange = function (group) {
        var index = this.groups.findIndex(function (x) { return x.field === group.field; });
        var groups = this.groups.slice(0, index).concat([group], this.groups.slice(index + 1));
        this.change.emit(groups);
    };
    GroupPanelComponent.prototype.insert = function (field, index) {
        var groups = this.groups.filter(function (x) { return x.field !== field; });
        if (groups.length || this.groups.length === 0) {
            this.change.emit(groups.slice(0, index).concat([{ field: field }], groups.slice(index)));
        }
    };
    GroupPanelComponent.prototype.remove = function (group) {
        this.change.emit(this.groups.filter(function (x) { return x.field !== group.field; }));
    };
    return GroupPanelComponent;
}());
GroupPanelComponent.decorators = [
    { type: core_1.Component, args: [{
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                providers: [group_connection_service_1.GroupDragService],
                selector: 'kendo-grid-group-panel',
                template: "\n    <ng-template [ngIf]=\"groups.length === 0\">\n        {{ text }}\n    </ng-template>\n    <div *ngFor=\"let group of groups\"\n        kendoGroupIndicator\n        [kendoGridDraggable]=\"group\"\n        [group]=\"group\"\n        (directionChange)=\"directionChange($event)\"\n        (remove)=\"remove($event)\">\n    </div>\n    "
            },] },
];
/** @nocollapse */
GroupPanelComponent.ctorParameters = function () { return [
    { type: group_connection_service_1.GroupConnectionService, },
    { type: group_connection_service_1.GroupDragService, },
    { type: core_1.ElementRef, },
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
GroupPanelComponent.propDecorators = {
    'change': [{ type: core_1.Output },],
    'groupHeaderClass': [{ type: core_1.HostBinding, args: ["class.k-grouping-header",] },],
    'text': [{ type: core_1.Input },],
    'groups': [{ type: core_1.Input },],
    'draggables': [{ type: core_1.ViewChildren, args: [draggable_directive_1.DraggableDirective,] },],
    'dropTargets': [{ type: core_1.ViewChildren, args: [draggable_directive_1.DraggableDirective, { read: core_1.ElementRef },] },],
};
exports.GroupPanelComponent = GroupPanelComponent;
