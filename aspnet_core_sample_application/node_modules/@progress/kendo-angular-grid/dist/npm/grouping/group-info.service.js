"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var column_component_1 = require("../columns/column.component");
var column_list_1 = require("../columns/column-list");
var column_common_1 = require("../columns/column-common");
/**
 * @hidden
 */
var GroupInfoService = (function () {
    function GroupInfoService() {
        this._columnList = column_list_1.ColumnList.empty;
    }
    Object.defineProperty(GroupInfoService.prototype, "columns", {
        get: function () {
            return column_common_1.expandColumns(this._columnList().toArray()).filter(column_component_1.isColumnComponent);
        },
        enumerable: true,
        configurable: true
    });
    GroupInfoService.prototype.registerColumnsContainer = function (columns) {
        this._columnList = columns;
    };
    GroupInfoService.prototype.formatForGroup = function (item) {
        var column = this.columnForGroup(item);
        return column ? column.format : "";
    };
    GroupInfoService.prototype.groupTitle = function (item) {
        var column = this.columnForGroup(item);
        return column ? (column.title || column.field) : this.groupField(item);
    };
    GroupInfoService.prototype.groupHeaderTemplate = function (item) {
        var column = this.columnForGroup(item);
        return column ? column.groupHeaderTemplateRef : undefined;
    };
    GroupInfoService.prototype.groupField = function (group) {
        return group.data ? group.data.field : group.field;
    };
    GroupInfoService.prototype.columnForGroup = function (group) {
        var field = this.groupField(group);
        var column = this.columns.filter(function (x) { return x.field === field; })[0];
        return column;
    };
    return GroupInfoService;
}());
exports.GroupInfoService = GroupInfoService;
