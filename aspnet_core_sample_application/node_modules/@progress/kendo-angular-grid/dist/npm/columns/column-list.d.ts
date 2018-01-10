import { QueryList } from '@angular/core';
import { ColumnBase } from './column-base';
/**
 * @hidden
 */
export declare class ColumnList {
    private columns;
    static empty: () => ColumnList;
    constructor(columns: QueryList<ColumnBase>);
    forEach(callback: (column: ColumnBase) => void): void;
    filter(callback: (column: ColumnBase) => any): ColumnBase[];
    toArray(): ColumnBase[];
}
