"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var normalize_year_1 = require("./normalize-year");
/**
 * A function that returns a `Date` object of the first year in a decade.
 *
 * @param date - The start date value.
 * @returns - The first year in a decade.
 *
 * @example
 * ```ts-no-run
 * firstYearOfDecade(new Date(2017, 0, 1)); // 2010-1-1
 * firstYearOfDecade(new Date(2007, 10, 22)); // 2000-11-22
 * firstYearOfDecade(new Date(2026, 0, 1)); // 2020-1-1
 * ```
 */
exports.firstYearOfDecade = function (value) { return (normalize_year_1.normalizeYear(value, function (y) { return y - (y % 10); })); };
