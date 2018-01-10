import { Directive, Optional, TemplateRef } from '@angular/core';
var PDFTemplateDirective = (function () {
    function PDFTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return PDFTemplateDirective;
}());
export { PDFTemplateDirective };
PDFTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kendoPDFTemplate]'
            },] },
];
/** @nocollapse */
PDFTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef, decorators: [{ type: Optional },] },
]; };
