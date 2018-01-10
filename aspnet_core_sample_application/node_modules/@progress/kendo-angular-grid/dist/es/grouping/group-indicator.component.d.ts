import { EventEmitter } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GroupInfoService } from './group-info.service';
/**
 * @hidden
 */
export declare class GroupIndicatorComponent {
    groupInfoService: GroupInfoService;
    directionChange: EventEmitter<GroupDescriptor>;
    remove: EventEmitter<GroupDescriptor>;
    group: GroupDescriptor;
    readonly groupIndicatorClass: boolean;
    constructor(groupInfoService: GroupInfoService);
    readonly title: string;
    readonly dir: string;
    toggleDirection(): boolean;
    removeDescriptor(): boolean;
}
