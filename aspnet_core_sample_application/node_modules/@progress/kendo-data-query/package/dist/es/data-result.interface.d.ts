/**
 * The result of the [`process`]({% slug api_kendo-data-query_process%}) method applied to a data structure.
 */
export interface DataResult {
    /**
     * The data that will be rendered by the Grid as an array.
     */
    data: any[];
    /**
     * The total number of records that are available.
     */
    total: number;
}
