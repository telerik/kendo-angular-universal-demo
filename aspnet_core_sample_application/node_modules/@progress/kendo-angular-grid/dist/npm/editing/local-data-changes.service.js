"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var LocalDataChangesService = (function () {
    function LocalDataChangesService() {
        this.changes = new core_1.EventEmitter();
    }
    return LocalDataChangesService;
}());
LocalDataChangesService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
LocalDataChangesService.ctorParameters = function () { return []; };
exports.LocalDataChangesService = LocalDataChangesService;
