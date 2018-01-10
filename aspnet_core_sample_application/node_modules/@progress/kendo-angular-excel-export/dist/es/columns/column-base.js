import { Input, ContentChildren } from '@angular/core';
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
export { ColumnBase };
ColumnBase.propDecorators = {
    'title': [{ type: Input },],
    'width': [{ type: Input },],
    'locked': [{ type: Input },],
    'hidden': [{ type: Input },],
    'headerCellOptions': [{ type: Input },],
    'children': [{ type: ContentChildren, args: [ColumnBase,] },],
};
