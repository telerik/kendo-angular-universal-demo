"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var selection_service_1 = require("./selection.service");
/**
 * @hidden
 */
var SelectableDirective = (function () {
    function SelectableDirective(selectionService) {
        this.multipleSelection = false;
        this.selectionService = selectionService;
    }
    Object.defineProperty(SelectableDirective.prototype, "focusedClassName", {
        get: function () {
            return this.selectionService.isFocused(this.index);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectableDirective.prototype, "selectedClassName", {
        get: function () {
            return this.selectionService.isSelected(this.index);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectableDirective.prototype, "ariaSelected", {
        get: function () {
            return this.selectionService.isSelected(this.index) ? true : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SelectableDirective.prototype.onClick = function (event) {
        event.stopPropagation();
        if (this.multipleSelection) {
            if (this.selectionService.isSelected(this.index)) {
                this.selectionService.unselect(this.index);
            }
            else {
                this.selectionService.add(this.index);
            }
        }
        else {
            this.selectionService.change(this.index);
        }
    };
    return SelectableDirective;
}());
SelectableDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoDropDownsSelectable]'
            },] },
];
/** @nocollapse */
SelectableDirective.ctorParameters = function () { return [
    { type: selection_service_1.SelectionService, },
]; };
SelectableDirective.propDecorators = {
    'index': [{ type: core_1.Input },],
    'multipleSelection': [{ type: core_1.Input },],
    'focusedClassName': [{ type: core_1.HostBinding, args: ['class.k-state-focused',] },],
    'selectedClassName': [{ type: core_1.HostBinding, args: ['class.k-state-selected',] },],
    'ariaSelected': [{ type: core_1.HostBinding, args: ['attr.aria-selected',] },],
    'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
};
exports.SelectableDirective = SelectableDirective;
