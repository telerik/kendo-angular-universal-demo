import { Group } from '../drawing';

/**
 * Parameters for the exported image.
 */
export interface ImageExportOptions {
  /**
   * The height of the exported image. Defaults to the scene height.
   */
  height?: number;

  /**
   * The width of the exported image. Defaults to the scene width.
   */
  width?: number;

  /**
   * Specifies how [cross-origin images](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image) have to be requested.
   *
   * Requesting images without CORS will "taint" the canvas. It will still be visible on the page but to prevent information disclosure, the script access to it will be disabled.
   * By default, they are anonymously requested.
   *
   * The available options are:
   * * `"anonymous"`&mdash;Does not send user credentials as part of the request.
   * * `"use-credentials"`&mdash;Sends credentials as part of the request.
   * * `false`&mdash;Fetches images without CORS, possibly tainting the canvas.
   *
   * For more details, refer to the [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-crossorigin) attributes.
   *
   * @default anonymous
   */
  cors?: string;
}

/**
 * Exports a group of drawing elements as an image.
 *
 * The group will be positioned at `[0, 0]` in the exported image. Its dimensions will be used as the default dimensions for the image.
 *
 * > Scene images have to be of same origin or [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image).
 *
 * The export operation is asynchronous and returns a promise. The promise will be resolved with a PNG image encoded as a [Data URI](https://developer.mozilla.org/en-US/docs/data_URIs).
 *
 * {% embed_file export-image/export-scene.ts preview %}
 * {% embed_file export-image/app.component.ts %}
 * {% embed_file shared/main.ts hidden %}
 *
 * @param group The root group containing all elements to export.
 * @param options The export options.
 * @return A promise that will be resolved with a PNG image encoded as a Data URI.
 */
export function exportImage(group: Group, options?: ImageExportOptions): Promise<string>;
