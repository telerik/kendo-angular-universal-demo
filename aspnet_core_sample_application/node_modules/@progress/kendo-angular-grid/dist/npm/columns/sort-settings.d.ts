/**
 * Sets the sort settings of the column.
 */
export declare type ColumnSortSettings = boolean | {
    /**
     * Enables the removal of the column sorting.
     */
    allowUnsort?: boolean;
};
/**
 * Sets the sort settings of the Grid.
 */
export declare type SortSettings = boolean | ColumnSortSettings & {
    /**
     * The sort mode of the Grid. The available modes for sorting are:
     * - `single`
     * - `multiple`
     */
    mode?: 'single' | 'multiple';
};
/**
 * @hidden
 */
export declare const normalize: (...settings: (boolean | {
    allowUnsort?: boolean;
} | (true & {
    mode?: "single" | "multiple";
}) | (false & {
    mode?: "single" | "multiple";
}) | ({
    allowUnsort?: boolean;
} & {
    mode?: "single" | "multiple";
}))[]) => any;
