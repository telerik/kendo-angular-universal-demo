import { GroupDescriptor, GroupResult } from './group-descriptor.interface';
import { Reducer } from '../common.interfaces';
/**
 * @hidden
 */
export declare const normalizeGroups: (descriptors: any) => any;
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
export declare const groupBy: <T>(data: T[], descriptors?: GroupDescriptor[], transformers?: Reducer, originalData?: T[]) => GroupResult[] | T[];
