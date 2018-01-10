import { SortDescriptor } from './sort-descriptor';
import { CompositeFilterDescriptor } from './filtering/filter-descriptor.interface';
import { GroupDescriptor } from './grouping/group-descriptor.interface';
/**
 * The state of the data operations applied to the Grid component.
 */
export interface State {
    /**
     * The number of records to be skipped by the pager.
     */
    skip?: number;
    /**
     * The number of records to take.
     */
    take?: number;
    /**
     * The descriptors used for sorting.
     */
    sort?: Array<SortDescriptor>;
    /**
     * The descriptors used for filtering.
     */
    filter?: CompositeFilterDescriptor;
    /**
     * The descriptors used for grouping.
     */
    group?: Array<GroupDescriptor>;
}
