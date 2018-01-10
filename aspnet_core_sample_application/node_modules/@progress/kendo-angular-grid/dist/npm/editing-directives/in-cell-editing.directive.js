"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var editing_directive_base_1 = require("./editing-directive-base");
var grid_component_1 = require("../grid.component");
var local_data_changes_service_1 = require("../editing/local-data-changes.service");
var utils_1 = require("./utils");
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
        utils_1.markAllAsTouched(formGroup);
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
}(editing_directive_base_1.EditingDirectiveBase));
InCellEditingDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoGridInCellEditing]'
            },] },
];
/** @nocollapse */
InCellEditingDirective.ctorParameters = function () { return [
    { type: grid_component_1.GridComponent, },
    { type: local_data_changes_service_1.LocalDataChangesService, },
]; };
InCellEditingDirective.propDecorators = {
    'createFormGroup': [{ type: core_1.Input, args: ['kendoGridInCellEditing',] },],
};
exports.InCellEditingDirective = InCellEditingDirective;
