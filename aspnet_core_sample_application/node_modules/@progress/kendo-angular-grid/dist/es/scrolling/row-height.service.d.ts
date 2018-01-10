/**
 * @hidden
 */
export declare class RowHeightService {
    private total;
    private rowHeight;
    private detailRowHeight;
    private offsets;
    private heights;
    constructor(total: number, rowHeight: number, detailRowHeight: number);
    height(rowIndex: number): number;
    expandDetail(rowIndex: number): void;
    collapseDetail(rowIndex: number): void;
    index(position: number): number;
    offset(rowIndex: number): number;
    totalHeight(): number;
    private updateRowHeight(rowIndex, value);
}
