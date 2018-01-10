"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clone_date_1 = require("./clone-date");
var day_enum_1 = require("./day.enum");
/**
 *  A function which returns the first date of the current week.
 *
 * @param date - The initial date.
 * @param weekStartDay [default: Day.Sunday] - The first day of the week.
 * @returns - The first date of the current week.
 *
 * @example
 * ```ts-no-run
 * firstDayInWeek(new Date(2016, 0, 15)); // 2016-01-10
 * firstDayInWeek(new Date(2016, 0, 15), Day.Monday); // 2016-01-11
 * ```
 */
exports.firstDayInWeek = function (date, weekStartDay) {
    if (weekStartDay === void 0) { weekStartDay = day_enum_1.Day.Sunday; }
    var first = clone_date_1.cloneDate(date);
    while (first.getDay() !== weekStartDay) {
        first.setDate(first.getDate() - 1);
    }
    return first;
};
