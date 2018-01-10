import { normalizeYear } from './normalize-year';
/**
 * A function that returns a `Date` object of the first decade in a century.
 *
 * @param date - The start date value.
 * @returns - The first year in a century.
 *
 * @example
 * ```ts-no-run
 * firstDecadeOfCentury(new Date(2017, 0, 1)); // 2000-1-1
 * firstDecadeOfCentury(new Date(2007, 10, 22)); // 2000-11-22
 * firstDecadeOfCentury(new Date(2126, 0, 1)); // 2100-1-1
 * ```
 */
export var firstDecadeOfCentury = function (value) { return (normalizeYear(value, function (y) { return y - (y % 100); })); };
