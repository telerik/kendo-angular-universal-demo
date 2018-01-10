"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var set_year_1 = require("./set-year");
/**
 * @hidden
 */
exports.normalizeYear = function (value, year) { return (set_year_1.setYear(value, year(value.getFullYear()))); };
