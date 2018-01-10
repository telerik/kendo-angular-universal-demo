import { GridComponent } from "../grid.component";
/**
 * The argument type of the `cellClick` event.
 */
export interface CellClickEvent {
    /**
     * The column of the clicked cell.
     */
    column: any;
    /**
     * The column index of the clicked cell.
     */
    columnIndex: number;
    /**
     * Indicates if the cell is being edited.
     */
    isEdited: boolean;
    /**
     * The DOM event that triggered the `cellClick` event.
     */
    originalEvent: any;
    /**
     * The row index for the operation.
     */
    rowIndex: number;
    /**
     * The `GridComponent` instance.
     */
    sender: GridComponent;
    /**
     * The type of the event that triggered the `cellClick` event.
     */
    type: 'click' | 'contextmenu';
}
