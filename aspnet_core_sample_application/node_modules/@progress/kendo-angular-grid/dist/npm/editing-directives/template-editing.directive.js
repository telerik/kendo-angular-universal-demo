"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var row_editing_directive_base_1 = require("./row-editing-directive-base");
var grid_component_1 = require("../grid.component");
var local_data_changes_service_1 = require("../editing/local-data-changes.service");
/**
 * A directive which encapsulates the editing operations of the Grid when using the Template-Driven Angular Forms.
 */
var TemplateEditingDirective = (function (_super) {
    tslib_1.__extends(TemplateEditingDirective, _super);
    function TemplateEditingDirective(grid, localDataChangesService) {
        var _this = _super.call(this, grid, localDataChangesService) || this;
        _this.grid = grid;
        _this.localDataChangesService = localDataChangesService;
        return _this;
    }
    TemplateEditingDirective.prototype.editHandler = function (args) {
        _super.prototype.editHandler.call(this, args);
        this.dataItem = args.dataItem;
        this.originalValues = {};
        this.editService.assignValues(this.originalValues, this.dataItem);
    };
    TemplateEditingDirective.prototype.closeEditor = function (rowIndex) {
        if (this.dataItem) {
            this.editService.assignValues(this.dataItem, this.originalValues);
        }
        _super.prototype.closeEditor.call(this, rowIndex);
    };
    TemplateEditingDirective.prototype.createModel = function (args) {
        if (args.isNew) {
            return this.createNewItem();
        }
    };
    TemplateEditingDirective.prototype.saveModel = function (args) {
        return args.dataItem;
    };
    TemplateEditingDirective.prototype.clean = function () {
        _super.prototype.clean.call(this);
        delete this.dataItem;
    };
    return TemplateEditingDirective;
}(row_editing_directive_base_1.RowEditingDirectiveBase));
TemplateEditingDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoGridTemplateEditing]'
            },] },
];
/** @nocollapse */
TemplateEditingDirective.ctorParameters = function () { return [
    { type: grid_component_1.GridComponent, },
    { type: local_data_changes_service_1.LocalDataChangesService, },
]; };
TemplateEditingDirective.propDecorators = {
    'createNewItem': [{ type: core_1.Input, args: ['kendoGridTemplateEditing',] },],
};
exports.TemplateEditingDirective = TemplateEditingDirective;
