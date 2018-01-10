"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var normalize_year_1 = require("./normalize-year");
/**
 * A function that returns a `Date` object of the last decade in a century.
 *
 * @param date - The start date value.
 * @returns - The last year in a decade.
 *
 * @example
 * ```ts-no-run
 * lastDecadeOfCentury(new Date(2017, 0, 1)); // 2090-1-1
 * lastDecadeOfCentury(new Date(2007, 10, 22)); // 2090-11-22
 * lastDecadeOfCentury(new Date(2126, 0, 1)); // 2190-1-1
 * ```
 */
exports.lastDecadeOfCentury = function (value) { return (normalize_year_1.normalizeYear(value, function (y) { return y - (y % 100) + 90; })); };
