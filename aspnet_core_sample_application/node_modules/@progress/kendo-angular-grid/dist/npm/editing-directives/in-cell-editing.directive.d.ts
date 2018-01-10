import { FormGroup } from '@angular/forms';
import { EditingDirectiveBase } from './editing-directive-base';
import { GridComponent } from '../grid.component';
import { LocalDataChangesService } from '../editing/local-data-changes.service';
import { CreateFormGroupArgs } from './create-form-group-args.interface';
/**
 * A directive which encapsulates the editing operations of the Grid when using the in-cell editing with Reactive Forms.
 */
export declare class InCellEditingDirective extends EditingDirectiveBase {
    protected grid: GridComponent;
    protected localDataChangesService: LocalDataChangesService;
    /**
     * The function that creates the `FormGroup` for the edited model.
     */
    createFormGroup: (args: CreateFormGroupArgs) => FormGroup;
    constructor(grid: GridComponent, localDataChangesService: LocalDataChangesService);
    protected createModel(args: any): any;
    protected saveModel({dataItem, formGroup, isNew}: any): any;
    /**
     * @hidden
     */
    ngOnInit(): void;
    protected removeHandler(args: any): void;
    protected cellClickHandler(args: any): void;
    protected cellCloseHandler(args: any): void;
}
