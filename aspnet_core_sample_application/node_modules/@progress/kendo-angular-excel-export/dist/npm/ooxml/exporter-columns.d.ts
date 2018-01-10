import { CellOptions } from './cell-options.interface';
/**
 * @hidden
 */
export declare const toExporterColumns: (sourceColumns: any[]) => ExporterColumn[];
/**
 * @hidden
 */
export declare const destroyColumns: (columns: ExporterColumn[]) => void;
/**
 * @hidden
 */
export declare class ExporterColumn {
    title: string;
    field: string;
    hidden: boolean;
    locked: boolean;
    width: number;
    columns: ExporterColumn[];
    groupHeaderTemplate: any;
    groupFooterTemplate: any;
    footerTemplate: any;
    headerCellOptions: CellOptions;
    cellOptions: CellOptions;
    groupHeaderCellOptions: CellOptions;
    groupFooterCellOptions: CellOptions;
    footerCellOptions: CellOptions;
    constructor(column: any, columnIndex?: number);
    destroy(): void;
}
