"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var ExcelService = (function () {
    function ExcelService() {
        this.saveToExcel = new core_1.EventEmitter();
        this.exportClick = new core_1.EventEmitter();
    }
    ExcelService.prototype.save = function (component) {
        if (this.saveToExcel.observers.length === 0) {
            if (core_1.isDevMode()) {
                throw new Error('Saving excel requires including the ExcelModule and adding the <kendo-grid-excel> component.');
            }
        }
        else {
            this.saveToExcel.emit(component);
        }
    };
    return ExcelService;
}());
ExcelService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ExcelService.ctorParameters = function () { return []; };
exports.ExcelService = ExcelService;
