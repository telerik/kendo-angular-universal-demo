import { GroupHeaderTemplateDirective } from './group-header-template.directive';
import { GroupFooterTemplateDirective } from './group-footer-template.directive';
import { FooterTemplateDirective } from './footer-template.directive';
import { ColumnBase } from './column-base';
import { CellOptions } from '../ooxml/cell-options.interface';
/**
 * Represents the columns of the Kendo UI ExcelExport component for Angular.
 */
export declare class ColumnComponent extends ColumnBase {
    /**
     * The field to which the column is bound.
     */
    field: string;
    /**
     * The options of the column data cells.
     */
    cellOptions: CellOptions;
    /**
     * The options of the column group header cells.
     */
    groupHeaderCellOptions: CellOptions;
    /**
     * The options of the column group footer cells.
     */
    groupFooterCellOptions: CellOptions;
    /**
     * The options of the column footer cell.
     */
    footerCellOptions: CellOptions;
    /**
     * @hidden
     */
    groupHeaderTemplate: GroupHeaderTemplateDirective;
    /**
     * @hidden
     */
    groupFooterTemplate: GroupFooterTemplateDirective;
    /**
     * @hidden
     */
    footerTemplate: FooterTemplateDirective;
    constructor(parent?: ColumnBase);
}
