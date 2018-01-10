"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kendo_drawing_1 = require("@progress/kendo-drawing");
var kendo_file_saver_1 = require("@progress/kendo-file-saver");
var pdf_template_directive_1 = require("./pdf-template.directive");
var pdf_margin_component_1 = require("./pdf-margin.component");
var compile_template_1 = require("./compile-template");
/**
 * Represents the Kendo UI PDF Export component for Angular.
 *
 * @example
 * <kendo-pdf-export fileName="Report.pdf" paperSize="A4" [landscape]="true" avoidLinks >
 *   <kendo-pdf-export-margin top="2cm" left="1cm" right="1cm" bottom="2cm"></kendo-pdf-export-margin>
 *   <ng-template kendoPDFTemplate let-pageNum="pageNum" let-totalPages="totalPages">
 *     <div class="page-template">
 *       <div class="header">
 *         <div style="float: right">Page {{ pageNum }} of {{ totalPages }}</div>
 *         Multi-page export with automatic page breaking
 *       </div>
 *       <div class="footer">
 *         Page {{ pageNum }} of {{ totalPages }}
 *       </div>
 *     </div>
 *   </ng-template>
 * </kendo-pdf-export>
 */
var PDFExportComponent = (function () {
    function PDFExportComponent(element) {
        this.element = element;
        /**
         * The creator of the PDF document.
         * @default "Kendo UI PDF Generator"
         */
        this.creator = 'Kendo UI PDF Generator';
        /**
         * Specifies the file name of the exported PDF file.
         * @default "Export.pdf"
         */
        this.fileName = 'export.pdf';
    }
    Object.defineProperty(PDFExportComponent.prototype, "drawMargin", {
        get: function () {
            var marginComponent = this.marginComponent;
            var margin = this.margin;
            if (marginComponent) {
                margin = Object.assign(margin || {}, marginComponent.options);
            }
            return margin;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Saves the content as a PDF file with the specified name
     * @param fileName The name of the exported file name
     */
    PDFExportComponent.prototype.saveAs = function (fileName) {
        if (fileName === void 0) { fileName = this.fileName; }
        this.save(this.element.nativeElement, fileName);
    };
    /**
     * Exports the content as a Group for further processing
     *
     * @return The root group of the exported scene
     */
    PDFExportComponent.prototype.export = function () {
        return this.exportElement(this.element.nativeElement);
    };
    PDFExportComponent.prototype.save = function (element, fileName) {
        var _this = this;
        this.exportElement(element)
            .then(function (group) { return _this.exportGroup(group, _this.pdfOptions()); })
            .then(function (dataUri) { return _this.saveDataUri(dataUri, fileName, _this.saveOptions()); });
    };
    PDFExportComponent.prototype.exportElement = function (element) {
        var promise = this.drawElement(element, this.drawOptions());
        var cleanup = this.cleanup.bind(this);
        promise.then(cleanup, cleanup);
        return promise;
    };
    PDFExportComponent.prototype.cleanup = function () {
        if (this.pageTemplate) {
            this.pageTemplate.destroy();
            delete this.pageTemplate;
        }
    };
    PDFExportComponent.prototype.drawOptions = function () {
        if (this.pageTemplateDirective) {
            this.pageTemplate = compile_template_1.compileTemplate(this.pageTemplateDirective.templateRef);
        }
        return {
            avoidLinks: this.avoidLinks,
            forcePageBreak: this.forcePageBreak,
            keepTogether: this.keepTogether,
            margin: this.drawMargin,
            paperSize: this.paperSize,
            landscape: this.landscape,
            repeatHeaders: this.repeatHeaders,
            scale: this.scale,
            template: this.pageTemplate
        };
    };
    PDFExportComponent.prototype.pdfOptions = function () {
        return {
            author: this.author,
            creator: this.creator,
            date: this.date,
            imgDPI: this.imageResolution,
            keywords: this.keywords,
            landscape: this.landscape,
            margin: this.drawMargin,
            multiPage: true,
            paperSize: this.paperSize,
            producer: this.producer,
            subject: this.subject,
            title: this.title
        };
    };
    PDFExportComponent.prototype.saveOptions = function () {
        return {
            forceProxy: this.forceProxy,
            proxyData: this.proxyData,
            proxyTarget: this.proxyTarget,
            proxyURL: this.proxyURL
        };
    };
    PDFExportComponent.prototype.drawElement = function (element, options) {
        return kendo_drawing_1.drawDOM(element, options);
    };
    PDFExportComponent.prototype.exportGroup = function (group, options) {
        return kendo_drawing_1.exportPDF(group, options);
    };
    PDFExportComponent.prototype.saveDataUri = function (dataUri, fileName, options) {
        kendo_file_saver_1.saveAs(dataUri, fileName, options);
    };
    return PDFExportComponent;
}());
PDFExportComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'kendo-pdf-export',
                template: "<div><ng-content></ng-content></div>"
            },] },
];
/** @nocollapse */
PDFExportComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
PDFExportComponent.propDecorators = {
    'author': [{ type: core_1.Input },],
    'avoidLinks': [{ type: core_1.Input },],
    'forcePageBreak': [{ type: core_1.Input },],
    'keepTogether': [{ type: core_1.Input },],
    'creator': [{ type: core_1.Input },],
    'date': [{ type: core_1.Input },],
    'imageResolution': [{ type: core_1.Input },],
    'fileName': [{ type: core_1.Input },],
    'forceProxy': [{ type: core_1.Input },],
    'keywords': [{ type: core_1.Input },],
    'landscape': [{ type: core_1.Input },],
    'margin': [{ type: core_1.Input },],
    'paperSize': [{ type: core_1.Input },],
    'repeatHeaders': [{ type: core_1.Input },],
    'scale': [{ type: core_1.Input },],
    'proxyData': [{ type: core_1.Input },],
    'proxyURL': [{ type: core_1.Input },],
    'proxyTarget': [{ type: core_1.Input },],
    'producer': [{ type: core_1.Input },],
    'subject': [{ type: core_1.Input },],
    'title': [{ type: core_1.Input },],
    'pageTemplateDirective': [{ type: core_1.ContentChild, args: [pdf_template_directive_1.PDFTemplateDirective,] },],
    'marginComponent': [{ type: core_1.ContentChild, args: [pdf_margin_component_1.PDFMarginComponent,] },],
};
exports.PDFExportComponent = PDFExportComponent;
