"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
/**
 * @hidden
 */
var PagerContextService = (function () {
    function PagerContextService() {
        this.changes = new Subject_1.Subject();
        this.pageChange = new Subject_1.Subject();
    }
    PagerContextService.prototype.notifyChanges = function (changes) {
        this.total = changes.total;
        this.pageSize = changes.pageSize;
        this.skip = changes.skip;
        this.changes.next(changes);
    };
    PagerContextService.prototype.changePage = function (page) {
        this.pageChange.next({ skip: page * this.pageSize, take: this.pageSize });
    };
    PagerContextService.prototype.changePageSize = function (value) {
        this.pageChange.next({ skip: 0, take: value });
    };
    return PagerContextService;
}());
exports.PagerContextService = PagerContextService;
