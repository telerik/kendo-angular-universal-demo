import { Point } from '../geometry';
import { Gradient, GradientOptions } from '../drawing';

/**
 * Configuration options for a radial color gradient.
 */
export interface RadialGradientOptions extends GradientOptions {
  /**
   * The center of the gradient.
   * Coordinates are relative to the shape bounding box.
   * For example, `[0, 0]` is top left and `[1, 1]` is bottom right.
   */
  center?: Point | number[];

  /**
   * The radius of the radial gradient relative to the shape bounding box.
   *
   * @default 1
   */
  radius?: number;
}

/**
 * A radial color gradient.
 */
export class RadialGradient extends Gradient {
  /**
   * The configuration of this radial gradient.
   */
  options: RadialGradientOptions;

  /**
   * Creates a new radial color gradient instance.
   *
   * @param options - The configuration of this radial gradient.
   */
  constructor(options?: RadialGradientOptions);

  /**
   * Gets the center point of the gradient.
   *
   * @return - The current radius of the gradient.
   */
  center(): Point;

  /**
   * Sets the center point of the gradient.
   *
   * Coordinates are relative to the shape bounding box.
   * For example, `[0, 0]` is top left and `[1, 1]` is bottom right.
   *
   * @param center - The center point of the gradient.
   */
  center(center: Point | number[]): void;

  /**
   * Gets the radius of the gradient.
   *
   * @return - The current radius of the gradient.
   */
  radius(): number;

  /**
   * Sets the radius of the gradient.
   *
   * @param radius - The new radius of the gradient.
   */
  radius(radius: number): void;
}
