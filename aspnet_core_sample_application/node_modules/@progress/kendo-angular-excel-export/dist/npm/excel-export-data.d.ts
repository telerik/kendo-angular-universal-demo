/**
 * The type that is expected for the ExcelExportComponent data.
 */
export interface ExcelExportData {
    /**
     * The exported data.
     * If grouped, the data must have the structure described by the [`GroupResult`]({% slug api_kendo-data-query_groupresult_kendouiforangular %}) of the Kendo UI DataQuery.
     */
    data?: any[];
    /**
     * The exported data groups.
     * The groups must be compatible with the [`GroupDescriptor`]({% slug api_kendo-data-query_groupdescriptor_kendouiforangular %}) of the Kendo UI DataQuery.
     */
    group?: any[];
}
