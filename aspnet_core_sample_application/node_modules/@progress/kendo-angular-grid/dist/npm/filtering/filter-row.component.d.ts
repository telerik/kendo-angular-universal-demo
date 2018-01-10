import { ColumnBase } from '../columns/column-base';
import { DetailTemplateDirective } from '../rendering/details/detail-template.directive';
import { CompositeFilterDescriptor, GroupDescriptor } from '@progress/kendo-data-query';
/**
 * @hidden
 */
export declare class FilterRowComponent {
    columns: ColumnBase[];
    filter: CompositeFilterDescriptor;
    groups: Array<GroupDescriptor>;
    detailTemplate: DetailTemplateDirective;
    filterRowClass: boolean;
}
