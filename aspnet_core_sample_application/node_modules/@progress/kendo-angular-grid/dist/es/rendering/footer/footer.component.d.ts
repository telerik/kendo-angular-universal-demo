import { ColumnComponent } from '../../columns/column.component';
import { DetailTemplateDirective } from '../details/detail-template.directive';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ColumnBase } from "../../columns/column-base";
/**
 * @hidden
 */
export declare class FooterComponent {
    columns: Array<ColumnComponent>;
    groups: Array<GroupDescriptor>;
    detailTemplate: DetailTemplateDirective;
    scrollable: boolean;
    lockedColumnsCount: number;
    readonly footerClass: boolean;
    readonly columnsToRender: ColumnBase[];
}
