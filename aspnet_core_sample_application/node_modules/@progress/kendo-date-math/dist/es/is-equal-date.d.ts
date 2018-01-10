/**
 * A function that compares the date portions of 2 dates.
 *
 * @param candidate - The candidate date.
 * @param expected - The expected date.
 * @returns - A Boolean value whether the values are equal.
 *
 * @example
 * ```ts-no-run
 * isEqualDate(new Date(2016, 0, 1, 10), new Date(2016, 0, 1, 20)); // true
 * isEqualDate(new Date(2016, 0, 1, 10), new Date(2016, 0, 2, 10)); // false
 * ```
 */
export declare const isEqualDate: (candidate: Date, expected: Date) => boolean;
