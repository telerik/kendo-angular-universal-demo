"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A function that calculates duration in months between two `Date` objects.
 *
 * @param start - The start date value.
 * @param end - The end date value.
 * @returns - The duration in months.
 *
 * @example
 * ```ts-no-run
 * durationInMonths(new Date(2016, 0, 1), new Date(2017, 0, 1)); // 12
 * durationInMonths(new Date(2016, 6, 1), new Date(2017, 0, 1)); // 6
 * durationInMonths(new Date(2016, 0, 1), new Date(2016, 0, 1)); // 0
 * ```
 */
exports.durationInMonths = function (start, end) { return (((end.getFullYear() - start.getFullYear())) * 12 + (end.getMonth() - start.getMonth())); };
