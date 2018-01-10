import { setMonth } from './set-month';
/**
 * A function that returns a `Date` object of the first month in a year.
 *
 * @param date - The start date value.
 * @returns - The first month in a year.
 *
 * @example
 * ```ts-no-run
 * firstMonthOfYear(new Date(2017, 11, 1)); // 2017-1-1
 * firstMonthOfYear(new Date(2017, 0, 1)); // 2017-1-1
 * ```
 */
export var firstMonthOfYear = function (value) { return setMonth(value, 0); };
