"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grid_component_1 = require("../grid.component");
var resize_service_1 = require("./resize.service");
/**
 * @hidden
 */
var ResizableContainerDirective = (function () {
    function ResizableContainerDirective(el, renderer, resizeService, grid) {
        this.el = el;
        this.renderer = renderer;
        this.resizeService = resizeService;
        this.grid = grid;
        this.enabled = false;
    }
    Object.defineProperty(ResizableContainerDirective.prototype, "lockedWidth", {
        set: function (value) {
            this._lockedWidth = value;
            if (this.enabled) {
                this.attachResize();
                this.resize();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizableContainerDirective.prototype, "kendoGridResizableContainer", {
        set: function (enabled) {
            var refresh = enabled !== this.enabled;
            this.enabled = enabled;
            if (refresh) {
                this.attachResize();
                this.resize();
            }
        },
        enumerable: true,
        configurable: true
    });
    ResizableContainerDirective.prototype.ngOnDestroy = function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    };
    ResizableContainerDirective.prototype.attachResize = function () {
        if (this.resizeSubscription && !this.enabled) {
            this.resizeSubscription.unsubscribe();
            this.resizeSubscription = null;
        }
        if (!this.resizeSubscription && this.enabled) {
            this.resizeSubscription = this.resizeService.changes.subscribe(this.resize.bind(this));
        }
    };
    ResizableContainerDirective.prototype.resize = function () {
        if (this.grid && this.grid.wrapper) {
            var containerElement = this.grid.wrapper.nativeElement;
            var width = this.enabled ? Math.max(containerElement.clientWidth - this._lockedWidth, 0) + "px" : "";
            this.renderer.setStyle(this.el.nativeElement, "width", width);
        }
    };
    return ResizableContainerDirective;
}());
ResizableContainerDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoGridResizableContainer]'
            },] },
];
/** @nocollapse */
ResizableContainerDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: core_1.Renderer2, },
    { type: resize_service_1.ResizeService, },
    { type: grid_component_1.GridComponent, decorators: [{ type: core_1.Optional },] },
]; };
ResizableContainerDirective.propDecorators = {
    'lockedWidth': [{ type: core_1.Input, args: ['lockedWidth',] },],
    'kendoGridResizableContainer': [{ type: core_1.Input },],
};
exports.ResizableContainerDirective = ResizableContainerDirective;
