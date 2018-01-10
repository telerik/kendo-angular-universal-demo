import { Input, Directive, EventEmitter, Inject, Self } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * @hidden
 */
var FilterInputDirective = (function () {
    function FilterInputDirective(valueAccessors) {
        this.change = new EventEmitter();
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
export { FilterInputDirective };
FilterInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoFilterInput]'
            },] },
];
/** @nocollapse */
FilterInputDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: Self }, { type: Inject, args: [NG_VALUE_ACCESSOR,] },] },
]; };
FilterInputDirective.propDecorators = {
    'value': [{ type: Input },],
};
