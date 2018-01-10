import { EventEmitter, ElementRef, Directive, Output } from '@angular/core';
import Draggable from '@telerik/kendo-draggable';
/**
 * @hidden
 */
var KendoDraggableDirective = (function () {
    function KendoDraggableDirective(ngEl) {
        var _this = this;
        this.kendoDrag = new EventEmitter();
        this.kendoPress = new EventEmitter();
        this.kendoRelease = new EventEmitter();
        this.draggable = new Draggable({
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
export { KendoDraggableDirective };
KendoDraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoDraggable]'
            },] },
];
/** @nocollapse */
KendoDraggableDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
KendoDraggableDirective.propDecorators = {
    'kendoDrag': [{ type: Output },],
    'kendoPress': [{ type: Output },],
    'kendoRelease': [{ type: Output },],
};
