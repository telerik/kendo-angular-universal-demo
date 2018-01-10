import { Pipe } from '@angular/core';
import { IntlService } from './intl.service';
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
export { NumberPipe };
NumberPipe.decorators = [
    { type: Pipe, args: [{
                name: 'kendoNumber'
            },] },
];
/** @nocollapse */
NumberPipe.ctorParameters = function () { return [
    { type: IntlService, },
]; };
