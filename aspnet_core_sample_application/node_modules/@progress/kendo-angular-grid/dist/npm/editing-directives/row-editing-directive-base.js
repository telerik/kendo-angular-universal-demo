"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editing_directive_base_1 = require("./editing-directive-base");
var local_row_edit_service_1 = require("./local-row-edit.service");
/**
 * @hidden
 */
var RowEditingDirectiveBase = (function (_super) {
    tslib_1.__extends(RowEditingDirectiveBase, _super);
    function RowEditingDirectiveBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    RowEditingDirectiveBase.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.subscriptions
            .add(this.grid.edit.subscribe(this.editHandler.bind(this)));
    };
    RowEditingDirectiveBase.prototype.createDefaultService = function () {
        return new local_row_edit_service_1.LocalRowEditService(this.grid, this.localDataChangesService);
    };
    RowEditingDirectiveBase.prototype.addHandler = function () {
        this.closeEditor();
        _super.prototype.addHandler.call(this);
    };
    RowEditingDirectiveBase.prototype.editHandler = function (args) {
        this.closeEditor();
        this.rowIndex = args.rowIndex;
        this.grid.editRow(args.rowIndex, this.createModel(args));
    };
    RowEditingDirectiveBase.prototype.saveHandler = function (args) {
        _super.prototype.saveHandler.call(this, args);
        this.clean();
    };
    RowEditingDirectiveBase.prototype.closeEditor = function (rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.rowIndex; }
        _super.prototype.closeEditor.call(this, rowIndex);
        this.clean();
    };
    RowEditingDirectiveBase.prototype.clean = function () {
        delete this.rowIndex;
    };
    return RowEditingDirectiveBase;
}(editing_directive_base_1.EditingDirectiveBase));
exports.RowEditingDirectiveBase = RowEditingDirectiveBase;
