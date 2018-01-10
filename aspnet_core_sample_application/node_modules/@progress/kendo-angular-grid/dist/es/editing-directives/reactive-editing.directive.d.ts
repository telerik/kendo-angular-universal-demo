import { FormGroup } from '@angular/forms';
import { RowEditingDirectiveBase } from './row-editing-directive-base';
import { GridComponent } from '../grid.component';
import { LocalDataChangesService } from '../editing/local-data-changes.service';
import { CreateFormGroupArgs } from './create-form-group-args.interface';
/**
 * A directive which encapsulates the editing operations of the Grid when using Reactive Forms.
 */
export declare class ReactiveEditingDirective extends RowEditingDirectiveBase {
    protected grid: GridComponent;
    protected localDataChangesService: LocalDataChangesService;
    /**
     * The function that creates the `FormGroup` for the edited model.
     */
    createFormGroup: (args: CreateFormGroupArgs) => FormGroup;
    constructor(grid: GridComponent, localDataChangesService: LocalDataChangesService);
    protected createModel(args: any): any;
    protected saveModel({dataItem, formGroup, isNew}: any): any;
}
