import { SortDescriptor, GroupDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
/**
 * The returned type of the page `change` event.
 */
export interface PageChangeEvent {
    /**
     * The number of records to skip.
     */
    skip: number;
    /**
     * The number of records to take.
     */
    take: number;
}
/**
 * The returned type of the data state `change` event.
 */
export interface DataStateChangeEvent {
    /**
     * The number of records to skip.
     */
    skip: number;
    /**
     * The number of records to take.
     */
    take: number;
    /**
     * The sort descriptors by which the data is sorted.
     */
    sort?: Array<SortDescriptor>;
    /**
     * The group descriptors by which the data is grouped.
     */
    group?: Array<GroupDescriptor>;
    /**
     * The filter descriptor by which the data is filtered.
     */
    filter?: CompositeFilterDescriptor;
}
