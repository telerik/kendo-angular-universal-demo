"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var edit_service_1 = require("../editing/edit.service");
var command_column_component_1 = require("../columns/command-column.component");
var column_component_1 = require("../columns/column.component");
var utils_1 = require("../utils");
var cell_context_1 = require("./common/cell-context");
/**
 * @hidden
 */
var CellComponent = (function () {
    function CellComponent(editService, cellContext) {
        this.editService = editService;
        this.cellContext = cellContext;
        this.isNew = false;
        this._templateContext = {};
    }
    Object.defineProperty(CellComponent.prototype, "commandCellClass", {
        get: function () {
            return this.isCommand(this.column);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "rowIndex", {
        get: function () {
            return this._rowIndex;
        },
        set: function (index) {
            this._rowIndex = index;
            this.updateCellContext();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "isEdited", {
        get: function () {
            if (!this.isColumnEditable) {
                return false;
            }
            var editContext = this.editService.columnContext(this.rowIndex, this.column);
            return this.isFieldEditable(editContext, this.column);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "formGroup", {
        get: function () {
            return this.editService.context(this.rowIndex).group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "templateContext", {
        get: function () {
            this._templateContext.$implicit = this.formGroup;
            this._templateContext.isNew = this.isNew;
            this._templateContext.column = this.column;
            this._templateContext.dataItem = this.dataItem;
            this._templateContext.formGroup = this.formGroup;
            this._templateContext.rowIndex = this.rowIndex;
            return this._templateContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "format", {
        get: function () {
            if (column_component_1.isColumnComponent(this.column) && !utils_1.isNullOrEmptyString(this.column.format)) {
                return utils_1.extractFormat(this.column.format);
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "isColumnEditable", {
        get: function () {
            if (!this.column || this.isCommand(this.column)) {
                return false;
            }
            return this.column.editable !== false;
        },
        enumerable: true,
        configurable: true
    });
    CellComponent.prototype.ngDoCheck = function () {
        this.updateCellContext();
    };
    CellComponent.prototype.isCommand = function (column) {
        return column instanceof command_column_component_1.CommandColumnComponent;
    };
    CellComponent.prototype.isFieldEditable = function (editContext, column) {
        if (!utils_1.isPresent(editContext)) {
            return false;
        }
        if (utils_1.isPresent(column.editTemplate)) {
            return true;
        }
        return utils_1.isPresent(editContext.group) && utils_1.isPresent(editContext.group.get(column.field));
    };
    CellComponent.prototype.updateCellContext = function () {
        if (this.cellContext) {
            this.cellContext.rowIndex = this._rowIndex;
        }
    };
    return CellComponent;
}());
CellComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: '[kendoGridCell]',
                template: "\n        <ng-container [ngSwitch]=\"isEdited\">\n            <ng-content *ngSwitchCase=\"false\"></ng-content>\n            <ng-container *ngSwitchCase=\"true\">\n                <ng-template\n                    *ngIf=\"column.editTemplateRef\"\n                    [ngTemplateOutlet]=\"column.editTemplateRef\"\n                    [ngTemplateOutletContext]=\"templateContext\">\n                </ng-template>\n                <ng-container [ngSwitch]=\"column.editor\" *ngIf=\"!column.editTemplate\">\n                    <kendo-numerictextbox\n                        *ngSwitchCase=\"'numeric'\"\n                        [format]=\"format\"\n                        [formControl]=\"formGroup.get(column.field)\"\n                    ></kendo-numerictextbox>\n\n                    <kendo-datepicker\n                        *ngSwitchCase=\"'date'\"\n                        [format]=\"format\"\n                        [formControl]=\"formGroup.get(column.field)\"\n                    ></kendo-datepicker>\n\n                    <input\n                        *ngSwitchCase=\"'boolean'\"\n                        type=\"checkbox\"\n                        [formControl]=\"formGroup.get(column.field)\"\n                    />\n\n                    <input\n                        *ngSwitchDefault\n                        type=\"text\"\n                        class=\"k-textbox\"\n                        [formControl]=\"formGroup.get(column.field)\"\n                    />\n                </ng-container>\n            </ng-container>\n        </ng-container>\n    "
            },] },
];
/** @nocollapse */
CellComponent.ctorParameters = function () { return [
    { type: edit_service_1.EditService, },
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [cell_context_1.CELL_CONTEXT,] },] },
]; };
CellComponent.propDecorators = {
    'commandCellClass': [{ type: core_1.HostBinding, args: ['class.k-command-cell',] },],
    'column': [{ type: core_1.Input },],
    'isNew': [{ type: core_1.Input },],
    'rowIndex': [{ type: core_1.Input },],
    'dataItem': [{ type: core_1.Input },],
};
exports.CellComponent = CellComponent;
