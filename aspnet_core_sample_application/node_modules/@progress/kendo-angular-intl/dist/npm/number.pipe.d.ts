import { PipeTransform } from '@angular/core';
import { IntlService } from './intl.service';
import { NumberFormatOptions } from '@telerik/kendo-intl';
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
export declare class NumberPipe implements PipeTransform {
    private intlService;
    /**
     * @hidden
     */
    constructor(intlService: IntlService);
    /**
     * Converts a `Number` object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     *
     * @param value - The date to format.
     * @param format - The format string or options.
     * @return - The formatted number.
     */
    transform(value: any, format?: string | NumberFormatOptions): any;
}
