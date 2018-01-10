import { isPresent } from '../utils';
/**
 * @hidden
 * Type guard for `CompositeFilterDescriptor`.
 */
export var isCompositeFilterDescriptor = function (source) {
    return isPresent(source.filters);
};
