"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var ListItemDirective = (function () {
    function ListItemDirective(element) {
        this.element = element;
    }
    return ListItemDirective;
}());
ListItemDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'li' // tslint:disable-line
            },] },
];
/** @nocollapse */
ListItemDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
exports.ListItemDirective = ListItemDirective;
