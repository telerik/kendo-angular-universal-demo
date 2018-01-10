"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forEachColumn = function (list, callback) {
    list.forEach(function (column) {
        callback(column);
        if (column.children && column.children.length > 1) {
            forEachColumn(column.children.toArray().slice(1), callback);
        }
    });
};
/**
 * @hidden
 */
var ColumnList = (function () {
    function ColumnList(columns) {
        this.columns = columns;
    }
    ColumnList.prototype.forEach = function (callback) {
        forEachColumn(this.columns, callback);
    };
    ColumnList.prototype.filter = function (callback) {
        var result = [];
        forEachColumn(this.columns, function (column) {
            if (callback(column)) {
                result.push(column);
            }
        });
        return result;
    };
    ColumnList.prototype.toArray = function () {
        var result = [];
        forEachColumn(this.columns, function (column) {
            result.push(column);
        });
        return result;
    };
    return ColumnList;
}());
ColumnList.empty = function () { return new ColumnList(new core_1.QueryList()); };
exports.ColumnList = ColumnList;
