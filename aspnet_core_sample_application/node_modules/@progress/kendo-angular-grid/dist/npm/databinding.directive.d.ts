import { SimpleChange, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { State, SortDescriptor, GroupDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from './grid.component';
import { DataStateChangeEvent } from './data/change-event-args.interface';
import { GridDataResult } from './data/data.collection';
import { LocalDataChangesService } from './editing/local-data-changes.service';
/**
 * A Directive which encapsulates the in-memory handling of data operations such as paging, sorting, and grouping.
 */
export declare class DataBindingDirective implements OnInit, OnDestroy, OnChanges {
    protected grid: GridComponent;
    protected localDataChangesService: LocalDataChangesService;
    /**
     * Defines the number of records to be skipped by the pager.
     */
    skip: number;
    /**
     * Defines the descriptors by which the data will be sorted.
     */
    sort: SortDescriptor[];
    /**
     * Defines the descriptor by which the data will be filtered.
     */
    filter: CompositeFilterDescriptor;
    /**
     * Defines the page size used by the Grid pager.
     */
    pageSize: number;
    /**
     * The descriptors by which the data will be grouped.
     */
    group: GroupDescriptor[];
    /**
     * The array of data which will be used to populate the Grid.
     */
    data: any[];
    protected state: State;
    protected originalData: any[];
    private stateChangeSubscription;
    private dataChangedSubscription;
    constructor(grid: GridComponent, localDataChangesService?: LocalDataChangesService);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    /**
     * @hidden
     */
    onStateChange(state: DataStateChangeEvent): void;
    /**
     * @hidden
     */
    rebind(): void;
    protected process(state: State): GridDataResult;
    protected applyState({skip, take, sort, group, filter}: State): void;
}
