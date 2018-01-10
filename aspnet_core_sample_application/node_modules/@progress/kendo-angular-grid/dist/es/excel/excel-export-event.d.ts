import { PreventableEvent } from '../common/preventable-event';
/**
 * Arguments for the `excelExport` event.
 */
export declare class ExcelExportEvent extends PreventableEvent {
    workbook: any;
    constructor(workbook: any);
}
