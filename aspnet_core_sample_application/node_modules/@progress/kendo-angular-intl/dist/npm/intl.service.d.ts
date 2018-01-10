import { DateFieldNameOptions, DateFormatOptions, DateFormatNameOptions, NumberFormatOptions, DateFormatPart } from '@telerik/kendo-intl';
/**
 * An abstract base class that implements
 * the Internationalization service methods
 * for the current locale.
 */
export declare abstract class IntlService {
    /**
     * Formats a string with placeholders such as
     * `Total amount {0:c}`.
     *
     * @param format - The format string.
     * @param values - One or more values to output in the format string placeholders.
     * @return - The formatted string.
     */
    abstract format(format: string, ...values: any[]): string;
    /**
     * Converts an object to a string based on the specified format.
     *
     * @param value - The value to format.
     * @param format - The format to use.
     * @param localeId - The locale ID to use in place of the default. Optional.
     * @return - The formatted object.
     */
    abstract toString(value: any, format: string | any, localeId?: string): string;
    /**
     * Converts a `Date` object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     *
     * @param value - The date to format.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default. Optional.
     * @return - The formatted date.
     */
    abstract formatDate(value: Date, format?: String | DateFormatOptions, localeId?: string): string;
    /**
     * Converts a string to a `Date` object based on the specified format.
     *
     * @param value - The string to convert.
     * @param format - The format strings or options.
     * @param localeId - The locale ID to use in place of the default. Optional.
     * @return - The parsed date.
     */
    abstract parseDate(value: string, format?: string | DateFormatOptions | string[] | DateFormatOptions[], localeId?: string): Date;
    /**
     * Converts a string to a `Number`.
     *
     * @param value - The string to convert.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default. Optional.
     * @return - The parsed number.
     */
    abstract parseNumber(value: string, format?: string | NumberFormatOptions, localeId?: string): number;
    /**
     * Converts a `Number` to a string based on the specified format.
     *
     * @param value - The number to format.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default. Optional.
     * @return - The formatted number.
     */
    abstract formatNumber(value: number, format: string | NumberFormatOptions, localeId?: string): string;
    /**
     * Returns the day names from the current locale based on the option.
     *
     * @param options - Detailed configuration for the desired date format.
     * @param localeId - The locale ID to use in place of the default. Optional.
     * @return - The day names from the current locale based on the option.
     */
    abstract dateFormatNames(options: DateFormatNameOptions, localeId?: string): any;
    /**
     * Returns a localized date field name based on specific dateFieldName options.
     *
     * @param options - Detailed configuration for the desired date field name.
     * @param localeId The optional locale id. If not specified, the `"en"` locale id is used.
     * @returns The localized date field name from the current locale based on the option.
     *
     * @example
     * ```
     * dateFieldName({ type: 'day' });                      //returns 'day';
     * dateFieldName({ type: 'day', nameType: 'wide' });    //returns 'day';
     * dateFieldName({ type: 'month', nameType: 'short' }); //returns 'mo.';
     * dateFieldName({ type: 'month', nameType: 'wide' });  //returns 'month';
     * ```
     */
    abstract dateFieldName(options: DateFieldNameOptions, localeId?: string): string;
    /**
     * Splits the date format into objects containing information about each part of the pattern.
     *
     * @param format The format string or options.
     * @param localeId The optional locale id. If not specified, the `"en"` locale id is used.
     * @returns The date format parts.
     */
    abstract splitDateFormat(format: string | DateFormatOptions, localeId?: string): DateFormatPart[];
    /**
     * Returns the number symbols from the current locale based on the option.
     *
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return - The number symbols from the current locale.
     */
    abstract numberSymbols(localeId?: string): any;
    /**
     * Returns the first day index starting from Sunday.
     *
     * @param localeId - The locale ID. Defaults to the current locale ID.
     * @return - The index of the first day of the week (0 == Sunday).
     */
    abstract firstDay(localeId?: string): number;
}
