import { DoCheck } from '@angular/core';
import { EditService } from '../editing/edit.service';
import { ColumnBase } from '../columns/column-base';
import { FormGroup } from '@angular/forms';
import { CellContext } from './common/cell-context';
/**
 * @hidden
 */
export declare class CellComponent implements DoCheck {
    private editService;
    private cellContext;
    readonly commandCellClass: boolean;
    column: ColumnBase;
    isNew: boolean;
    rowIndex: number;
    dataItem: any;
    readonly isEdited: boolean;
    readonly formGroup: FormGroup;
    readonly templateContext: any;
    readonly format: string | undefined;
    private _rowIndex;
    private readonly isColumnEditable;
    private _templateContext;
    constructor(editService: EditService, cellContext: CellContext);
    ngDoCheck(): void;
    private isCommand(column);
    private isFieldEditable(editContext, column);
    private updateCellContext();
}
