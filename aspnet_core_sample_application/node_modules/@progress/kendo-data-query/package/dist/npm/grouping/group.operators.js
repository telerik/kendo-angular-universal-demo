"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transducers_1 = require("../transducers");
var utils_1 = require("../utils");
var aggregate_operators_1 = require("./aggregate.operators");
var filter_expression_factory_1 = require("../filtering/filter-expression.factory");
/**
 * @hidden
 */
exports.normalizeGroups = function (descriptors) {
    descriptors = utils_1.isArray(descriptors) ? descriptors : [descriptors];
    return descriptors.map(function (x) { return Object.assign({ dir: "asc" }, x); });
};
var identity = transducers_1.map(function (x) { return x; });
/**
 * Groups the provided data according to the specified descriptors.
 *
 * @param {Array} data - The data that will be grouped.
 * @param {GroupDescriptor[]} descriptors - The descriptors.
 * @param {any} transformers - For internal use.
 * @param {Array} originalData - For internal use.
 * @returns {(Array<GroupResult<T>> | T[])} - The grouped data.
 *
 * @example
 * ```ts-no-run
 *
 * import { groupBy } from '@progress/kendo-data-query';
 *
 * const data = [
 *     { name: "Pork", category: "Food", subcategory: "Meat" },
 *     { name: "Pepper", category: "Food", subcategory: "Vegetables" },
 *     { name: "Beef", category: "Food", subcategory: "Meat" }
 * ];
 *
 * const result = groupBy(data, [{ field: "subcategory" }]);
 * ```
 */
exports.groupBy = function (data, descriptors, transformers, originalData) {
    if (descriptors === void 0) { descriptors = []; }
    if (transformers === void 0) { transformers = identity; }
    if (originalData === void 0) { originalData = data; }
    descriptors = exports.normalizeGroups(descriptors);
    if (!descriptors.length) {
        return data;
    }
    var descriptor = descriptors[0];
    var initialValue = {};
    var view = transducers_1.exec(transformers(transducers_1.groupCombinator(descriptor.field)), initialValue, data);
    var result = [];
    Object.keys(view).forEach(function (field) {
        Object.keys(view[field]).forEach(function (value) {
            var group = view[field][value];
            var aggregateResult = {};
            var filteredData = originalData;
            if (utils_1.isPresent(descriptor.aggregates)) {
                filteredData = filter_expression_factory_1.filterBy(originalData, {
                    field: descriptor.field,
                    ignoreCase: false,
                    operator: 'eq',
                    value: group.value
                });
                aggregateResult = aggregate_operators_1.aggregateBy(filteredData, descriptor.aggregates);
            }
            result[group.__position] = {
                aggregates: aggregateResult,
                field: field,
                items: descriptors.length > 1 ?
                    exports.groupBy(group.items, descriptors.slice(1), identity, filteredData)
                    : group.items,
                value: group.value
            };
        });
    });
    return result;
};
