import { createDate } from './create-date';
/**
 * A function which returns the passed date with a midnight time portion.
 *
 * @param date - The initial date.
 * @returns - The date with a midnight time portion.
 *
 * @example
 * ```ts-no-run
 * getDate(new Date(2016, 0, 15, 14, 30, 30)); // 2016-01-15 00:00:00
 * ```
 */
export var getDate = function (date) {
    return createDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
};
