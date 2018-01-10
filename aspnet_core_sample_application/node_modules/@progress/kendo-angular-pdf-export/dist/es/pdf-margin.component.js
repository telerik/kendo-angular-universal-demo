import { Component, Input } from '@angular/core';
var FIELDS = ['bottom', 'left', 'right', 'top'];
var PDFMarginComponent = (function () {
    function PDFMarginComponent() {
    }
    Object.defineProperty(PDFMarginComponent.prototype, "options", {
        /**
         * @hidden
         */
        get: function () {
            var options = {};
            for (var idx = 0; idx < FIELDS.length; idx++) {
                var field = FIELDS[idx];
                var value = this[field];
                if (typeof value !== 'undefined') {
                    options[field] = value;
                }
            }
            return options;
        },
        enumerable: true,
        configurable: true
    });
    return PDFMarginComponent;
}());
export { PDFMarginComponent };
PDFMarginComponent.decorators = [
    { type: Component, args: [{
                selector: 'kendo-pdf-export-margin',
                template: ""
            },] },
];
/** @nocollapse */
PDFMarginComponent.ctorParameters = function () { return []; };
PDFMarginComponent.propDecorators = {
    'left': [{ type: Input },],
    'top': [{ type: Input },],
    'right': [{ type: Input },],
    'bottom': [{ type: Input },],
};
