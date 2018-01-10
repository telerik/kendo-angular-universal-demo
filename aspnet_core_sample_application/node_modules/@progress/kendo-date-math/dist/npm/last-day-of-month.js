"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_days_1 = require("./add-days");
var create_date_1 = require("./create-date");
/**
 * A function which returns the last date of the month.
 *
 * @param date - The initial date.
 * @returns - The last date of the initial date month.
 *
 * @example
 * ```ts-no-run
 * lastDayOfMonth(new Date(2016, 0, 15)); // 2016-01-31
 * ```
 */
exports.lastDayOfMonth = function (date) {
    var newDate = create_date_1.createDate(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return add_days_1.addDays(newDate, -1);
};
