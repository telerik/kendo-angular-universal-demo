import { DataResult } from '@progress/kendo-data-query';
/**
 * The data type that is expected by the Grid.
 */
export interface GridDataResult extends DataResult {
}
/**
 * @hidden
 */
export declare class DataResultIterator {
    private source;
    private skip;
    private groupFooters;
    private isObject;
    constructor(source: GridDataResult | any[], skip?: number, groupFooters?: boolean);
    protected isGridDataResult(source: GridDataResult | any[]): source is GridDataResult;
    readonly total: number;
    readonly data: any[];
    map(fn: (item: any, index: number, array: any[]) => any): any[];
    filter(fn: (item: any, index: number, array: any[]) => boolean): any[];
    reduce(fn: (prevValue: any, curValue: any, curIndex: number, array: any[]) => any, init: any): any;
    forEach(fn: (item: any, index: number, array: any[]) => void): void;
    some(fn: (value: any, index: number, array: any[]) => boolean): boolean;
    toString(): string;
}
/**
 * @hidden
 */
export declare class DataCollection {
    private accessor;
    constructor(accessor: () => DataResultIterator);
    readonly total: number;
    readonly length: number;
    readonly first: any;
    readonly last: any;
    at(index: number): any;
    map(fn: (item: any, index: number, array: any[]) => any): any[];
    filter(fn: (item: any, index: number, array: any[]) => boolean): any[];
    reduce(fn: (prevValue: any, curValue: any, curIndex: number, array: any[]) => any, init: any): any;
    forEach(fn: (item: any, index: number, array: any[]) => void): void;
    some(fn: (value: any, index: number, array: any[]) => boolean): boolean;
    toString(): string;
}
