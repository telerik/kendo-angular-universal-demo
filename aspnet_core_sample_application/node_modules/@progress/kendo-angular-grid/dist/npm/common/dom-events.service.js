"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var DomEventsService = (function () {
    function DomEventsService() {
        this.cellClick = new core_1.EventEmitter();
        this.cellMousedown = new core_1.EventEmitter();
    }
    return DomEventsService;
}());
DomEventsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
DomEventsService.ctorParameters = function () { return []; };
exports.DomEventsService = DomEventsService;
