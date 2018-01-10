import { Group } from '../drawing';

/**
 * The SVG Export Options.
 */
export interface SVGExportOptions {
  /**
   * If set to `true`, the promise is resolved with the raw SVG document without the Data URI prefix.
   *
   * @default false
   */
  raw?: boolean;
}

/**
 * Exports a group of drawing elements as an SVG document.
 * The group will be positioned at `[0, 0]` in the exported file. Its dimensions will be used as the default dimensions of the image.
 * The export operation is asynchronous and returns a promise. The promise will be resolved with an SVG document encoded as a [Data URI](https://developer.mozilla.org/en-US/docs/data_URIs).
 *
 * {% embed_file export-svg/export-scene.ts preview %}
 * {% embed_file export-svg/app.component.ts %}
 * {% embed_file shared/main.ts hidden %}
 *
 * @param group - The root group containing all elements to export.
 * @param options - The export options.
 * @return - A promise that will be resolved with an SVG document encoded as a Data URI.
 */
export function exportSVG(group: Group, options?: SVGExportOptions): Promise<string>;
