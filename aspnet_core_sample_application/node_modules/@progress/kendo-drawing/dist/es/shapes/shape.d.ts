import { Element, ElementOptions } from '../drawing';

/**
 * The configuration options for the Shape.
 */
export interface ShapeOptions extends ElementOptions {
  /**
   * The fill options of the Shape.
   */
  fill?: FillOptions;

  /**
   * The stroke options of the Shape.
   */
  stroke?: StrokeOptions;
}

/**
 * Represents a drawing element that can be filled and stroked.
 *
 * @hidden
 */
export abstract class Shape<T> extends Element {
  /**
   * Sets the fill of the Shape.
   *
   * @param color - The [fill color]({% slug api_kendo-drawing_filloptions_kendouiforangular %}#toc-color) to set.
   * @param opacity - The [fill opacity]({% slug api_kendo-drawing_filloptions_kendouiforangular %}#toc-opacity) to set.
   * @return - The current instance to allow chaining.
   */
  fill(color: string, opacity?: number): T;

  /**
   * Sets the [stroke]({% slug api_kendo-drawing_strokeoptions_kendouiforangular %}) of the Shape.
   *
   * @param color - The [stroke color]({% slug api_kendo-drawing_strokeoptions_kendouiforangular %}#toc-color) to set.
   * @param width - The [stroke width]({% slug api_kendo-drawing_strokeoptions_kendouiforangular %}#toc-width) to set.
   * @param opacity - The [stroke opacity]({% slug api_kendo-drawing_strokeoptions_kendouiforangular %}#toc-opacity) to set.
   * @return - The current instance to allow chaining.
   */
  stroke(color: string, width?: number, opacity?: number): T;
}

/**
 * The configuration options for the Shape fill.
 */
export interface FillOptions {
  /**
   * The fill color in any of the following formats.
   *
   * | Format         | Description
   * | ---            | --- | ---
   * | red            | The [basic](http://www.w3.org/TR/css3-color/#html4) or [extended](http://www.w3.org/TR/css3-color/#svg-color) CSS Color name
   * | #ff0000        | The Hex RGB value
   * | rgb(255, 0, 0) | The RGB value
   *
   * Specifying `'none'`, `'transparent'` or `''` (an empty string) clears the fill.
   */
  color?: string;

  /**
   * The fill opacity. Ranges from zero (completely transparent) to one (completely opaque).
   */
  opacity?: number;
}

/**
 * The shape stroke configuration options.
 */
export interface StrokeOptions {
  /**
   * The stroke color in any of the following formats.
   *
   * | Value          | Description
   * | ---            | --- | ---
   * | red            | The [basic](http://www.w3.org/TR/css3-color/#html4) or [extended](http://www.w3.org/TR/css3-color/#svg-color) CSS Color name
   * | #ff0000        | The Hex RGB value
   * | rgb(255, 0, 0) | The RGB value
   *
   * Specifying `'none'`, `'transparent'` or `''` (an empty string) clears the stroke.
   */
  color?: string;

  /**
   * The stroke dash type.
   *
   * @default "solid"
   */
  dashType?: DashType;

  /**
   * The stroke line cap style.
   *
   * @default "butt"
   */
  lineCap?: LineCap;

  /**
   * The stroke line join style.
   *
   * @default "miter"
   */
  lineJoin?: LineJoin;

  /**
   * The stroke opacity. Ranges from zero (completely transparent) to one (completely opaque).
   */
  opacity?: number;

  /**
   * The stroke width in pixels.
   */
  width?: number;
}

/**
 * The dash type of a line.
 *
 * | Value            |                                                 | Description
 * | ---              | :---:                                           | ---
 * | `dash`           | ![dash](../../images/stroke-dash.png)              | A line consisting of dashes
 * | `dashDot`        | ![dash](../../images/stroke-dash-dot.png)          | A line consisting of a repeating pattern of dash-dot
 * | `dot`            | ![dash](../../images/stroke-dot.png)               | A line consisting of dots
 * | `longDash`       | ![dash](../../images/stroke-long-dash.png)         | A line consisting of a repeating pattern of long-dash
 * | `longDashDot`    | ![dash](../../images/stroke-long-dash-dot.png)     | A line consisting of a repeating pattern of long-dash dot
 * | `longDashDotDot` | ![dash](../../images/stroke-long-dash-dot-dot.png) | A line consisting of a repeating pattern of long-dash dot-dot
 * | `solid`          | ![dash](../../images/stroke-solid.png)             | A solid line
 */
export type DashType =
  'dash' | 'dashDot' | 'dot' |
  'longDash' | 'longDashDot' | 'longDashDotDot' |
  'solid';

/**
 * The cap style of a line.
 *
 * | Value    |                                        | Description
 * | ---      | :---:                                  | ---
 * | `butt`   | ![dash](../../images/line-cap-butt.png)   | A flat edge with no cap
 * | `round`  | ![dash](../../images/line-cap-round.png)  | A rounded cap
 * | `square` | ![dash](../../images/line-cap-square.png) | A square cap
 */
export type LineCap = 'butt' | 'round' | 'square';

/**
 * The join style of a line.
 *
 * | Value   |                                        | Description
 * | ---     | :---:                                  | ---
 * | `bevel` | ![dash](../../images/line-join-bevel.png) | A beveled join
 * | `miter` | ![dash](../../images/line-join-miter.png) | A square join
 * | `round` | ![dash](../../images/line-join-round.png) | A rounded join
 */
export type LineJoin = 'bevel' | 'miter' | 'round';
