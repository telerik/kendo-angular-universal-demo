/**
 * A function that adds and subtracts years from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of years to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addYears(new Date(2016, 5, 1), 5); // 2011-6-1
 * addYears(new Date(2016, 5, 1), -5); // 2021-6-1
 * ```
 */
export declare const addYears: (value: Date, offset: number) => Date;
