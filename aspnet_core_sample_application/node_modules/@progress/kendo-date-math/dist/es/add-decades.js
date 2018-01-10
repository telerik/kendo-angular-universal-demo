import { addYears } from './add-years';
/**
 * A function that adds and subtracts decades from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of decades to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addDecades(new Date(2016, 5, 1), 5); // 2066-6-1
 * addDecades(new Date(2016, 5, 1), -5); // 1966-6-1
 * ```
 */
export var addDecades = function (value, offset) {
    return addYears(value, 10 * offset);
};
