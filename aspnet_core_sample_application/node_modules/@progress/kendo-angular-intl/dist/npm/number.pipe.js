"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intl_service_1 = require("./intl.service");
/**
 * Formats a number value to a string based on the requested format.
 * This pipe uses the `IntlService`.
 * @see IntlService
 *
 * @example
 * ```ng-template-no-run
 *   <ul>
 *     <li>{{decimal | kendoNumber:'c' }}</li>
 *     <li>{{stringNumber | kendoNumber:'p' }}</li>
 *     <li>{{int | kendoNumber:'##.00' }}</li>
 *  </ul>
 * ```
 */
var NumberPipe = (function () {
    /**
     * @hidden
     */
    function NumberPipe(intlService) {
        this.intlService = intlService;
    }
    /**
     * Converts a `Number` object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     *
     * @param value - The date to format.
     * @param format - The format string or options.
     * @return - The formatted number.
     */
    NumberPipe.prototype.transform = function (value, format) {
        if (typeof value === 'string') {
            value = this.intlService.parseNumber(value);
        }
        if (value !== null && value !== undefined) {
            return this.intlService.formatNumber(value, format);
        }
        return value;
    };
    return NumberPipe;
}());
NumberPipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'kendoNumber'
            },] },
];
/** @nocollapse */
NumberPipe.ctorParameters = function () { return [
    { type: intl_service_1.IntlService, },
]; };
exports.NumberPipe = NumberPipe;
