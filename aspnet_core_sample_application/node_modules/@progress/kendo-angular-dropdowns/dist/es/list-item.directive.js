import { Directive, ElementRef } from '@angular/core';
/**
 * @hidden
 */
var ListItemDirective = (function () {
    function ListItemDirective(element) {
        this.element = element;
    }
    return ListItemDirective;
}());
export { ListItemDirective };
ListItemDirective.decorators = [
    { type: Directive, args: [{
                selector: 'li' // tslint:disable-line
            },] },
];
/** @nocollapse */
ListItemDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
