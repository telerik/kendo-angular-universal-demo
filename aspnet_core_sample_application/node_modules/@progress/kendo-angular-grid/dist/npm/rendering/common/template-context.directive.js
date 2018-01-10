"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var TemplateContextDirective = (function () {
    function TemplateContextDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TemplateContextDirective.prototype, "templateContext", {
        set: function (context) {
            this.removeView();
            if (context.templateRef) {
                this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    TemplateContextDirective.prototype.ngOnDestroy = function () {
        this.removeView();
    };
    TemplateContextDirective.prototype.removeView = function () {
        if (this.insertedViewRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
            this.insertedViewRef = undefined;
        }
    };
    return TemplateContextDirective;
}());
TemplateContextDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[templateContext]' // tslint:disable-line:directive-selector
            },] },
];
/** @nocollapse */
TemplateContextDirective.ctorParameters = function () { return [
    { type: core_1.ViewContainerRef, },
]; };
TemplateContextDirective.propDecorators = {
    'templateContext': [{ type: core_1.Input },],
};
exports.TemplateContextDirective = TemplateContextDirective;
