/**
 * A function that adds and subtracts weeks from a Date object.
 *
 * @param date - The initial date value.
 * @param offset - The number of weeks to add/subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addWeeks(new Date(2016, 5, 1), 3); // 2016-6-22
 * addWeeks(new Date(2016, 5, 1), -3); // 2015-5-11
 * ```
 */
export declare const addWeeks: (date: Date, offset: number) => Date;
