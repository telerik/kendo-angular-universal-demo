import { EventEmitter, OnDestroy } from '@angular/core';
import { SelectableSettings } from './selectable-settings';
import { RowArgs, RowSelectedFn } from "../rendering/common/row-class";
import { DomEventsService } from '../common/dom-events.service';
/**
 * The returned type of the `selection` event.
 */
export interface SelectionEvent {
    /**
     * The items that were added to the selection.
     */
    selectedRows: RowArgs[];
    /**
     * The items that were removed from the selection.
     */
    deselectedRows: RowArgs[];
    /**
     * Shows the state of the `Ctrl` key (or the `Command` key on a Mac) during the selection.
     */
    ctrlKey: boolean;
    /**
     * The index of the affected row.
     * This property is deprecated and will be removed in future versions.
     */
    index?: number;
    /**
     * The selected state of the affected row.
     * This property is deprecated and will be removed in future versions.
     */
    selected?: boolean;
}
/**
 * @hidden
 */
export declare type SelectionServiceSettings = {
    rowSelected: RowSelectedFn;
    selectable: boolean | SelectableSettings;
    view: {
        accessor: Function;
        at: Function;
        length: Number;
    };
};
/**
 * @hidden
 */
export declare class SelectionService implements OnDestroy {
    id: number;
    changes: EventEmitter<SelectionEvent>;
    lastSelectionStartIndex: number;
    currentSelection: RowArgs[];
    selectAllChecked: boolean;
    settings: SelectionServiceSettings;
    private cellClickSubscription;
    private mousedownSubscription;
    constructor(domEvents: DomEventsService);
    init(settings: any): void;
    isSelected(index: number): boolean;
    handleClick(item: any, event: any): void;
    toggle(item: any): any;
    toggleByIndex(index: number): any;
    select(item: any): any;
    addAllTo(item: any): any;
    updateAll(selectAllChecked: boolean): void;
    readonly selectAllState: any;
    readonly selected: number[];
    readonly options: SelectableSettings;
    ngOnDestroy(): void;
    private getIterator();
    private setDeprecatedEventProperties(ev);
}
