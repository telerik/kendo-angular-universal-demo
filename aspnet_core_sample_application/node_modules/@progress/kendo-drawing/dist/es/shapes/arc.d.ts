import * as geometry from '../geometry';
import { Shape, ShapeOptions, Path } from '../drawing';

/**
 * An arc shape.
 */
export class Arc extends Shape<Arc> {
  /**
   * Creates a new Arc instance with the specified configuration.
   *
   * @param geometry - The geometric object that defines the arc parameters.
   * @param options - The configuration options.
   */
  constructor(geometry: geometry.Arc, options?: ShapeOptions);

  /**
   * Gets the geometry of the arc.
   *
   * @return - The current geometry of the arc.
   */
  geometry(): geometry.Arc;

  /**
   * Sets the geometry of the arc.
   *
   * @param value - The new geometry to use.
   */
  geometry(value: geometry.Arc): void;
}
