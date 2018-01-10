"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pager_settings_1 = require("./pager-settings");
var utils_1 = require("../utils");
var pager_context_service_1 = require("./pager-context.service");
/**
 * @hidden
 */
var PagerComponent = (function () {
    function PagerComponent(pagerContext) {
        this.pagerContext = pagerContext;
        this.total = 0;
        this.skip = 1;
        this.pageChange = new core_1.EventEmitter();
        this.settings = pager_settings_1.normalize({});
    }
    Object.defineProperty(PagerComponent.prototype, "options", {
        set: function (value) {
            this.settings = pager_settings_1.normalize(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "pagerWrapClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "gridPagerClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "widgetClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return Math.ceil((this.total || 0) / this.pageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "currentPage", {
        get: function () {
            return Math.floor((this.skip || 0) / this.pageSize) + 1;
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.ngOnInit = function () {
        this.pageChangeSubscription = this.pagerContext.pageChange.subscribe(this.changePage.bind(this));
    };
    PagerComponent.prototype.ngOnChanges = function (changes) {
        if (utils_1.anyChanged(["pageSize", "skip", "total"], changes, false)) {
            this.pagerContext.notifyChanges({
                pageSize: this.pageSize,
                skip: this.skip,
                total: this.total
            });
        }
    };
    PagerComponent.prototype.ngOnDestroy = function () {
        if (this.pageChangeSubscription) {
            this.pageChangeSubscription.unsubscribe();
        }
    };
    PagerComponent.prototype.changePage = function (event) {
        this.pageChange.emit(event);
    };
    return PagerComponent;
}());
PagerComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'kendo-pager',
                template: "\n        <ng-template\n            [ngIf]=\"template?.templateRef\"\n            [templateContext]=\"{\n                templateRef: template?.templateRef,\n                totalPages: totalPages,\n                total: total,\n                skip: skip,\n                pageSize: pageSize,\n                currentPage: currentPage\n            }\">\n        </ng-template>\n        <ng-container *ngIf=\"!template?.templateRef\">\n            <kendo-pager-prev-buttons *ngIf=\"settings.previousNext\"></kendo-pager-prev-buttons>\n            <kendo-pager-numeric-buttons\n                *ngIf=\"settings.type === 'numeric'\"\n                [buttonCount]=\"settings.buttonCount\">\n            </kendo-pager-numeric-buttons>\n            <kendo-pager-input *ngIf=\"settings.type === 'input'\"></kendo-pager-input>\n            <kendo-pager-next-buttons *ngIf=\"settings.previousNext\"></kendo-pager-next-buttons>\n            <kendo-pager-info *ngIf='settings.info'></kendo-pager-info>\n            <kendo-pager-page-sizes *ngIf=\"settings.pageSizes\" [pageSizes]=\"settings.pageSizes\"></kendo-pager-page-sizes>\n        </ng-container>\n  "
            },] },
];
/** @nocollapse */
PagerComponent.ctorParameters = function () { return [
    { type: pager_context_service_1.PagerContextService, },
]; };
PagerComponent.propDecorators = {
    'total': [{ type: core_1.Input },],
    'skip': [{ type: core_1.Input },],
    'pageSize': [{ type: core_1.Input },],
    'options': [{ type: core_1.Input },],
    'template': [{ type: core_1.Input },],
    'pageChange': [{ type: core_1.Output },],
    'pagerWrapClass': [{ type: core_1.HostBinding, args: ['class.k-pager-wrap',] },],
    'gridPagerClass': [{ type: core_1.HostBinding, args: ['class.k-grid-pager',] },],
    'widgetClass': [{ type: core_1.HostBinding, args: ['class.k-widget',] },],
};
exports.PagerComponent = PagerComponent;
