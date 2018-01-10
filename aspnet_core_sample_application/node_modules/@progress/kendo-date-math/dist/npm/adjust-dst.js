"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clone_date_1 = require("./clone-date");
/**
 * @hidden
 */
exports.adjustDST = function (date, hour) {
    var newDate = clone_date_1.cloneDate(date);
    if (hour === 0 && newDate.getHours() === 23) {
        newDate.setHours(newDate.getHours() + 2);
    }
    return newDate;
};
