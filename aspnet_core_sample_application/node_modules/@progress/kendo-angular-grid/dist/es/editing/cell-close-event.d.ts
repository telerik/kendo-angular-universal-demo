import { PreventableEvent } from '../common/preventable-event';
import { EditEvent } from "./edit-event-args.interface";
import { GridComponent } from "../grid.component";
export declare class CellCloseEvent extends PreventableEvent implements EditEvent {
    isNew: boolean;
    dataItem: any;
    rowIndex: number;
    sender: GridComponent;
    /**
     * @hidden
     */
    action: string;
    /**
     * The grid column that should be closed.
     */
    column: any;
    /**
     * The DOM event that caused the cellClose event. May not be present if cellClose was cause by API call.
     */
    originalEvent: any;
    constructor(options: any);
}
