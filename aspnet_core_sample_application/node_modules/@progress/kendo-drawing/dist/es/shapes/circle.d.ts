import * as geometry from '../geometry';
import { Shape, ShapeOptions } from '../drawing';

/**
 * A circle shape.
 */
export class Circle extends Shape<Circle> {
  /**
   * Creates a new Circle instance with the specified configuration.
   *
   * @param geometry - The geometric object that defines the circle center and radius.
   * @param options - The configuration options.
   */
  constructor(geometry: geometry.Circle, options?: ShapeOptions);

  /**
   * Gets the geometry of the circle.
   *
   * @return The current geometry of the circle.
   */
  geometry(): geometry.Circle;

  /**
   * Sets the geometry of the circle.
   *
   * @param value - The new geometry to use.
   */
  geometry(value: geometry.Circle): void;
}
