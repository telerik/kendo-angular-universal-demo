import { Subject } from 'rxjs/Subject';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
/**
 * Represent a service to set the filter descriptor.
 */
export declare class FilterService {
    /**
     * Fires when the filter descriptors is set.
     */
    changes: Subject<CompositeFilterDescriptor>;
    /**
     * Sets the filter descriptor.
     *
     * @param {CompositeFilterDescriptor} value - The filter descriptor that will be set.
     */
    filter(value: CompositeFilterDescriptor): void;
}
