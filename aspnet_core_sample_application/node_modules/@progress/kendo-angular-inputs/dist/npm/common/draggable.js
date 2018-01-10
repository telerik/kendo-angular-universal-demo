"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kendo_draggable_1 = require("@telerik/kendo-draggable");
/**
 * @hidden
 */
var KendoDraggableDirective = (function () {
    function KendoDraggableDirective(ngEl) {
        var _this = this;
        this.kendoDrag = new core_1.EventEmitter();
        this.kendoPress = new core_1.EventEmitter();
        this.kendoRelease = new core_1.EventEmitter();
        this.draggable = new kendo_draggable_1.default({
            drag: function (e) {
                if (e.hasOwnProperty("originalEvent")) {
                    e.originalEvent.preventDefault();
                }
                _this.kendoDrag.next(e);
            },
            press: function (e) { return _this.kendoPress.next(e); },
            release: function (e) { return _this.kendoRelease.next(e); }
        });
        this.draggable.bindTo(ngEl.nativeElement);
    }
    KendoDraggableDirective.prototype.ngOnDestroy = function () {
        this.draggable.destroy();
    };
    return KendoDraggableDirective;
}());
KendoDraggableDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoDraggable]'
            },] },
];
/** @nocollapse */
KendoDraggableDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
KendoDraggableDirective.propDecorators = {
    'kendoDrag': [{ type: core_1.Output },],
    'kendoPress': [{ type: core_1.Output },],
    'kendoRelease': [{ type: core_1.Output },],
};
exports.KendoDraggableDirective = KendoDraggableDirective;
