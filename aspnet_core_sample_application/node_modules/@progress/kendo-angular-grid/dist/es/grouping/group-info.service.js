import { isColumnComponent } from '../columns/column.component';
import { ColumnList } from "../columns/column-list";
import { expandColumns } from "../columns/column-common";
/**
 * @hidden
 */
var GroupInfoService = (function () {
    function GroupInfoService() {
        this._columnList = ColumnList.empty;
    }
    Object.defineProperty(GroupInfoService.prototype, "columns", {
        get: function () {
            return expandColumns(this._columnList().toArray()).filter(isColumnComponent);
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
export { GroupInfoService };
