import { Point } from '../geometry';
import { Gradient, GradientOptions } from '../drawing';

/**
 * Represents a linear color gradient.
 */
export class LinearGradient extends Gradient {
  /**
   * The configuration of this linear gradient.
   */
  options: GradientOptions;

  /**
   * Creates a new linear gradient.
   *
   * @param options - The configuration of this linear gradient.
   */
  constructor(options?: GradientOptions);

  /**
   * Gets the end point of the gradient.
   *
   * @return - The current end point of the gradient.
   */
  end(): Point;

  /**
   * Sets the end point of the gradient.
   * The end point of the gradient.
   * Coordinates are relative to the shape bounding box.
   * For example, `[0, 0]` is top left and `[1, 1]` is bottom right.
   *
   * @param end - The end point of the gradient.
   */
  end(end: Point | number[]): void;

  /**
   * Gets the start point of the gradient.
   *
   * @return - The current start point of the gradient.
   */
  start(): Point;

  /**
   * Sets the start point of the gradient.
   * The start point of the gradient.
   * Coordinates are relative to the shape bounding box.
   * For example, `[0, 0]` is top left and `[1, 1]` is bottom right.
   *
   * @param start - The end point of the gradient.
   */
  start(start: Point | number[]): void;
}
