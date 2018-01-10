import { normalizeYear } from './normalize-year';
/**
 * A function that returns a `Date` object of the last year in a decade.
 *
 * @param date - The start date value.
 * @returns - The last year in a decade.
 *
 * @example
 * ```ts-no-run
 * lastYearOfDecade(new Date(2017, 0, 1)); // 2019-1-1
 * lastYearOfDecade(new Date(2007, 10, 22)); // 2009-11-22
 * lastYearOfDecade(new Date(2026, 0, 1)); // 2029-1-1
 * ```
 */
export var lastYearOfDecade = function (value) { return (normalizeYear(value, function (y) { return y - (y % 10) + 9; })); };
