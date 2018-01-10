import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { RowEditingDirectiveBase } from './row-editing-directive-base';
import { GridComponent } from '../grid.component';
import { LocalDataChangesService } from '../editing/local-data-changes.service';
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
}(RowEditingDirectiveBase));
export { TemplateEditingDirective };
TemplateEditingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoGridTemplateEditing]'
            },] },
];
/** @nocollapse */
TemplateEditingDirective.ctorParameters = function () { return [
    { type: GridComponent, },
    { type: LocalDataChangesService, },
]; };
TemplateEditingDirective.propDecorators = {
    'createNewItem': [{ type: Input, args: ['kendoGridTemplateEditing',] },],
};
