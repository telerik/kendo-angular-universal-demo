import { GeometryObservable, Transformation } from '../geometry';

/**
 * A point representing a location (x, y) in two-dimensional coordinate space.
 */
export class Point extends GeometryObservable<Point> {
  /**
   * The X coordinate of the point.
   */
  x: number;

  /**
   * The Y coordinate of the point.
   */
  y: number;

  /**
   * Creates a point with the specified coordinates.
   *
   * @param x - The X coordinate of the point.
   * @param y - The Y coordinate of the point.
   */
  constructor(x?: number, y?: number);

  /**
   * Creates a Point instance with the specified coordinates.
   *
   * @param x - The X coordinate of the point
   * @param y - The Y coordinate of the point.
   * @return - The new Point instance.
   */
  static create(x: number, y: number): Point;

  /**
   * Creates a Point instance with the specified coordinates.
   *
   * @param coords - An array of X and Y coordinates.
   * @return - The new Point instance.
   */
  static create(coords: number[]): Point;

  /**
   * Returns the supplied Point instance.
   *
   * @param point - An existing Point instance.
   * @return - The supplied Point instance.
   */
  static create(point: Point): Point;

  /**
   * Returns the Point with minimum X and Y coordinates.
   *
   * @param points - The points to evaluate.
   * @return - The Point with minimum X and Y coordinates.
   */
  static min(...points: Point[]): Point;

  /**
   * Returns the Point with maximum X and Y coordinates.
   *
   * @param points - The points to evaluate.
   * @return - The Point with maximum X and Y coordinates.
   */
  static max(...points: Point[]): Point;

  /**
   * Returns a Point with the smallest representable coordinates.
   *
   * @return - A new Point instance with minimum coordinates.
   */
  static minPoint(): Point;

  /**
   * Returns a Point with the largest representable coordinates.
   *
   * @return - A new Point instance with maximum coordinates.
   */
  static maxPoint(): Point;

  /**
   * Creates a new instance with the same coordinates.
   *
   * @return - A new Point instance with the same coordinates.
   */
  clone(): Point;

  /**
   * Calculates the distance to another point.
   *
   * @param point - The point to calculate the distance to.
   * @return - The straight-line distance to the given point.
   */
  distanceTo(point: Point): number;

  /**
   * Compares this point with another instance.
   *
   * @param other - The point to compare with.
   * @return true if the point coordinates match. Otherwise, returns `false`.
   */
  equals(other: Point): boolean;

  /**
   * Gets the x coordinate value.
   *
   * @return - The current X-coordinate value.
   */
  getX(): number;

  /**
   * Gets the Y-coordinate value.
   *
   * @return - The current Y-coordinate value.
   */
  getY(): number;

  /**
   * Moves the point to the specified X and Y coordinates.
   *
   * @param x - The new X coordinate.
   * @param y - The new Y coordinate.
   * @return - The current point instance.
   */
  move(x: number, y: number): Point;

  /**
   * Rotates the point around the given center.
   *
   * @param angle - The angle in decimal degrees. Measured in a clockwise direction with 0 (zero) pointing "right". Negative values or values greater than 360 are normalized.
   * @param center - The rotation center. Can be a Point instance or an `[x, y]` array.
   * @return - The current Point instance.
   */
  rotate(angle: number, center: Point | number[]): Point;

  /**
   * Rounds the point coordinates to the specified number of fractional digits.
   *
   * @param digits - The number of fractional digits.
   * @return - The current Point instance.
   */
  round(digits: number): Point;

  /**
   * Scales the point coordinates along the X and Y axis.
   *
   * @param scaleX - The X scale multiplier.
   * @param scaleY - The Y scale multiplier.
   * @return - The current Point instance.
   */
  scale(scaleX: number, scaleY: number): Point;

  /**
   * Scales the point coordinates on a copy of the current point. The callee coordinates will remain unchanged.
   *
   * @param scaleX - The X scale multiplier.
   * @param scaleY - The Y scale multiplier.
   * @return - The current Point instance.
   */
  scaleCopy(scaleX: number, scaleY: number): Point;

  /**
   * Sets the X coordinate to a new value.
   *
   * @param value - The new X coordinate value.
   * @return - The current Point instance.
   */
  setX(value: number): Point;

  /**
   * Sets the Y coordinate to a new value.
   *
   * @param value - The new Y coordinate value.
   * @return - The current Point instance.
   */
  setY(value: number): Point;

  /**
   * Returns the point coordinates as an `[X, Y]` array.
   *
   * @param digits - The number of fractional digits.
   * @return - An array representation of the point. For example, `[10, 20]`.
   */
  toArray(digits?: number): number[];

  /**
   * Formats the point value to a string.
   *
   * @param digits - The number of fractional digits.
   * @param separator - The separator to place between coordinates.
   * @return - A string representation of the point. For example, `"10, 20"`.
   */
  toString(digits?: number, separator?: string): string;

  /**
   * Applies a transformation to the point coordinates. The current coordinates will be overridden.
   *
   * @param tansformation - The transformation to apply.
   * @return - The current Point instance.
   */
  transform(tansformation: Transformation): Point;

  /**
   * Applies a transformation on a copy of the current point. The callee coordinates will remain unchanged.
   *
   * @param tansformation - The transformation to apply.
   * @return - The new Point instance.
   */
  transformCopy(tansformation: Transformation): Point;

  /**
   * Translates the point along the X and Y axis.
   *
   * @param dx - The distance to move along the X axis.
   * @param dy - The distance to move along the Y axis.
   * @return - The current Point instance.
   */
  translate(dx: number, dy: number): Point;

  /**
   * Translates the point by using a Point instance as a vector of translation.
   *
   * @param vector - The vector of translation. Can be either a Point instance or an `[x, y]` array.
   * @return - The current point instance.
   */
  translateWith(vector: Point | number[]): Point;
}
