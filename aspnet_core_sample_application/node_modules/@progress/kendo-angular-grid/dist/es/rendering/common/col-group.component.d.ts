import { GroupDescriptor } from '@progress/kendo-data-query';
import { ColumnComponent } from '../../columns/column.component';
import { DetailTemplateDirective } from '../details/detail-template.directive';
import { ColumnBase } from "../../columns/column-base";
/**
 * @hidden
 */
export declare class ColGroupComponent {
    columns: Array<ColumnComponent>;
    groups: Array<GroupDescriptor>;
    detailTemplate: DetailTemplateDirective;
    readonly columnsToRender: Array<ColumnBase>;
}
