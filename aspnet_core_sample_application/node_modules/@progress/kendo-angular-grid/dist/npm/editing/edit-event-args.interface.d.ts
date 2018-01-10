import { GridComponent } from "../grid.component";
/**
 * The argument type of the `remove` event.
 */
export interface EditEvent {
    /**
     * The data item.
     */
    dataItem: any;
    /**
     * Indicates if the data item is new or existing.
     */
    isNew: boolean;
    /**
     * The row index for the operation.
     */
    rowIndex: number;
    /**
     * The `GridComponent` instance.
     */
    sender: GridComponent;
}
