"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var PagerElementComponent = (function () {
    function PagerElementComponent(localization, pagerContext) {
        this.localization = localization;
        this.pagerContext = pagerContext;
        this.total = this.pagerContext.total;
        this.skip = this.pagerContext.skip;
        this.pageSize = this.pagerContext.pageSize;
    }
    Object.defineProperty(PagerElementComponent.prototype, "currentPage", {
        /**
         * @hidden
         *
         * @readonly
         * @type {number}
         * @memberOf PagerElementComponent
         */
        get: function () {
            return Math.floor((this.skip || 0) / this.pageSize) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerElementComponent.prototype, "totalPages", {
        /**
         * @hidden
         *
         * @readonly
         * @type {number}
         * @memberOf PagerElementComponent
         */
        get: function () {
            return Math.ceil((this.total || 0) / this.pageSize);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     *
     * @param {string} key
     * @returns {string}
     *
     * @memberOf PagerElementComponent
     */
    PagerElementComponent.prototype.textFor = function (key) {
        return this.localization.get(key);
    };
    /**
     * @hidden
     *
     * @param {number} page
     *
     * @memberOf PagerElementComponent
     */
    PagerElementComponent.prototype.changePage = function (page) {
        this.pagerContext.changePage(page);
        return false;
    };
    /**
     * @hidden
     *
     * @memberOf PagerElementComponent
     */
    PagerElementComponent.prototype.ngOnInit = function () {
        this.changesSubscription = this.pagerContext.changes.subscribe(this.onChanges.bind(this));
    };
    PagerElementComponent.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    return PagerElementComponent;
}());
exports.PagerElementComponent = PagerElementComponent;
