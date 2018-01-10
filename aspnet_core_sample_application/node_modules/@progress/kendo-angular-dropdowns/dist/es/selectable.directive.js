import { Directive, Input, HostBinding, HostListener } from '@angular/core';
import { SelectionService } from './selection.service';
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
export { SelectableDirective };
SelectableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoDropDownsSelectable]'
            },] },
];
/** @nocollapse */
SelectableDirective.ctorParameters = function () { return [
    { type: SelectionService, },
]; };
SelectableDirective.propDecorators = {
    'index': [{ type: Input },],
    'multipleSelection': [{ type: Input },],
    'focusedClassName': [{ type: HostBinding, args: ['class.k-state-focused',] },],
    'selectedClassName': [{ type: HostBinding, args: ['class.k-state-selected',] },],
    'ariaSelected': [{ type: HostBinding, args: ['attr.aria-selected',] },],
    'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
};
