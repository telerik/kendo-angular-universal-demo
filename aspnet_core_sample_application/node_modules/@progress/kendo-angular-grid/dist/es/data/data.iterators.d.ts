import { GroupResult } from '@progress/kendo-data-query';
/**
 * @hidden
 */
export declare const itemAt: (data: any[], index: number) => any;
/**
 * @hidden
 */
export interface GroupItem {
    type: 'group';
    data: GroupResult;
    index: string;
    level: number;
}
/**
 * @hidden
 */
export interface GroupFooterItem {
    type: 'footer';
    data: GroupResult;
    groupIndex: string;
    level: number;
}
/**
 * @hidden
 */
export interface Item {
    type: 'data';
    data: Object;
    index: number;
    groupIndex: string;
}
/**
 * @hidden
 */
export interface IteratorResult<T> {
    done: boolean;
    value: T;
}
/**
 * @hidden
 */
export declare type IteratorState = {
    footers?: boolean;
    level?: number;
    dataIndex?: number;
    parentGroupIndex?: string;
    groupIndex?: number;
};
/**
 * @hidden
 */
export declare const getIterator: (data: any[], {footers, level, dataIndex, parentGroupIndex, groupIndex}: IteratorState) => any;
/**
 * @hidden
 */
export declare class Iterator<T> {
    protected dataIndex: number;
    private resultMap;
    protected _innerIterator: any;
    constructor(arr: any[], dataIndex?: number, resultMap?: <T>(x: T, idx: number) => T);
    next(): IteratorResult<T>;
}
/**
 * @hidden
 */
export declare class ItemIterator extends Iterator<Item> {
    constructor(arr: any[], dataIndex: number, groupIndex: string);
    /**
     * The index of the next record.
     * @readonly
     * @type {number}
     */
    readonly index: number;
}
/**
 * @hidden
 */
export declare class GroupIterator<T> {
    private arr;
    private outputFooters;
    private level;
    private dataIndex;
    private parentIndex;
    private groupIndex;
    private current;
    private _innerIterator;
    private _iterator;
    private currentGroupIndex;
    constructor(arr: Array<GroupResult>, outputFooters?: boolean, level?: number, dataIndex?: number, parentIndex?: string, groupIndex?: number);
    protected nextGroupItem(): IteratorResult<GroupItem>;
    protected footerItem(): IteratorResult<GroupFooterItem>;
    protected innerIterator(group: GroupResult): GroupIterator<T> | ItemIterator;
    protected nextDataItem(group: GroupResult): IteratorResult<Item | GroupItem | GroupFooterItem>;
    next(): IteratorResult<Item | GroupItem | GroupFooterItem>;
    /**
     * The index of the last iterated data record.
     * @readonly
     * @type {number}
     */
    readonly index: number;
}
