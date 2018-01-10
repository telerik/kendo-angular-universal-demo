"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PDFTemplateDirective = (function () {
    function PDFTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return PDFTemplateDirective;
}());
PDFTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[kendoPDFTemplate]'
            },] },
];
/** @nocollapse */
PDFTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
]; };
exports.PDFTemplateDirective = PDFTemplateDirective;
