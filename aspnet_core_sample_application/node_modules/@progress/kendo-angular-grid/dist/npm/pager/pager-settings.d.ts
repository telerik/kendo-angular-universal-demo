/**
 * The type of the Grid pager.
 *
 * The available values are:
 * * `numeric`&mdash;Buttons with numbers.
 * * `input`&mdash;Input for typing the page number.
 *
 * @example
 * ```ts-no-run
 *
 * <kendo-grid
 *    [pageable]="{
 *        type: 'numeric'
 *    }">
 * </kendo-grid>
 * ```
 */
export declare type PagerType = 'numeric' | 'input';
/**
 * The pager settings of the Grid.
 *
 * @example
 * ```ts-no-run
 *
 * <kendo-grid
 *    [pageable]="{
 *        buttonCount: 2,
 *        info: false
 *    }">
 * </kendo-grid>
 * ```
 */
export declare type PagerSettings = {
    /**
     * Sets the maximum numeric buttons count before the buttons are collapsed.
     */
    buttonCount?: number;
    /**
     * Toggles the information about the current page and the total number of records.
     */
    info?: boolean;
    /**
     * Defines the type of the Grid pager.
     */
    type?: PagerType;
    /**
     * Shows a menu for selecting the page size.
     */
    pageSizes?: boolean | Array<number>;
    /**
     * Toggles the **Previous** and **Next** buttons.
     */
    previousNext?: boolean;
};
/**
 * @hidden
 */
export declare const normalize: (settings: any) => any;
