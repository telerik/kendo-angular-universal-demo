import { PageMargin } from '@progress/kendo-drawing/pdf';
export declare class PDFMarginComponent implements PageMargin {
    /**
     * The bottom margin.
     *
     * The supported units are:
     * * `"mm"`
     * * `"cm"`
     * * `"in"`
     * * `"pt"` (default).
     *
     * Numbers are considered to be points (`"pt"`).
     */
    left?: number | string;
    /**
     * The top margin.
     *
     * The supported units are:
     * * `"mm"`
     * * `"cm"`
     * * `"in"`
     * * `"pt"` (default).
     *
     * Numbers are considered to be points (`"pt"`).
     */
    top?: number | string;
    /**
     * The right margin.
     *
     * The supported units are:
     * * `"mm"`
     * * `"cm"`
     * * `"in"`
     * * `"pt"` (default).
     *
     * Numbers are considered to be points (`"pt"`).
     */
    right?: number | string;
    /**
     * The bottom margin.
     *
     * The supported units are:
     * * `"mm"`
     * * `"cm"`
     * * `"in"`
     * * `"pt"` (default).
     *
     * Numbers are considered to be points (`"pt"`).
     */
    bottom?: number | string;
    /**
     * @hidden
     */
    readonly options: any;
}
