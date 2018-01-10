import { ExcelExporter, Workbook } from '@progress/kendo-ooxml';
import { toExporterColumns, destroyColumns } from './exporter-columns';
/**
 * @hidden
 */
export var workbookOptions = function (options) {
    var columns = toExporterColumns(options.columns);
    var exporter = new ExcelExporter({
        columns: columns,
        data: options.data,
        filterable: options.filterable,
        groups: options.group,
        paddingCellOptions: options.paddingCellOptions,
        headerPaddingCellOptions: options.headerPaddingCellOptions
    });
    var result = exporter.workbook();
    result.creator = options.creator;
    result.date = options.date;
    result.rtl = options.rtl;
    destroyColumns(columns);
    return result;
};
/**
 * @hidden
 */
export var toDataURL = function (options) {
    var workbook = new Workbook(options);
    return workbook.toDataURL();
};
/**
 * @hidden
 */
export var isWorkbookOptions = function (value) {
    return value && value.sheets;
};
