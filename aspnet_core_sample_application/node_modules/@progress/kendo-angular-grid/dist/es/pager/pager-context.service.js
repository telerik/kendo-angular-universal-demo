import { Subject } from "rxjs/Subject";
/**
 * @hidden
 */
var PagerContextService = (function () {
    function PagerContextService() {
        this.changes = new Subject();
        this.pageChange = new Subject();
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
export { PagerContextService };
