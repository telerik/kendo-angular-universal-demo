import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { EditingDirectiveBase } from './editing-directive-base';
import { GridComponent } from '../grid.component';
import { LocalDataChangesService } from '../editing/local-data-changes.service';
import { markAllAsTouched } from './utils';
/**
 * A directive which encapsulates the editing operations of the Grid when using the in-cell editing with Reactive Forms.
 */
var InCellEditingDirective = (function (_super) {
    tslib_1.__extends(InCellEditingDirective, _super);
    function InCellEditingDirective(grid, localDataChangesService) {
        var _this = _super.call(this, grid, localDataChangesService) || this;
        _this.grid = grid;
        _this.localDataChangesService = localDataChangesService;
        return _this;
    }
    // Need mixin
    InCellEditingDirective.prototype.createModel = function (args) {
        return this.createFormGroup(args);
    };
    InCellEditingDirective.prototype.saveModel = function (_a) {
        var dataItem = _a.dataItem, formGroup = _a.formGroup, isNew = _a.isNew;
        if (!formGroup.dirty && !isNew) {
            return;
        }
        if (formGroup.valid) {
            this.editService.assignValues(dataItem, formGroup.value);
            return dataItem;
        }
        markAllAsTouched(formGroup);
    };
    /**
     * @hidden
     */
    InCellEditingDirective.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.subscriptions
            .add(this.grid.cellClick.subscribe(this.cellClickHandler.bind(this)))
            .add(this.grid.cellClose.subscribe(this.cellCloseHandler.bind(this)));
    };
    InCellEditingDirective.prototype.removeHandler = function (args) {
        _super.prototype.removeHandler.call(this, args);
        this.grid.cancelCell();
    };
    InCellEditingDirective.prototype.cellClickHandler = function (args) {
        if (!args.isEdited && args.type !== 'contextmenu') {
            this.grid.editCell(args.rowIndex, args.columnIndex, this.createFormGroup(args));
        }
    };
    InCellEditingDirective.prototype.cellCloseHandler = function (args) {
        var formGroup = args.formGroup, dataItem = args.dataItem;
        if (!formGroup.valid) {
            args.preventDefault();
        }
        else if (formGroup.dirty) {
            this.editService.assignValues(dataItem, formGroup.value);
            this.editService.update(dataItem);
        }
    };
    return InCellEditingDirective;
}(EditingDirectiveBase));
export { InCellEditingDirective };
InCellEditingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoGridInCellEditing]'
            },] },
];
/** @nocollapse */
InCellEditingDirective.ctorParameters = function () { return [
    { type: GridComponent, },
    { type: LocalDataChangesService, },
]; };
InCellEditingDirective.propDecorators = {
    'createFormGroup': [{ type: Input, args: ['kendoGridInCellEditing',] },],
};
