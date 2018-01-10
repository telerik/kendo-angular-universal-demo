import { GroupItem } from '../data/data.iterators';
import { GroupsService } from './groups.service';
import { GroupInfoService } from './group-info.service';
import { ColumnComponent } from '../columns/column.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
/**
 * @hidden
 */
export declare class GroupHeaderComponent {
    groupsService: GroupsService;
    groupInfoService: GroupInfoService;
    item: GroupItem;
    skipGroupDecoration: boolean;
    hasDetails: boolean;
    columns: Array<ColumnComponent>;
    groups: Array<GroupDescriptor>;
    readonly groupItemClass: boolean;
    constructor(groupsService: GroupsService, groupInfoService: GroupInfoService);
    prefixGroupCell(item: GroupItem): any[];
    toggleGroup(item: GroupItem): boolean;
    groupSpan(item: GroupItem): number;
    groupButtonStyles(groupIndex: string): any;
    formatForGroup(item: GroupItem): string;
    groupTitle(item: GroupItem): string;
    groupHeaderTemplate(item: GroupItem): any;
}
