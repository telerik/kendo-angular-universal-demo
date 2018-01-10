import { EventEmitter, Injectable, isDevMode } from '@angular/core';
/**
 * @hidden
 */
var PDFService = (function () {
    function PDFService() {
        this.savePDF = new EventEmitter();
        this.exportClick = new EventEmitter();
        this.dataChanged = new EventEmitter();
    }
    PDFService.prototype.save = function (component) {
        if (this.savePDF.observers.length === 0) {
            if (isDevMode()) {
                throw new Error('Saving pdf requires including the PDFModule and adding the <kendo-grid-pdf> component.');
            }
        }
        else {
            this.savePDF.emit(component);
        }
    };
    return PDFService;
}());
export { PDFService };
PDFService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PDFService.ctorParameters = function () { return []; };
