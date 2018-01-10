import { ColumnBase } from "./column-base";
/**
 * @hidden
 */
export declare const expandColumns: (columns: ColumnBase[]) => ColumnBase[];
/**
 * @hidden
 */
export declare const columnsToRender: (columns: ColumnBase[]) => ColumnBase[];
/**
 * @hidden
 */
export declare const columnsSpan: (columns: ColumnBase[]) => number;
/**
 * @hidden
 */
export declare const isValidFieldName: (fieldName: string) => boolean;
/**
 * @hidden
 */
export declare const children: (column: any) => any;
/**
 * @hidden
 */
export declare const leafColumns: (columns: any) => any;
/**
 * @hidden
 */
export declare const resizableColumns: (columns: any) => any;
