import { addDays } from './add-days';
import { createDate } from './create-date';
/**
 * A function which returns the last date of the month.
 *
 * @param date - The initial date.
 * @returns - The last date of the initial date month.
 *
 * @example
 * ```ts-no-run
 * lastDayOfMonth(new Date(2016, 0, 15)); // 2016-01-31
 * ```
 */
export var lastDayOfMonth = function (date) {
    var newDate = createDate(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return addDays(newDate, -1);
};
