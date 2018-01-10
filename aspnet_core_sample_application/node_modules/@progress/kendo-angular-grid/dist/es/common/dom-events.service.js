import { Injectable, EventEmitter } from '@angular/core';
/**
 * @hidden
 */
var DomEventsService = (function () {
    function DomEventsService() {
        this.cellClick = new EventEmitter();
        this.cellMousedown = new EventEmitter();
    }
    return DomEventsService;
}());
export { DomEventsService };
DomEventsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DomEventsService.ctorParameters = function () { return []; };
