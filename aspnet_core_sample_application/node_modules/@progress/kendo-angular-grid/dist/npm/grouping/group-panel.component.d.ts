import { ElementRef, EventEmitter, QueryList, OnDestroy } from '@angular/core';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GroupConnectionService, GroupDragService } from './group-connection.service';
import { DraggableDirective } from '../common/draggable.directive';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * @hidden
 */
export declare class GroupPanelComponent implements OnDestroy {
    private connection;
    private draggableService;
    private localization;
    change: EventEmitter<GroupDescriptor[]>;
    readonly groupHeaderClass: boolean;
    text: string;
    groups: GroupDescriptor[];
    draggables: QueryList<DraggableDirective>;
    dropTargets: QueryList<ElementRef>;
    private emptyText;
    private subscription;
    constructor(connection: GroupConnectionService, draggableService: GroupDragService, element: ElementRef, localization: LocalizationService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    directionChange(group: GroupDescriptor): void;
    insert(field: string, index: number): void;
    remove(group: GroupDescriptor): void;
}
