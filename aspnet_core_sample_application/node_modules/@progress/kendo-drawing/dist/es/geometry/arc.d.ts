import { GeometryObservable, Point, Rect, Matrix } from '../geometry';

/**
 * Arc configuration options.
 */
export interface ArcOptions {
  /**
   * A flag indicating if the arc should be drawn in a clockwise or anticlockwise direction.
   * Defaults to the clockwise direction.
   *
   * @default false
   */
  anticlockwise?: boolean;

  /**
   * The location of the arc center.
   */
  center: Point;

  /**
   * The start angle of the arc in decimal degrees.
   *
   * Measured in clockwise direction with 0 (zero) pointing "right".
   * Negative values or values greater than 360 are normalized.
   */
  startAngle?: number;

  /**
   * The end angle of the arc in decimal degrees.
   * Measured in a clockwise direction with 0 (zero) pointing "right".
   * Negative values or values greater than 360 are normalized.
   */
  endAngle?: number;

  /**
   * The X radius of the arc.
   */
  radiusX?: number;

  /**
   * The Y radius of the arc.
   */
  radiusY?: number;
}

/**
 * Represents an arc with a set center, direction, angular range, and X/Y radius.
 */
export class Arc extends GeometryObservable<Arc> implements ArcOptions {
  /**
   * The anticlockwise flag of the arc.
   */
  anticlockwise: boolean;

  /**
   * The center point of the arc.
   */
  center: Point;

  /**
   * Gets the end angle of the arc in decimal degrees.
   * Measured in a clockwise direction with 0 (zero) pointing "right".
   *
   */
  endAngle: number;

  /**
   * Gets the X radius of the arc.
   */
  radiusX: number;

  /**
   * Gets the Y radius of the arc.
   */
  radiusY: number;

  /**
   * Gets the start angle of the arc in decimal degrees.
   * Measured in a clockwise direction with 0 (zero) pointing "right".
   */
  startAngle: number;

  /**
   * Creates a new Arc instance.
   *
   * @param center - The center point of the arc.
   * @param options - The options that describe the arc.
   */
  constructor(center: Point | number[], options?: ArcOptions);

  /**
   * Returns the bounding box of this arc after applying the specified transformation matrix.
   *
   * @param matrix - The transformation matrix to apply.
   * @return - The bounding box after applying the transformation matrix.
   */
  bbox(matrix: Matrix): Rect;

  /**
   * Gets the anticlockwise flag of the arc.
   *
   * @return - The anticlockwise flag of the arc.
   */
  getAnticlockwise(): boolean;

  /**
   * Gets the center location of the arc.
   *
   * @return - The location of the arc center.
   */
  getCenter(): Point;

  /**
   * Gets the end angle of the arc in decimal degrees.
   * Measured in a clockwise direction with 0 (zero) pointing "right".
   *
   * @return - The end angle of the arc.
   */
  getEndAngle(): number;

  /**
   * Gets the X radius of the arc.
   *
   * @return - The X radius of the arc.
   */
  getRadiusX(): number;

  /**
   * Gets the Y radius of the arc.
   *
   * @return - The Y radius of the arc.
   */
  getRadiusY(): number;

  /**
   * Gets the start angle of the arc in decimal degrees.
   * Measured in a clockwise direction with 0 (zero) pointing "right".
   *
   * @return - The start angle of the arc.
   */
  getStartAngle(): number;

  /**
   * Gets the location of a point on the circumference of the arc at a given angle.
   *
   * @param angle - The angle in decimal degrees. Measured in a clockwise direction with 0 (zero) pointing "right".
   * Negative values or values greater than 360 are normalized.
   *
   * @return - The point on the circumference of the arc.
   */
  pointAt(angle: number): Point;

  /**
   * Sets the anticlockwise flag of the arc.
   *
   * @param value - The new anticlockwise value.
   * @return - The current arc instance.
   */
  setAnticlockwise(value: boolean): Arc;

  /**
   * Sets the center location of the arc.
   *
   * @param value - The new arc center.
   * @return - The current Arc instance.
   */
  setCenter(value: Point | number[]): Arc;

  /**
   * Sets the end angle of the arc in decimal degrees.
   * Measured in a clockwise direction with 0 (zero) pointing "right".
   *
   * @param value - The new end angle of the arc.
   * @return - The current Arc instance.
   */
  setEndAngle(value: number): Arc;

  /**
   * Sets the X radius of the arc.
   *
   * @param value - The new X radius of the arc.
   * @return - The current Arc instance.
   */
  setRadiusX(value: number): Arc;

  /**
   * Sets the Y radius of the arc.
   *
   * @param value - The new Y radius of the arc.
   * @return - The current Arc instance.
   */
  setRadiusY(value: number): Arc;

  /**
   * Sets the start angle of the arc in decimal degrees.
   * Measured in a clockwise direction with 0 (zero) pointing "right".
   *
   * @param value - The new start angle of the arc.
   * @return - The current Arc instance.
   */
  setStartAngle(value: number): Arc;
}
