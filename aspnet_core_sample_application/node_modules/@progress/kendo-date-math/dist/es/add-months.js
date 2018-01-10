import { adjustDST } from './adjust-dst';
import { cloneDate } from './clone-date';
import { lastDayOfMonth } from './last-day-of-month';
var MONTHS_LENGTH = 12;
var normalize = function (date, expectedMonth) { return (date.getMonth() !== expectedMonth ? lastDayOfMonth(addMonths(date, -1)) : date //tslint:disable-line:no-use-before-declare
); };
/**
 * A function that adds and subtracts months from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of months to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addMonths(new Date(2016, 5, 1), 5); // 2016-11-1
 * addMonths(new Date(2016, 5, 1), -5); // 2015-1-1
 * ```
 */
export var addMonths = function (date, offset) {
    var newDate = cloneDate(date);
    var diff = (newDate.getMonth() + offset) % MONTHS_LENGTH;
    var expectedMonth = (MONTHS_LENGTH + diff) % MONTHS_LENGTH;
    newDate.setMonth(newDate.getMonth() + offset);
    return normalize(adjustDST(newDate, date.getHours()), expectedMonth);
};
