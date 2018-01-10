import { Directive, ViewContainerRef, Input } from '@angular/core';
/**
 * @hidden
 */
var TemplateContextDirective = (function () {
    function TemplateContextDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TemplateContextDirective.prototype, "templateContext", {
        set: function (context) {
            if (this.insertedViewRef) {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
                this.insertedViewRef = undefined;
            }
            if (context.templateRef) {
                this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    return TemplateContextDirective;
}());
export { TemplateContextDirective };
TemplateContextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[templateContext]' // tslint:disable-line
            },] },
];
/** @nocollapse */
TemplateContextDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
TemplateContextDirective.propDecorators = {
    'templateContext': [{ type: Input },],
};
