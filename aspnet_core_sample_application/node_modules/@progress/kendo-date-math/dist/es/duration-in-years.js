/**
 * A function that calculates duration in years between two `Date` objects.
 *
 * @param start - The start date value.
 * @param end - The end date value.
 * @returns - The duration in years.
 *
 * @example
 * ```ts-no-run
 * durationInYears(new Date(2016, 0, 1), new Date(2028, 0, 1)); // 12
 * durationInYears(new Date(2016, 0, 1), new Date(2022, 0, 1)); // 6
 * durationInYears(new Date(2016, 0, 1), new Date(2016, 0, 1)); // 0
 * ```
 */
export var durationInYears = function (start, end) { return (end.getFullYear() - start.getFullYear()); };
