import { DataBindingDirective } from "../databinding.directive";
import { GridComponent } from "../grid.component";
import { CompositeFilterDescriptor, GroupDescriptor, SortDescriptor, State } from "@progress/kendo-data-query";
import { GridDataResult } from "../data/data.collection";
import { VirtualGroupResult } from "./virtual-group-result.interface";
import { LocalDataChangesService } from "../editing/local-data-changes.service";
/**
 * @hidden
 */
export declare const count: (groups: any[], includeFooters?: boolean) => any;
/**
 * @hidden
 */
export declare const slice: (groups: any[], skip: number, take: number, includeFooters?: boolean) => VirtualGroupResult[];
/**
 * A directive which encapsulates the in-memory handling of grouping with virtual scrolling.
 */
export declare class GroupBindingDirective extends DataBindingDirective {
    /**
     * The array of data which will be used to populate the Grid.
     */
    kendoGridGroupBinding: any[];
    /**
     * @hidden
     */
    data: any[];
    /**
     * Defines the descriptors by which the data will be sorted.
     */
    sort: SortDescriptor[];
    /**
     * Defines the descriptor by which the data will be filtered.
     */
    filter: CompositeFilterDescriptor;
    /**
     * Defines the descriptors by which the data will be grouped.
     */
    group: GroupDescriptor[];
    private groups;
    constructor(grid: GridComponent, localDataChangesService: LocalDataChangesService);
    /**
     * @hidden
     */
    ngOnInit(): void;
    protected groupExpand({groupIndex}: any): void;
    protected groupCollapse({groupIndex}: any): void;
    protected process(state: State): GridDataResult;
    protected processGroups(state: State): GridDataResult;
    protected dataResult(skip: number, take: number): GridDataResult;
    protected applyState({skip, take, sort, group, filter}: State): void;
}
