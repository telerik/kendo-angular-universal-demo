import { isPresent } from "../utils";
import { isCompositeFilterDescriptor } from "@progress/kendo-data-query";
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
        if (isCompositeFilterDescriptor(prev)) {
            // tslint:disable-next-line:no-use-before-declare
            if (diffFilters(prev, curr[idx])) {
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
export var cloneFilters = function (_a) {
    var filters = _a.filters, logic = _a.logic;
    return ({
        filters: filters.map(function (x) { return isCompositeFilterDescriptor(x) ? cloneFilters(x) : cloneFilter(x); }),
        logic: logic
    });
};
/**
 * @hidden
 */
export var diffFilters = function (a, b) {
    if (isPresent(a) && !isPresent(b)) {
        return true;
    }
    if (!isPresent(a) && isPresent(b)) {
        return true;
    }
    return isPresent(a) && isPresent(b) && isChanged(a.filters, b.filters);
};
