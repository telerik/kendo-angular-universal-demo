"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var normalize = function (x) { return Math.max(x, 0); };
/**
 * @hidden
 */
var ScrollAction = (function () {
    function ScrollAction(offset) {
        this.offset = offset;
    }
    return ScrollAction;
}());
exports.ScrollAction = ScrollAction;
/**
 * @hidden
 */
var PageAction = (function () {
    function PageAction(skip) {
        this.skip = skip;
    }
    return PageAction;
}());
exports.PageAction = PageAction;
/**
 * @hidden
 */
var ScrollerService = (function () {
    function ScrollerService(scrollObservable) {
        this.scrollObservable = scrollObservable;
        this.firstLoaded = 0;
        this.bottomOffset = 0;
        this.topOffset = 0;
    }
    ScrollerService.prototype.create = function (rowHeightService, skip, take, total, topOffset, bottomOffset) {
        var _this = this;
        if (topOffset === void 0) { topOffset = 0; }
        if (bottomOffset === void 0) { bottomOffset = 0; }
        this.rowHeightService = rowHeightService;
        this.firstLoaded = skip;
        this.lastLoaded = skip + take;
        this.take = take;
        this.total = total;
        this.lastScrollTop = 0;
        this.topOffset = topOffset;
        this.bottomOffset = bottomOffset;
        var subject = new ReplaySubject_1.ReplaySubject(2);
        var offsetBufferRows = this.rowsForHeight(topOffset);
        var skipWithOffset = normalize(skip - offsetBufferRows);
        subject.next(new ScrollAction(this.rowOffset(skipWithOffset)));
        if (offsetBufferRows) {
            subject.next(new PageAction(skipWithOffset));
        }
        Observable_1.Observable.create(function (observer) {
            _this.unsubscribe();
            _this.scrollSubscription = _this.scrollObservable.subscribe(function (x) { return _this.onScroll(x, observer); });
        }).subscribe(function (x) { return subject.next(x); });
        return subject;
    };
    ScrollerService.prototype.destroy = function () {
        this.unsubscribe();
    };
    ScrollerService.prototype.onScroll = function (_a, observer) {
        var scrollTop = _a.scrollTop, offsetHeight = _a.offsetHeight;
        if (this.lastScrollTop === scrollTop) {
            return;
        }
        var up = this.lastScrollTop >= scrollTop;
        this.lastScrollTop = scrollTop;
        var firstItemIndex = this.rowHeightService.index(normalize(scrollTop - this.topOffset));
        var lastItemIndex = this.rowHeightService.index(normalize(scrollTop + offsetHeight - this.bottomOffset));
        if (!up && lastItemIndex >= this.lastLoaded && this.lastLoaded < this.total) {
            this.firstLoaded = firstItemIndex;
            observer.next(new ScrollAction(this.rowOffset(firstItemIndex)));
            this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
            observer.next(new PageAction(this.firstLoaded));
        }
        if (up && firstItemIndex <= this.firstLoaded) {
            var nonVisibleBuffer = Math.floor(this.take * 0.3);
            this.firstLoaded = normalize(firstItemIndex - nonVisibleBuffer);
            observer.next(new ScrollAction(this.rowOffset(this.firstLoaded)));
            this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
            observer.next(new PageAction(this.firstLoaded));
        }
    };
    ScrollerService.prototype.rowOffset = function (index) {
        return this.rowHeightService.offset(index) + this.topOffset;
    };
    ScrollerService.prototype.rowsForHeight = function (height) {
        return Math.ceil(height / this.rowHeightService.height(0));
    };
    ScrollerService.prototype.unsubscribe = function () {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
            this.scrollSubscription = undefined;
        }
    };
    return ScrollerService;
}());
exports.ScrollerService = ScrollerService;
