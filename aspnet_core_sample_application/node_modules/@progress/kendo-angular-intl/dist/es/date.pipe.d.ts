import { PipeTransform } from '@angular/core';
import { IntlService } from './intl.service';
import { DateFormatOptions } from '@telerik/kendo-intl';
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
export declare class DatePipe implements PipeTransform {
    private intlService;
    /**
     * @hidden
     */
    constructor(intlService: IntlService);
    /**
     * Converts a `Date` object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     *
     * @param value - The date to format.
     * @param format - The format string or options.
     * @return - The formatted date.
     */
    transform(value: any, format?: String | DateFormatOptions): any;
    private normalize(value);
}
