import { GroupItem } from '../data/data.iterators';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ColumnList } from "../columns/column-list";
/**
 * @hidden
 */
export declare class GroupInfoService {
    private _columnList;
    private readonly columns;
    registerColumnsContainer(columns: () => ColumnList): void;
    formatForGroup(item: GroupItem | GroupDescriptor): string;
    groupTitle(item: GroupItem | GroupDescriptor): string;
    groupHeaderTemplate(item: GroupItem | GroupDescriptor): any;
    private groupField(group);
    private columnForGroup(group);
}
