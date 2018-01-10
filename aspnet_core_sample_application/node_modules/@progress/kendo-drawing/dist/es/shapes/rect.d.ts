import * as geometry from '../geometry';
import { Shape, ShapeOptions } from '../shapes';

/**
 * A rectangular shape.
 */
export class Rect extends Shape<Rect> {
  /**
   * Creates a new Rectangle instance with the specified configuration.
   *
   * @param geometry - The geometric object that defines the rectangle.
   * @param options - The configuration options.
   */
  constructor(geometry: geometry.Rect, options?: ShapeOptions);

  /**
   * Gets the rectangle geometry.
   *
   * @return - The current geometry of the rectangle.
   */
  geometry(): geometry.Rect;

  /**
   * Sets the geometry of the rectangle.
   *
   * @param value - The new geometry to use.
   */
  geometry(value: geometry.Rect): void;
}
