import { Day } from './day.enum';
/**
 * A function that returns the number of the week within a year, which is calculated in relation to the date.
 *
 * For more information, refer to the [**ISO week date**](https://en.wikipedia.org/wiki/ISO_week_date) article.
 *
 * @param date - The date used for the week number calculation.
 * @param weekStartDay - The first day of the week. By default, the first week day is Monday.
 * @returns - The number of the week within the year.
 *
 * @example
 * ```ts-no-run
 * weekInYear(new Date(2016, 0, 1)); // Week 53, 2015
 * weekInYear(new Date(2016, 0, 5)); // Week 1, 2016
 * weekInYear(new Date(2017, 0, 1)); // Week 52, 2016
 * weekInYear(new Date(2017, 0, 2)); // Week 1, 2017
 * ```
 */
export declare const weekInYear: (date: Date, weekStartDay?: Day) => number;
