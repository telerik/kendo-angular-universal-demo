"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var row_editing_directive_base_1 = require("./row-editing-directive-base");
var grid_component_1 = require("../grid.component");
var local_data_changes_service_1 = require("../editing/local-data-changes.service");
var utils_1 = require("./utils");
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
        utils_1.markAllAsTouched(formGroup);
    };
    return ReactiveEditingDirective;
}(row_editing_directive_base_1.RowEditingDirectiveBase));
ReactiveEditingDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoGridReactiveEditing]'
            },] },
];
/** @nocollapse */
ReactiveEditingDirective.ctorParameters = function () { return [
    { type: grid_component_1.GridComponent, },
    { type: local_data_changes_service_1.LocalDataChangesService, },
]; };
ReactiveEditingDirective.propDecorators = {
    'createFormGroup': [{ type: core_1.Input, args: ['kendoGridReactiveEditing',] },],
};
exports.ReactiveEditingDirective = ReactiveEditingDirective;
