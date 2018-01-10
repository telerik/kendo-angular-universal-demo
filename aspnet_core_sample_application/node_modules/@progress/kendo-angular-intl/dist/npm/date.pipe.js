"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intl_service_1 = require("./intl.service");
var isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
/**
 * Formats a date value to a string based on the requested format.
 * This pipe uses the IntlService.
 * @see IntlService
 *
 * @example
 * ```ng-template-no-run
 * <ul>
 *    <li>{{date | kendoDate }}</li>
 *    <li>{{milliseconds | kendoDate: 'M/dd/yyy' }}</li>
 *    <li>{{stringDate | kendoDate: 'G' }}</li>
 * </ul>
 * ```
 */
var DatePipe = (function () {
    /**
     * @hidden
     */
    function DatePipe(intlService) {
        this.intlService = intlService;
    }
    /**
     * Converts a `Date` object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     *
     * @param value - The date to format.
     * @param format - The format string or options.
     * @return - The formatted date.
     */
    DatePipe.prototype.transform = function (value, format) {
        if (format === void 0) { format = ""; }
        value = this.normalize(value);
        if (value) {
            return this.intlService.formatDate(value, format);
        }
        return value;
    };
    DatePipe.prototype.normalize = function (value) {
        if (value && typeof value === 'string') {
            value = this.intlService.parseDate(value);
        }
        else if (value && isNumeric(value)) {
            value = new Date(parseFloat(value));
        }
        return value;
    };
    return DatePipe;
}());
DatePipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'kendoDate'
            },] },
];
/** @nocollapse */
DatePipe.ctorParameters = function () { return [
    { type: intl_service_1.IntlService, },
]; };
exports.DatePipe = DatePipe;
