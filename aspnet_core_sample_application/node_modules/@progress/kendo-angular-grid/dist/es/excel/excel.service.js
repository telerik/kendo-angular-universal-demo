import { EventEmitter, Injectable, isDevMode } from '@angular/core';
/**
 * @hidden
 */
var ExcelService = (function () {
    function ExcelService() {
        this.saveToExcel = new EventEmitter();
        this.exportClick = new EventEmitter();
    }
    ExcelService.prototype.save = function (component) {
        if (this.saveToExcel.observers.length === 0) {
            if (isDevMode()) {
                throw new Error('Saving excel requires including the ExcelModule and adding the <kendo-grid-excel> component.');
            }
        }
        else {
            this.saveToExcel.emit(component);
        }
    };
    return ExcelService;
}());
export { ExcelService };
ExcelService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ExcelService.ctorParameters = function () { return []; };
