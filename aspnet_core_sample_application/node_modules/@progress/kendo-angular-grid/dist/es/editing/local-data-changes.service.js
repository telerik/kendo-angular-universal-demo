import { Injectable, EventEmitter } from '@angular/core';
/**
 * @hidden
 */
var LocalDataChangesService = (function () {
    function LocalDataChangesService() {
        this.changes = new EventEmitter();
    }
    return LocalDataChangesService;
}());
export { LocalDataChangesService };
LocalDataChangesService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LocalDataChangesService.ctorParameters = function () { return []; };
