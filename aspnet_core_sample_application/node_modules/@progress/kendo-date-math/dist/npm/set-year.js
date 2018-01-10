"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_months_1 = require("./add-months");
var create_date_1 = require("./create-date");
var last_day_of_month_1 = require("./last-day-of-month");
/**
 * @hidden
 */
exports.setYear = function (value, year) {
    var month = value.getMonth();
    var candidate = create_date_1.createDate(year, month, value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
    return candidate.getMonth() === month ? candidate : last_day_of_month_1.lastDayOfMonth(add_months_1.addMonths(candidate, -1));
};
