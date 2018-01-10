import { QueryList } from '@angular/core';
import { CellOptions } from '../ooxml/cell-options.interface';
/**
 * @hidden
 */
export declare class ColumnBase {
    parent: ColumnBase;
    /**
     * The title of the column.
     */
    title: string;
    /**
     * The width of the column in pixels.
     */
    width: number;
    /**
     * Toggles the locked (frozen) state of the column.
     *
     * @default false
     */
    locked: boolean;
    /**
     * Sets the visibility of the column.
     *
     * @default false
     */
    hidden: boolean;
    /**
     * The options of the column header cell.
     */
    headerCellOptions: CellOptions;
    /**
     * @hidden
     */
    children: QueryList<ColumnBase>;
    /**
     * @hidden
     */
    readonly level: number;
    constructor(parent?: ColumnBase);
}
