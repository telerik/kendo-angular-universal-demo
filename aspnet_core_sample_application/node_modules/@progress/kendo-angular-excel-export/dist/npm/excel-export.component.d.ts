import { QueryList } from '@angular/core';
import { WorkbookOptions } from '@progress/kendo-ooxml';
import { CellOptions } from './ooxml/cell-options.interface';
import { ExcelExportData } from './excel-export-data';
import { ColumnBase } from './columns/column-base';
/**
 * Configures the settings for the Excel export of the Kendo UI Grid.
 */
export declare class ExcelExportComponent {
    private rtl;
    /**
     * Specifies the file name of the file exported to Excel.
     * @default "Export.xlsx"
     */
    fileName: string;
    /**
     * Enables or disables the filtering for columns in the Excel file.
     */
    filterable: boolean;
    /**
     * The creator of the workbook.
     */
    creator?: string;
    /**
     * The date on which the workbook is created. Defaults to `new Date()`.
     */
    date?: Date;
    /**
     * If set to `true`, the content is forwarded to `proxyURL` even if the browser supports the saving of files locally.
     */
    forceProxy: boolean;
    /**
     * The URL of the server-side proxy which will stream the file to the end user.
     * A proxy is used when the browser is not capable of saving files locally. For example, Internet Explorer 9 and earlier, and Safari.
     * The implementation of the server-side proxy has to be done by you.
     * The proxy receives a POST request with the following parameters in the request body:
     * - `contentType`&mdash;The MIME type of the file.
     * - `base64`&mdash;The base-64 encoded file content.
     * - `fileName`&mdash;The file name, as requested by the caller.
     *
     * The proxy is expected to return the decoded file with the **Content-Disposition** header set to `attachment; filename="<fileName.xslx>"`.
     */
    proxyURL: string;
    /**
     * The exported data.
     * If grouped, the data must have the structure described by the [`GroupResult`]({% slug api_kendo-data-query_groupresult_kendouiforangular %}) option of the Kendo UI DataQuery.
     */
    data: any[];
    /**
     * The exported data groups.
     * The groups must be compatible with the [`GroupDescriptor`]({% slug api_kendo-data-query_groupdescriptor_kendouiforangular %}) option of the Kendo UI DataQuery.
     */
    group: any[];
    /**
     * The options of the cells that are inserted before the data, group, and footer cells to indicate the group hierarchy if the data is grouped.
     */
    paddingCellOptions: CellOptions;
    /**
     * The options of the cells that are inserted before the header cells to align the headers and the column values when the data is grouped.
     */
    headerPaddingCellOptions: CellOptions;
    /**
     * @hidden
     */
    columns: QueryList<ColumnBase>;
    constructor(rtl?: boolean);
    /**
     * Saves the data to Excel.
     *
     * @param exportData - An optional parameter. Can be the data that is to be exported or [`WorkbookOptions`]({% slug api_excel-export_workbookoptions_kendouiforangular %}).
     */
    save(exportData?: any[] | ExcelExportData | WorkbookOptions): void;
    /**
     * Returns [`WorkbookOptions`]({% slug api_excel-export_workbookoptions_kendouiforangular %}) based on the specified columns and data.
     *
     * @param exportData - The optional data to be exported.
     * @returns {WorkbookOptions} - The workbook options.
     */
    workbookOptions(exportData?: any[] | ExcelExportData): WorkbookOptions;
    /**
     * Returns a promise which will be resolved with the file data URI.
     *
     * @param exportData - The optional data or [`WorkbookOptions`]({% slug api_excel-export_workbookoptions_kendouiforangular %}) that are to be used to generate the data URI.
     * @returns {Promise<string>} - The promise that will be resolved by the file data URI.
     */
    toDataURL(exportData?: any[] | ExcelExportData | WorkbookOptions): Promise<string>;
    protected getExportData(exportData?: ExcelExportData | any[]): ExcelExportData;
    protected saveFile(dataURL: string): void;
}
