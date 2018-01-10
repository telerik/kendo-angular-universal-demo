import { addYears } from './add-years';
/**
 * A function that adds and subtracts centuries from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of centuries to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addCenturies(new Date(2016, 5, 1), 5); // 2516-6-1
 * addCenturies(new Date(2016, 5, 1), -5); // 1516-6-1
 * ```
 */
export var addCenturies = function (value, offset) {
    return addYears(value, 100 * offset);
};
