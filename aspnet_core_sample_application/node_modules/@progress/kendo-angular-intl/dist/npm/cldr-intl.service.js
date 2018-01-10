"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intl_members_1 = require("./intl-members");
var intl_members_2 = require("./intl-members");
var intl_members_3 = require("./intl-members");
/**
 * The Internationalization service implemented by using
 * the CLDR Database via the `@telerik/kendo-intl` package.
 */
var CldrIntlService = (function () {
    /**
     * Creates a new instance of the service with the ID of the specified locale.
     *
     * Note that the parts of the locale ID can be separated by either `_` (underscore)
     * or `-` (dash).
     *
     * @param localeId - The default locale ID.
     */
    function CldrIntlService(localeId) {
        // Angular locales use underscore, e.g. en_US
        // while IETF BCP-47 specifies a dash.
        // https://tools.ietf.org/html/bcp47
        this.localeId = localeId.replace(/_/g, '-');
    }
    /**
     * Formats a string with placeholders such as
     * `Total amount {0:c}`.
     *
     * @param format - The format string.
     * @param values - One or more values to output in the format string placeholders.
     * @return - The formatted string.
     */
    CldrIntlService.prototype.format = function (format) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return intl_members_1.format(format, values, this.localeId);
    };
    /**
     * Converts an object to a string based on the specified format.
     *
     * @param value - The value to format.
     * @param format - The format to use.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The formatted object.
     */
    CldrIntlService.prototype.toString = function (value, format, localeId) {
        return intl_members_1.toString(value, format, localeId || this.localeId);
    };
    /**
     * Converts a `Date` object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     *
     * @param value - The date to format.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The formatted date.
     */
    CldrIntlService.prototype.formatDate = function (value, format, localeId) {
        return intl_members_2.formatDate(value, format, localeId || this.localeId);
    };
    /**
     * Converts a string to a `Date` object based on the specified format.
     *
     * @param value - The string to convert.
     * @param format - The format strings or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The parsed date.
     */
    CldrIntlService.prototype.parseDate = function (value, format, localeId) {
        return intl_members_2.parseDate(value, format, localeId || this.localeId);
    };
    /**
     * Converts a string to a `Number`.
     *
     * @param value - The string to convert.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The parsed number.
     */
    CldrIntlService.prototype.parseNumber = function (value, format, localeId) {
        return intl_members_3.parseNumber(value, localeId || this.localeId, format);
    };
    /**
     * Converts a `Number` to a string based on the specified format.
     *
     * @param value - The number to format.
     * @param format - The format string or options.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return The formatted number.
     */
    CldrIntlService.prototype.formatNumber = function (value, format, localeId) {
        return intl_members_3.formatNumber(value, format, localeId || this.localeId);
    };
    /**
     * Returns the date names from the current locale based on the option.
     *
     * The available `type` values are:
     * - `era`
     * - `year`
     * - `quarter`
     * - `month`
     * - `week`
     * - `day`
     * - `dayperiod`
     * - `hour`
     * - `minute`
     * - `second`
     * - `zone`
     *
     * The available `nameType` values are:
     * - `wide`
     * - `narrow`
     * - `short`
     *
     * @param options - Detailed configuration for the desired date field name.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return - The day names from the current locale based on the option.
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
    CldrIntlService.prototype.dateFieldName = function (options, localeId) {
        return intl_members_2.dateFieldName(options, localeId || this.localeId);
    };
    /**
     * Returns a localized date field name based on specific dateFieldName options.
     *
     * The available type values are:
     * - `day`
     * - `dayperiod`
     * - `months`
     * - `quarters`
     * - `eras`
     *
     * @param options - Detailed configuration for the desired date format.
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return - The day names from the current locale based on the option.
     */
    CldrIntlService.prototype.dateFormatNames = function (options, localeId) {
        return intl_members_2.dateFormatNames(localeId || this.localeId, options);
    };
    /**
     * Splits the date format into objects containing information about each part of the pattern.
     *
     * @param format The format string or options.
     * @param localeId The optional locale id. If not specified, the `"en"` locale id is used.
     * @returns The date format parts.
     */
    CldrIntlService.prototype.splitDateFormat = function (format, localeId) {
        return intl_members_2.splitDateFormat(format, localeId || this.localeId);
    };
    /**
     * Returns the number symbols from the current locale based on the option.
     *
     * @param localeId - The locale ID to use in place of the default one. Optional.
     * @return - The number symbols from the current locale.
     */
    CldrIntlService.prototype.numberSymbols = function (localeId) {
        return intl_members_3.numberSymbols(localeId || this.localeId);
    };
    /**
     * Returns the first day index starting from Sunday.
     *
     * @param localeId - The locale ID. Defaults to the current locale ID.
     * @return - The index of the first day of the week (0 == Sunday).
     */
    CldrIntlService.prototype.firstDay = function (localeId) {
        return intl_members_2.firstDay(localeId || this.localeId);
    };
    return CldrIntlService;
}());
CldrIntlService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
CldrIntlService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.LOCALE_ID,] },] },
]; };
exports.CldrIntlService = CldrIntlService;
