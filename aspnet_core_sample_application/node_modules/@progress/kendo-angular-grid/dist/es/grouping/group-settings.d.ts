/**
 * The grouping settings of the Grid component.
 */
export interface GroupableSettings {
    /**
     * Determines if grouping by dragging and dropping the column headers is allowed.
     */
    enabled: boolean;
    /**
     * The text that is displayed when the grouping area is empty.
     * The default value is **Drag a column header and drop it here to group by that column**.
     * If set to `true`, the user can group the Grid by dragging the column header cells.
     * By default, grouping is disabled.
     */
    emptyText?: string;
    /**
     * Determines if the group footer template is visible when the group is collapsed. The default value is `false`.
     */
    showFooter: boolean;
}
