"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../utils");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/take");
require("rxjs/add/operator/takeUntil");
require("rxjs/add/operator/switchMap");
var getDocument = function (el) { return el.ownerDocument.documentElement; };
var getWindow = function (el) { return el.ownerDocument.defaultView; };
var hasClass = function (className) { return function (el) { return new RegExp("(^| )" + className + "( |$)").test(el.className); }; };
var isDeleteButton = utils_1.or(hasClass("k-i-group-delete"), hasClass("k-button-icon"));
var isSortIcon = utils_1.or(hasClass("k-i-sort-asc-sm"), hasClass("k-i-sort-desc-sm"));
var skipButtons = utils_1.and(utils_1.not(isDeleteButton), utils_1.not(isSortIcon));
var scrollPosition = function (element) {
    var documentElement = getDocument(element);
    var win = getWindow(element);
    return {
        x: win.pageXOffset || documentElement.scrollLeft || 0,
        y: win.pageYOffset || documentElement.scrollTop || 0
    };
};
var isOutside = function (target, _a) {
    var pageX = _a.pageX, pageY = _a.pageY;
    var _b = target.getBoundingClientRect(), right = _b.right, left = _b.left, top = _b.top, bottom = _b.bottom;
    var _c = scrollPosition(target), x = _c.x, y = _c.y;
    return !(pageX > left + x && pageX < right + x && pageY > top + y && pageY < bottom + y);
};
var preventDefault = function (e) { return e.originalEvent.preventDefault(); };
var createDropCue = function (container) {
    var cue = document.createElement("div");
    cue.className = "k-grouping-dropclue";
    cue.style.display = "none";
    container.appendChild(cue);
    return {
        hide: function () { return cue.style.display = "none"; },
        position: function (element, e, idx, isLast) {
            var left = element.offsetLeft - cue.offsetWidth;
            if (isLast && e.pageX > element.offsetLeft + element.offsetWidth / 2) {
                left = element.offsetLeft + element.offsetWidth;
                idx += 1;
            }
            cue.style.top = element.offsetTop + "px";
            cue.style.left = left + "px";
            cue.style.display = "";
            return idx;
        },
        remove: function () { return container.removeChild(cue); }
    };
};
/**
 * @hidden
 */
var GroupConnectionService = (function () {
    function GroupConnectionService() {
        this.change = new core_1.EventEmitter();
    }
    GroupConnectionService.prototype.register = function (target) {
        if (!utils_1.isUniversal() && utils_1.isPresent(target)) {
            this.target = target;
            this.cue = createDropCue(target);
        }
        return this.change.asObservable();
    };
    GroupConnectionService.prototype.isOutside = function (e) {
        return isOutside(this.target, e);
    };
    GroupConnectionService.prototype.showCue = function (e) {
        var item = this.items.filter(function (x) { return !isOutside(x, e); })[0];
        if (item) {
            var index = this.items.indexOf(item);
            this.currentIndex = this.cue.position(item, e, index, index === this.items.length - 1);
        }
        else {
            this.cue.hide();
            this.currentIndex = 0;
        }
    };
    GroupConnectionService.prototype.registerItems = function (items) {
        this.items = items;
    };
    GroupConnectionService.prototype.add = function (field, idx) {
        if (idx === void 0) { idx = this.currentIndex; }
        if (!utils_1.isNullOrEmptyString(field)) {
            this.change.emit({ field: field, idx: idx });
        }
    };
    GroupConnectionService.prototype.hideCue = function () {
        if (utils_1.isPresent(this.cue)) {
            this.cue.hide();
        }
    };
    return GroupConnectionService;
}());
GroupConnectionService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
GroupConnectionService.ctorParameters = function () { return []; };
exports.GroupConnectionService = GroupConnectionService;
var append = function (element) {
    var appended = false;
    return function () {
        if (!appended) {
            document.body.appendChild(element);
            appended = true;
        }
        return element;
    };
};
var createHint = function (column) {
    var hint = document.createElement("div");
    hint.className = "k-header k-drag-clue";
    hint.style.cssText = "display:none;position:absolute;";
    hint.innerHTML = "" + (column.title || column.field);
    var getElement = append(hint);
    return {
        move: function (e) {
            preventDefault(e);
            var element = getElement();
            element.style.top = e.pageY + "px";
            element.style.left = e.pageX + "px";
            element.style.display = "";
            return function () { return document.body.removeChild(hint); };
        }
    };
};
/**
 * @hidden
 */
var GroupDragService = (function () {
    function GroupDragService(connection, ngzone) {
        this.connection = connection;
        this.ngzone = ngzone;
        this.subscriptions = [];
    }
    GroupDragService.prototype.connect = function (draggables, filter) {
        var _this = this;
        if (filter === void 0) { filter = function () { return true; }; }
        this.ngzone.runOutsideAngular(function () {
            _this.unsubscribe();
            _this.subscriptions = draggables.map(function (draggable) {
                var presses = Observable_1.Observable.from(draggable.kendo.press);
                var drags = Observable_1.Observable.from(draggable.kendo.drag);
                var releases = Observable_1.Observable.from(draggable.kendo.release);
                return presses
                    .filter(function (_a) {
                    var target = _a.originalEvent.target;
                    return skipButtons(target);
                })
                    .filter(filter)
                    .do(preventDefault)
                    .switchMap(function (x) { return Observable_1.Observable.of(x).delay(150).takeUntil(releases.take(1)); })
                    .switchMap(function (_a) {
                    var column = _a.column;
                    return drags
                        .filter(filter)
                        .takeUntil(releases.take(1))
                        .do(function (e) { return _this.connection.showCue(e); })
                        .map(createHint(column).move);
                })
                    .switchMap(function (removeHint) { return releases.take(1).do(function () {
                    removeHint();
                    _this.connection.hideCue();
                }); })
                    .filter(function (e) { return !_this.connection.isOutside(e); })
                    .subscribe(function () { return _this.connection.add(draggable.column.field); });
            });
        });
    };
    GroupDragService.prototype.unsubscribe = function () {
        (this.subscriptions || []).forEach(function (x) { return x.unsubscribe(); });
        this.subscriptions = [];
    };
    return GroupDragService;
}());
GroupDragService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
GroupDragService.ctorParameters = function () { return [
    { type: GroupConnectionService, },
    { type: core_1.NgZone, },
]; };
exports.GroupDragService = GroupDragService;
