import { Input } from '@angular/core';
import { LocalEditService } from './local-edit.service';
import { Observable } from 'rxjs/Observable';
/**
 * @hidden
 */
var EditingDirectiveBase = (function () {
    function EditingDirectiveBase(grid, localDataChangesService) {
        this.grid = grid;
        this.localDataChangesService = localDataChangesService;
        this.defaultEditService = this.createDefaultService();
    }
    Object.defineProperty(EditingDirectiveBase.prototype, "editService", {
        get: function () {
            return this.userEditService || this.defaultEditService;
        },
        // Consider adding support for the dependency injection of the service to allow for specifying a generic service without code.
        // The Input should still be kept.
        /**
         * The edit service that will handle the operations.
         */
        set: function (value) {
            this.userEditService = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    EditingDirectiveBase.prototype.ngOnInit = function () {
        this.subscriptions = this.grid
            .add.subscribe(this.addHandler.bind(this))
            .add(this.grid.remove.subscribe(this.removeHandler.bind(this)))
            .add(this.grid.cancel.subscribe(this.cancelHandler.bind(this)))
            .add(this.grid.save.subscribe(this.saveHandler.bind(this)))
            .add(this.grid.dataStateChange.subscribe(this.onStateChange.bind(this)));
    };
    /**
     * @hidden
     */
    EditingDirectiveBase.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    EditingDirectiveBase.prototype.createDefaultService = function () {
        return new LocalEditService(this.grid, this.localDataChangesService);
    };
    EditingDirectiveBase.prototype.addHandler = function () {
        this.grid.addRow(this.createModel({ isNew: true }));
    };
    EditingDirectiveBase.prototype.saveHandler = function (args) {
        var item = this.saveModel(args);
        if (item) {
            if (args.isNew) {
                this.editService.create(item);
            }
            else {
                this.editService.update(item);
            }
        }
        this.grid.closeRow(args.rowIndex);
    };
    EditingDirectiveBase.prototype.cancelHandler = function (_a) {
        var rowIndex = _a.rowIndex;
        this.closeEditor(rowIndex);
    };
    EditingDirectiveBase.prototype.removeHandler = function (_a) {
        var _this = this;
        var dataItem = _a.dataItem;
        var removeItem = function (shouldRemove) {
            if (shouldRemove) {
                _this.editService.remove(dataItem);
            }
        };
        if (this.removeConfirmation) {
            var result = this.removeConfirmation(dataItem);
            if (result instanceof Promise) {
                result.then(removeItem);
            }
            else if (result instanceof Observable) {
                result.take(1).subscribe(removeItem);
            }
            else {
                removeItem(result);
            }
        }
        else {
            removeItem(true);
        }
    };
    EditingDirectiveBase.prototype.onStateChange = function () {
        this.closeEditor();
    };
    EditingDirectiveBase.prototype.closeEditor = function (rowIndex) {
        this.grid.closeRow(rowIndex);
    };
    return EditingDirectiveBase;
}());
export { EditingDirectiveBase };
EditingDirectiveBase.propDecorators = {
    'editService': [{ type: Input },],
    'removeConfirmation': [{ type: Input },],
};
