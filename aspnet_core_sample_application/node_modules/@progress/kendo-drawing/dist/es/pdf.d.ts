import { Group } from './shapes';

/**
 * Defines the page margins.
 */
export interface PageMargin {
  /**
   * The bottom margin.
   *
   * The supported units are:
   * * `"mm"`
   * * `"cm"`
   * * `"in"`
   * * `"pt"` (default).
   *
   * Numbers are considered to be points (`"pt"`).
   */
  left?: number | string;

  /**
   * The top margin.
   *
   * The supported units are:
   * * `"mm"`
   * * `"cm"`
   * * `"in"`
   * * `"pt"` (default).
   *
   * Numbers are considered to be points (`"pt"`).
   */
  top?: number | string;

  /**
   * The right margin.
   *
   * The supported units are:
   * * `"mm"`
   * * `"cm"`
   * * `"in"`
   * * `"pt"` (default).
   *
   * Numbers are considered to be points (`"pt"`).
   */
  right?: number | string;

  /**
   * The bottom margin.
   *
   * The supported units are:
   * * `"mm"`
   * * `"cm"`
   * * `"in"`
   * * `"pt"` (default).
   *
   * Numbers are considered to be points (`"pt"`).
   */
  bottom?: number | string;
}

/**
 * The PDF generation options.
 */
export interface PDFOptions {
  /**
   * The author (metadata) of the PDF document.
   */
  author?: string;

  /**
   * The creator (metadata) of the PDF document.
   * @default 'Kendo UI PDF Generator'
   */
  creator?: string;

  /**
   * The date when the PDF document is created.
   * Defaults to new Date().
   */
  date?: Date;

  /**
   * The keywords (metadata) of the PDF document.
   */
  keywords?: string;

  /**
   * A flag indicating if the page should be in a landscape orientation.
   * By default, the page is in a portrait orientation.
   *
   * @default false
   */
  landscape?: boolean;

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
  margin?: string | number | PageMargin;

  /**
   * A flag indicating whether to export the child groups as separate pages.
   */
  multiPage?: boolean;

  /**
   * Specifies the paper size of the PDF document. The default `"auto"` setting means the paper size is determined by the content.
   * The size of the content in pixels matches the size of the output in points (1 pixel = 1/72 inch).
   *
   * The supported values are:
   * * A predefined size. The supported paper sizes are: `A0-A10`, `B0-B10`, `C0-C10`, `Executive`, `Folio`, `Legal`, `Letter`, `Tabloid`.
   * * An array of two numbers specifying the width and height in points (1pt = 1/72in).
   * * An array of two strings specifying the width and height in units. The supported units are `"mm"`, `"cm"`, `"in"`, and `"pt"`.
   *
   * @default 'auto'
   */
  paperSize?: PaperSize;

  /**
   * The producer (metadata) of the PDF document.
   */
  producer?: string;

  /**
   * The subject (metadata) of the PDF document.
   */
  subject?: string;

  /**
   * The title (metadata) of the PDF document.
   */
  title?: string;
}

/**
 * The paper size.
 */
export type PaperSize =
  string | [number | string, number | string] | "auto" |
  "A0" | "A1" | "A2" | "A3" | "A4" | "A5" |
  "A6" | "A7" | "A8" | "A9" | "A10" |
  "B0" | "B1" | "B2" | "B3" | "B4" | "B5" |
  "B6" | "B7" | "B8" | "B9" | "B10" |
  "C0" | "C1" | "C2" | "C3" | "C4" | "C5" |
  "C6" | "C7" | "C8" | "C9" | "C10" |
  "Executive" | "Folio" | "Legal" | "Letter" | "Tabloid";

/**
 * Exports a group of drawing elements as a PDF file.
 * In the exported file, the group is positioned at `[0, 0]`. Its dimensions are used as the default dimensions for the image.
 *
 * > Scene images have to be of same origin or CORS-enabled.
 *
 * The export operation is asynchronous and returns a promise.
 *
 * {% embed_file export-pdf/export-scene.ts preview %}
 * {% embed_file export-pdf/app.component.ts %}
 * {% embed_file shared/main.ts hidden %}
 *
 * @param group - The Group to export.
 * @param options - The PDF Export options.
 * @returns - A promise that will be resolved with a PDF file encoded as a Data URI.
 */
export function exportPDF(group: Group, options?: PDFOptions): Promise<string>;

/**
 * Defines a map with locations for the TrueType Font (.ttf) files. It is safe to call this method multiple times.
 * The `exportPDF` method uses the font files when embedding them in a PDF document.
 *
 * > Fonts have to be loaded from the same origin or CORS-enabled.
 *
 * @param definitions - A dictionary of font names and the URLs of their source files.
 */
export function defineFont(definitions: {[fontName: string]: string}): void;

/**
 * Exports the group of drawing elements and saves it.
 * For more information on how to set up a server proxy, refer the documentation on the [File Saver]({% slug overview_filesaver_kendouiforangular %}#toc-server-side-proxy).
 *
 * @param group - The Group to export.
 * @param fileName - The name of the file to save.
 * @param proxyURL - The server-side proxy URL.
 */
export function saveAs(group: Group, fileName: string, proxyURL?: string): void;

/**
 * Exports the group of drawing elements to PDF and returns a Blob.
 *
 * > Does not work in browsers that do not support [Blob](https://developer.mozilla.org/en/docs/Web/API/Blob).
 *
 * @param group - The Group to export.
 * @param callback - A function that will be called with the Blob, when complete.
 */
export function toBlob(group: Group, callback: (data: Blob) => void): void;
