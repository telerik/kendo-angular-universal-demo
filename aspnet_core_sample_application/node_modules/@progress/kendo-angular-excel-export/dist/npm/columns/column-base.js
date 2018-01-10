"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var ColumnBase = (function () {
    function ColumnBase(parent) {
        this.parent = parent;
    }
    Object.defineProperty(ColumnBase.prototype, "level", {
        /**
         * @hidden
         */
        get: function () {
            return this.parent ? this.parent.level + 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    return ColumnBase;
}());
ColumnBase.propDecorators = {
    'title': [{ type: core_1.Input },],
    'width': [{ type: core_1.Input },],
    'locked': [{ type: core_1.Input },],
    'hidden': [{ type: core_1.Input },],
    'headerCellOptions': [{ type: core_1.Input },],
    'children': [{ type: core_1.ContentChildren, args: [ColumnBase,] },],
};
exports.ColumnBase = ColumnBase;
