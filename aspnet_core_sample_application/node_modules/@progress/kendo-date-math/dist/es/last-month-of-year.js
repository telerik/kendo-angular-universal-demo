import { setMonth } from './set-month';
/**
 * A function that returns a `Date` object of the last month in a year.
 *
 * @param date - The start date value.
 * @returns - The last month in a year.
 *
 * @example
 * ```ts-no-run
 * lastMonthOfYear(new Date(2017, 5, 3)); // 2017-12-3
 * lastMonthOfYear(new Date(2017, 11, 3)); // 2017-12-3
 * ```
 */
export var lastMonthOfYear = function (value) { return setMonth(value, 11); };
