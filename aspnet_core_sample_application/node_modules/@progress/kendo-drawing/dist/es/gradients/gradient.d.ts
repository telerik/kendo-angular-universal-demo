import { GradientStop } from '../drawing';

/**
 * Configuration options for a color gradient.
 */
export interface GradientOptions {
  /**
   * An optional name for the gradient.
   */
  name?: string;

  /**
   * The color stops of the gradient.
   */
  stops?: GradientStop[];
}

/**
 * An abstract base class representing common members of all drawing elements.
 */
export abstract class Gradient {
  /**
   * The color stops of the gradient.
   */
  stops: GradientStop[];

  /**
   * Adds a color stop to the gradient.
   *
   * The color can be in any of the following formats:
   *
   * | Format         | Description
   * | ---            | --- | ---
   * | red            | The [basic](http://www.w3.org/TR/css3-color/#html4) or [extended](http://www.w3.org/TR/css3-color/#svg-color) CSS color name
   * | #ff0000        | The Hex RGB value
   * | rgb(255, 0, 0) | The RGB value
   *
   * Specifying `'none'`, `'transparent'`, or `''` (an empty string) clears the fill.
   *
   * @param offset - The stop offset from the start of the element. Ranges from zero (the start of the gradient) to one (the end of the gradient).
   * @param color - The color of the stop.
   * @param opacity - The fill opacity. Ranges from zero (completely transparent) to one (completely opaque).
   * @return - The new gradient color stop.
   */
  addStop(offset: number, color: string, opacity: number): GradientStop;

  /**
   * Removes a color stop from the gradient.
   *
   * @param stop - The gradient color stop to remove.
   */
  removeStop(stop: GradientStop): void;
}
