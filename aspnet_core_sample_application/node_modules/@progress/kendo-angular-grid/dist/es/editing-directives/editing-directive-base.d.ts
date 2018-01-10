import { OnInit, OnDestroy } from '@angular/core';
import { GridComponent } from '../grid.component';
import { EditService } from './edit-service.interface';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { LocalDataChangesService } from '../editing/local-data-changes.service';
/**
 * @hidden
 */
export declare abstract class EditingDirectiveBase implements OnInit, OnDestroy {
    protected grid: GridComponent;
    protected localDataChangesService: LocalDataChangesService;
    /**
     * The edit service that will handle the operations.
     */
    editService: EditService;
    /**
     * A function that is called to confirm if the `dataItem` will be removed.
     */
    removeConfirmation: (dataItem: any) => Promise<boolean> | Observable<boolean> | boolean;
    protected subscriptions: Subscription;
    protected defaultEditService: EditService;
    protected userEditService: EditService;
    protected abstract createModel(args: any): any;
    protected abstract saveModel(args: any): any;
    constructor(grid: GridComponent, localDataChangesService: LocalDataChangesService);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    protected createDefaultService(): EditService;
    protected addHandler(): void;
    protected saveHandler(args: any): void;
    protected cancelHandler({rowIndex}: any): void;
    protected removeHandler({dataItem}: any): void;
    protected onStateChange(): void;
    protected closeEditor(rowIndex?: number): void;
}
