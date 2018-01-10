/**
 * The sheets columns options.
 */
export interface WorkbookSheetColumn {
    /**
     * If set to true the column will stretch to fit the contents of all cells.
     */
    autoWidth?: boolean;

    /**
     * The zero-based index of the column in the sheet. Defaults to the index of the object in the array.
     */
    index?: number;

    /**
     * The width of the column in pixels.
     */
    width?: number;
}

/**
 * The sheets filter options.
 */
export interface WorkbookSheetFilter {
    /**
     * The index of the first filterable column.
     */
    from?: number;

    /**
     * The index of the last filterable column.
     */
    to?: number;
}

/**
 * The cells border width. The allowed values are:
 *
 * - `1`&mdash;Results in a "thin" border.
 * - `2`&mdash;Results in a "medium" border.
 * - `3`&mdash;Results in a "thick" border.
 */
export type CellBorderSize = 1 | 2 | 3;

/**
 * The style information for the bottom border of the cell.
 */
export interface WorkbookSheetRowCellBorderBottom {
    /**
     * The bottom border color of the cell.
     * Many standard CSS formats are supported, but the canonical form is "#ccff00".
     */
    color?: string;

    /**
     * The bottom border width.
     */
    size?: CellBorderSize;
}

/**
 * The style information for the left border of the cell.
 */
export interface WorkbookSheetRowCellBorderLeft {
    /**
     * The left border color of the cell.
     * Many standard CSS formats are supported, but the canonical form is "#ccff00".
     */
    color?: string;

    /**
     * The left border width.
     */
    size?: CellBorderSize;
}

/**
 * The style information for the right border of the cell.
 */
export interface WorkbookSheetRowCellBorderRight {
    /**
     * The right border color of the cell.
     * Many standard CSS formats are supported, but the canonical form is "#ccff00".
     */
    color?: string;

    /**
     * The right border width.
     */
    size?: CellBorderSize;
}

/**
 * The style information for the top border of the cell.
 */
export interface WorkbookSheetRowCellBorderTop {
    /**
     * The top border color of the cell.
     * Many standard CSS formats are supported, but the canonical form is "#ccff00".
     */
    color?: string;

    /**
     * The top border width.
     */
    size?: CellBorderSize;
}

/**
 * The sheets cell configuration.
 */
export interface WorkbookSheetRowCell {
    /**
     * Sets the background color of the cell. Supports hex CSS-like values that start with "#" e.g. "#ff00ff".
     */
    background?: string;

    /**
     * The style information for the bottom border of the cell.
     */
    borderBottom?: WorkbookSheetRowCellBorderBottom;

    /**
     * The style information for the left border of the cell.
     */
    borderLeft?: WorkbookSheetRowCellBorderLeft;

    /**
     * The style information for the top border of the cell.
     */
    borderTop?: WorkbookSheetRowCellBorderTop;

    /**
     * The style information for the right border of the cell.
     */
    borderRight?: WorkbookSheetRowCellBorderRight;

    /**
     * Setting it to true makes the cell value bold.
     */
    bold?: boolean;

    /**
     * The text color of the cell. Supports hex CSS-like values that start with "#" e.g. "#ff00ff".
     */
    color?: string;

    /**
     * Sets the number of columns that a cell occupies.
     */
    colSpan?: number;

    /**
     * Sets the font used to display the cell value.
     */
    fontFamily?: string;

    /**
     * Sets the font size in pixels.
     */
    fontSize?: number;

    /**
     * Sets the format that Excel uses to display the cell value.
     */
    format?: string;

    /**
     * Sets the formula that Excel uses to compute and display the cell value
     */
    formula?: string;

    /**
     * The zero-based index of the cell in the row. Records missing an index will be placed in the first available cell on the row.
     * > Mixing indexed with non-indexed cells might yield invalid results. If you want to use both, place the indexed cells at the end of the array.
     */
    index?: any;

    /**
     * Setting it to true italicizes the cell value.
     */
    italic?: boolean;

    /**
     * Sets the number of rows that a cell occupies.
     */
    rowSpan?: number;

    /**
     * Sets the horizontal alignment of the cell value. Supported values are `"left"`, `"center"` and `"right"`.
     */
    textAlign?: 'left' | 'center' | 'right';

    /**
     * Setting it to true underlines the cell value.
     */
    underline?: boolean;

    /**
     * Setting it to true wraps the cell value.
     */
    wrap?: boolean;

    /**
     * Sets the vertical alignment of the cell value. Supported values are `"top"`, `"center"` and `"bottom"`.
     */
    verticalAlign?: 'top' | 'center' | 'bottom';

    /**
     * The value of the cell. Numbers and dates will be formatted as strings. String values are HTML encoded.
     */
    value?: Date|number|string|boolean;
}

/**
 * The sheets rows configuration.
 */
export interface WorkbookSheetRow {
    /**
     * The cells of the every row. Each cell represents a cell from the final Excel document.
     */
    cells?: WorkbookSheetRowCell[];

    /**
     * The zero-based index of the row in the sheet. Defaults to the index of the object in the array.
     */
    index?: number;

    /**
     * The row height in pixels.
     */
    height?: number;
}

/**
 * The workbook sheets options.
 */
export interface WorkbookSheet {
    /**
     * The sheets columns configuration.
     */
    columns?: WorkbookSheetColumn[];

    /**
     * The number of frozen columns in this sheet.
     */
    frozenColumns?: number;

    /**
     * The number of frozen rows in this sheet.
     */
    frozenRows?: number;

    /**
     * Excel auto filter configuration. When set the final document will have auto filtering enabled.
     */
    filter?: WorkbookSheetFilter;

    /**
     * Sets the name of the exported workbook sheet.
     */
    name?: string;

    /**
     * The array of rows of the sheet.
     */
    rows?: WorkbookSheetRow[];

    /**
     * Specifies if the sheet should use right to left direction.
     */
    rtl?: boolean;
}

/**
 * The workbook options.
 */
export interface WorkbookOptions {
    /**
     * The creator of the workbook.
     */
    creator?: string;

    /**
     * The date when the workbook is created. The default value is new Date().
     */
    date?: Date;

    /**
     * Specifies if the workbook sheets should use right to left direction.
     */
    rtl?: boolean;

    /**
     * The sheets of the workbook. Every sheet represents a page from the final Excel file.
     */
    sheets?: WorkbookSheet[];
}

/**
 * An ooxml workbook.
 */
export class Workbook {
    /**
     * The workbook options.
     */
    options: WorkbookOptions;

    /**
     * The sheets of the workbook. Every sheet represents a page from the final Excel file.
     */
    sheets: WorkbookSheet[];

    constructor(options?: WorkbookOptions);

    /**
     * Creates an Excel file that represents the current workbook and returns a Promise which will be resolved with a data URL.
     *
     * @returns {Promise<string>} - The Promise which will be resolve with the file data URI.
     */
    toDataURL(): Promise<string>;
}
