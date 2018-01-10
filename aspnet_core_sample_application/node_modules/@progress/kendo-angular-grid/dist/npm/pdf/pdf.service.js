"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var PDFService = (function () {
    function PDFService() {
        this.savePDF = new core_1.EventEmitter();
        this.exportClick = new core_1.EventEmitter();
        this.dataChanged = new core_1.EventEmitter();
    }
    PDFService.prototype.save = function (component) {
        if (this.savePDF.observers.length === 0) {
            if (core_1.isDevMode()) {
                throw new Error('Saving pdf requires including the PDFModule and adding the <kendo-grid-pdf> component.');
            }
        }
        else {
            this.savePDF.emit(component);
        }
    };
    return PDFService;
}());
PDFService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
PDFService.ctorParameters = function () { return []; };
exports.PDFService = PDFService;
