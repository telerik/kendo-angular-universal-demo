"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var areDifferent = function (a, b) {
    return a.field !== b.field || a.operator !== b.operator || a.value !== b.value;
};
var isChanged = function (a, b) {
    if (a.length !== b.length) {
        return true;
    }
    for (var idx = 0, len = a.length; idx < len; idx++) {
        var prev = a[idx];
        var curr = b[idx];
        if (kendo_data_query_1.isCompositeFilterDescriptor(prev)) {
            // tslint:disable-next-line:no-use-before-declare
            if (exports.diffFilters(prev, curr[idx])) {
                return true;
            }
        }
        else if (areDifferent(prev, curr)) {
            return true;
        }
    }
    return false;
};
var cloneFilter = function (_a) {
    var field = _a.field, ignoreCase = _a.ignoreCase, operator = _a.operator, value = _a.value;
    return ({
        field: field,
        ignoreCase: ignoreCase,
        operator: operator,
        value: value
    });
};
/**
 * @hidden
 */
exports.cloneFilters = function (_a) {
    var filters = _a.filters, logic = _a.logic;
    return ({
        filters: filters.map(function (x) { return kendo_data_query_1.isCompositeFilterDescriptor(x) ? exports.cloneFilters(x) : cloneFilter(x); }),
        logic: logic
    });
};
/**
 * @hidden
 */
exports.diffFilters = function (a, b) {
    if (utils_1.isPresent(a) && !utils_1.isPresent(b)) {
        return true;
    }
    if (!utils_1.isPresent(a) && utils_1.isPresent(b)) {
        return true;
    }
    return utils_1.isPresent(a) && utils_1.isPresent(b) && isChanged(a.filters, b.filters);
};
