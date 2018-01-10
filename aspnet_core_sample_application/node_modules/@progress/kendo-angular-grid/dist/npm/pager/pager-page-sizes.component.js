"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// tslint:disable:no-access-missing-member
var core_1 = require("@angular/core");
var pager_element_component_1 = require("./pager-element.component");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var pager_context_service_1 = require("./pager-context.service");
/**
 * Displays a drop-down list for the page size selection.
 */
var PagerPageSizesComponent = (function (_super) {
    tslib_1.__extends(PagerPageSizesComponent, _super);
    function PagerPageSizesComponent(localization, cd, pagerContext) {
        var _this = _super.call(this, localization, pagerContext) || this;
        _this.cd = cd;
        _this.pagerContext = pagerContext;
        return _this;
    }
    Object.defineProperty(PagerPageSizesComponent.prototype, "classes", {
        /**
         * @hidden
         *
         * @readonly
         * @type {boolean}
         * @memberOf PagerPageSizesComponent
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerPageSizesComponent.prototype, "showInitialPageSize", {
        /**
         * @hidden
         *
         * @readonly
         * @type {boolean}
         * @memberOf PagerPageSizesComponent
         */
        get: function () {
            var _this = this;
            return this.pageSizes
                .filter(function (num) { return num === Number(_this.pageSize); })
                .length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     *
     * @param {*} value
     *
     * @memberOf PagerPageSizesComponent
     */
    PagerPageSizesComponent.prototype.pageSizeChange = function (value) {
        this.pageSize = parseInt(value, 10);
        this.pagerContext.changePageSize(this.pageSize);
    };
    PagerPageSizesComponent.prototype.onChanges = function (_a) {
        var total = _a.total, skip = _a.skip, pageSize = _a.pageSize;
        this.total = total;
        this.skip = skip;
        this.pageSize = pageSize;
        this.cd.markForCheck();
    };
    return PagerPageSizesComponent;
}(pager_element_component_1.PagerElementComponent));
PagerPageSizesComponent.decorators = [
    { type: core_1.Component, args: [{
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                selector: 'kendo-pager-page-sizes',
                template: "\n        <select #select (change)=\"pageSizeChange(select.value)\">\n            <option *ngIf=\"showInitialPageSize\" [value]=\"pageSize\">{{pageSize}}</option>\n            <option *ngFor=\"let page of pageSizes\" [value]=\"page\" [selected]=\"page === pageSize ? true : undefined\">\n                {{page}}\n            </option>\n        </select>\n        {{textFor('pagerItemsPerPage')}}\n    "
            },] },
];
/** @nocollapse */
PagerPageSizesComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
    { type: core_1.ChangeDetectorRef, },
    { type: pager_context_service_1.PagerContextService, },
]; };
PagerPageSizesComponent.propDecorators = {
    'pageSizes': [{ type: core_1.Input },],
    'classes': [{ type: core_1.HostBinding, args: ["class.k-pager-sizes",] }, { type: core_1.HostBinding, args: ["class.k-label",] },],
};
exports.PagerPageSizesComponent = PagerPageSizesComponent;
