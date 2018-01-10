import { adjustDST } from './adjust-dst';
import { cloneDate } from './clone-date';
/**
 * A function that adds and subtracts days from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of days to add and subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addDays(new Date(2016, 0, 1), 5); // 2016-1-6
 * addDays(new Date(2016, 0, 1), -5); // 2015-12-26
 * ```
 */
export var addDays = function (date, offset) {
    var newDate = cloneDate(date);
    newDate.setDate(newDate.getDate() + offset);
    return adjustDST(newDate, date.getHours());
};
