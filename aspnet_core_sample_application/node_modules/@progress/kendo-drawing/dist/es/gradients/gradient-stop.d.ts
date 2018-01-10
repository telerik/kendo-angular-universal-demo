/**
 * Configuration options for a gradient color stop.
 */
export interface GradientStopOptions {
  /**
   * The stop offset from the start of the element.
   * Ranges from zero (the start of the gradient) to one (the end of the gradient).
   */
  offset?: number;

  /**
   * The color in any of the following formats:
   *
   * | Format         | Description
   * | ---            | --- | ---
   * | red            | The [basic](http://www.w3.org/TR/css3-color/#html4) or [extended](http://www.w3.org/TR/css3-color/#svg-color) CSS color name
   * | #ff0000        | The Hex RGB value
   * | rgb(255, 0, 0) | The RGB value
   *
   * Specifying `'none'`, `'transparent'`, or '' (an empty string) clears the fill.
   */
  color?: string;

  /**
   * The fill opacity.
   * Ranges from zero (completely transparent) to one (completely opaque).
   */
  opacity?: number;
}

/**
 * Represents a gradient color stop.
 */
export class GradientStop {
  /**
   * The configuration of this `GradientStop`.
   */
  options: GradientStopOptions;

  /**
   * Creates a new gradient stop.
   *
   * @param options - The configuration of this `GradientStop`.
   */
  constructor(options?: GradientStopOptions);
}
