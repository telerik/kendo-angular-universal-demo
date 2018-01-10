import { ElementRef } from '@angular/core';
import { DrawOptions, Group } from '@progress/kendo-drawing';
import { PageMargin, PaperSize, PDFOptions } from '@progress/kendo-drawing/pdf';
import { SaveOptions } from '@progress/kendo-file-saver';
import { PDFTemplateDirective } from './pdf-template.directive';
import { PDFMarginComponent } from './pdf-margin.component';
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
export declare class PDFExportComponent implements PDFOptions {
    protected element: ElementRef;
    /**
     * The author (metadata) of the PDF document.
     */
    author: string;
    /**
     * A flag that indicates whether to produce actual hyperlinks in the exported PDF file.
     * It is also possible to set a CSS selector. All matching links will be ignored.
     */
    avoidLinks: boolean | string;
    /**
     * An optional CSS selector that specifies the elements which cause the page breaks.
     */
    forcePageBreak: string;
    /**
     * An optional CSS selector that specifies the elements which should not be split across the pages.
     */
    keepTogether: string;
    /**
     * The creator of the PDF document.
     * @default "Kendo UI PDF Generator"
     */
    creator: string;
    /**
     * The date when the PDF document is created. Defaults to `new Date()`.
     */
    date: Date;
    /**
     * The forced resolution of the images in the exported PDF document.
     *
     * By default, the images are exported at their full resolution.
     */
    imageResolution: number;
    /**
     * Specifies the file name of the exported PDF file.
     * @default "Export.pdf"
     */
    fileName: string;
    /**
     * If set to `true`, the content is forwarded to `proxyURL` even if the browser supports the saving of files locally.
     */
    forceProxy: boolean;
    /**
     * The keywords (metadata) of the PDF document.
     */
    keywords: string;
    /**
     * A flag that indicates if the page should be in a landscape orientation.
     * By default, the page is in a portrait orientation.
     *
     * @default false
     */
    landscape: boolean;
    /**
     * Specifies the margins of the page.
     *
     * The supported units are:
     * * `"mm"`
     * * `"cm"`
     * * `"in"`
     * * `"pt"` (default).
     *
     * Numbers are considered to be points (`"pt"`).
     */
    margin: string | number | PageMargin;
    /**
     * Specifies the paper size of the PDF document. Defaults to `"auto"` which means that the paper size is determined by the content.
     * The size of the content in pixels matches the size of the output in points (1 pixel = 1/72 inch).
     *
     * If set, the content will be split across multiple pages.
     * This enables the `repeatHeaders` and `scale` options and allows you to specify a template.
     *
     * The supported values are:
     * * A predefined size. The supported paper sizes are: `A0-A10`, `B0-B10`, `C0-C10`, `Executive`, `Folio`, `Legal`, `Letter`, `Tabloid`.
     * * An array of two numbers specifying the width and height in points (1pt = 1/72in).
     * * An array of two strings specifying the width and height in units. The supported units are `"mm"`, `"cm"`, `"in"`, and `"pt"`.
     */
    paperSize: PaperSize;
    /**
     * Specifies if the `<thead>` elements of the tables should be repeated on each page.
     */
    repeatHeaders: boolean;
    /**
     * A scale factor.
     *
     * The text size on the screen might be too big for print.
     * To scale down the output in PDF, use this option.
     *
     * @default 1
     */
    scale: number;
    /**
     * A key/value dictionary of form values to send to the proxy.
     * Can be used to submit Anti-Forgery tokens and other metadata.
     */
    proxyData?: {
        [key: string]: string;
    };
    /**
     * The URL of the server-side proxy which streams the file to the end user.
     * You need to use a proxy if the browser is not capable of saving files locally&mdash;for example, Internet Explorer 9 and Safari.
     * The responsibility for implementing the server-side proxy is yours.
     *
     * In the request body, the proxy receives a POST request with the following parameters:
     *
     * - `"contentType"`&mdash;The MIME type of the file.
     * - `"base64"`&mdash;The base-64 encoded file content.
     * - `"fileName"`&mdash;The file name, as requested by the caller.
     *
     * The proxy returns the decoded file with the `"Content-Disposition"` header set to `attachment; filename="<fileName.pdf>"`.
     */
    proxyURL: string;
    /**
     * A name or keyword that indicates where to display the document that is returned from the proxy.
     * To display the document in a new window or iframe,
     * the proxy has to set the `"Content-Disposition"` header to `inline; filename="<fileName.pdf>"`.
     * @default "_self"
     */
    proxyTarget: string;
    /**
     * The producer (metadata) of the PDF document.
     */
    producer: string;
    /**
     * The subject (metadata) of the PDF document.
     */
    subject: string;
    /**
     * The title (metadata) of the PDF document.
     */
    title: string;
    /**
     * @hidden
     */
    pageTemplateDirective: PDFTemplateDirective;
    /**
     * @hidden
     */
    marginComponent: PDFMarginComponent;
    protected readonly drawMargin: any;
    protected pageTemplate: any;
    constructor(element: ElementRef);
    /**
     * Saves the content as a PDF file with the specified name
     * @param fileName The name of the exported file name
     */
    saveAs(fileName?: string): void;
    /**
     * Exports the content as a Group for further processing
     *
     * @return The root group of the exported scene
     */
    export(): Promise<Group>;
    protected save(element: HTMLElement, fileName: string): void;
    protected exportElement(element: HTMLElement): Promise<Group>;
    protected cleanup(): void;
    protected drawOptions(): DrawOptions;
    protected pdfOptions(): any;
    protected saveOptions(): SaveOptions;
    protected drawElement(element: HTMLElement, options: DrawOptions): Promise<Group>;
    protected exportGroup(group: Group, options: PDFOptions): Promise<string>;
    private saveDataUri(dataUri, fileName, options);
}
