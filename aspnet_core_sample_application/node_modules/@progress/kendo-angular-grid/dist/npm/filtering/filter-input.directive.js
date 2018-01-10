"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
/**
 * @hidden
 */
var FilterInputDirective = (function () {
    function FilterInputDirective(valueAccessors) {
        this.change = new core_1.EventEmitter();
        this.accessor = valueAccessors[0];
    }
    Object.defineProperty(FilterInputDirective.prototype, "value", {
        set: function (value) {
            this.accessor.writeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    FilterInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.accessor.registerOnChange(function (x) { return _this.change.emit(x); });
    };
    return FilterInputDirective;
}());
FilterInputDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoFilterInput]'
            },] },
];
/** @nocollapse */
FilterInputDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: core_1.Self }, { type: core_1.Inject, args: [forms_1.NG_VALUE_ACCESSOR,] },] },
]; };
FilterInputDirective.propDecorators = {
    'value': [{ type: core_1.Input },],
};
exports.FilterInputDirective = FilterInputDirective;
