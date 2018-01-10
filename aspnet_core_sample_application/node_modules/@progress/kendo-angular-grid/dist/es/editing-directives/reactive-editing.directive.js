import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { RowEditingDirectiveBase } from './row-editing-directive-base';
import { GridComponent } from '../grid.component';
import { LocalDataChangesService } from '../editing/local-data-changes.service';
import { markAllAsTouched } from './utils';
/**
 * A directive which encapsulates the editing operations of the Grid when using Reactive Forms.
 */
var ReactiveEditingDirective = (function (_super) {
    tslib_1.__extends(ReactiveEditingDirective, _super);
    function ReactiveEditingDirective(grid, localDataChangesService) {
        var _this = _super.call(this, grid, localDataChangesService) || this;
        _this.grid = grid;
        _this.localDataChangesService = localDataChangesService;
        return _this;
    }
    ReactiveEditingDirective.prototype.createModel = function (args) {
        return this.createFormGroup(args);
    };
    ReactiveEditingDirective.prototype.saveModel = function (_a) {
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
    return ReactiveEditingDirective;
}(RowEditingDirectiveBase));
export { ReactiveEditingDirective };
ReactiveEditingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoGridReactiveEditing]'
            },] },
];
/** @nocollapse */
ReactiveEditingDirective.ctorParameters = function () { return [
    { type: GridComponent, },
    { type: LocalDataChangesService, },
]; };
ReactiveEditingDirective.propDecorators = {
    'createFormGroup': [{ type: Input, args: ['kendoGridReactiveEditing',] },],
};
