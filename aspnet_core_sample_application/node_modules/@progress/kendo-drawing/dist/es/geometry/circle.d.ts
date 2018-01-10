import { GeometryObservable, Matrix, Point, Rect } from '../geometry';

/**
 * A circle with a set center and radius.
 */
export class Circle extends GeometryObservable<Circle> {
  /**
   * The center point of the circle.
   */
  center: Point;

  /**
   * The radius of the circle.
   */
  radius: number;

  /**
   * Creates a circle with a set center and radius.
   *
   * @param center - The center point of the circle.
   * @param radius - The radius of the circle.
   */
  constructor(center: any | Point, radius: number);

  /**
   * Returns the bounding box of this circle after applying the specified transformation matrix.
   *
   * @param matrix - The transformation matrix to apply.
   * @return - The bounding box after applying the transformation matrix.
   */
  bbox(matrix?: Matrix): Rect;

  /**
   * Creates a new instance with the same center and radius.
   *
   * @return - A new Circle instance with the same center and radius.
   */
  clone(): Circle;

  /**
   * Compares this circle with another instance.
   *
   * @param other - The circle to compare with.
   * @return true if the point coordinates match. Otherwise, returns `false`.
   */
  equals(other: Circle): boolean;

  /**
   * Gets the center location of the circle.
   *
   * @return - The location of the circle center.
   */
  getCenter(): Point;

  /**
   * Gets the radius of the circle.
   *
   * @return - The radius of the circle.
   */
  getRadius(): number;

  /**
   * Gets the location of a point on the circumference of the circle at a given angle.
   *
   * @param angle - The angle in decimal degrees. Measured in a clockwise direction with 0 (zero) pointing "right".
   * Negative values or values greater than 360 are normalized.
   *
   * @return - The point on the circumference of the circle.
   */
  pointAt(angle: number): Point;

  /**
   * Sets the location of the circle center.
   *
   * @param center - The new center Point or an equivalent `[x, y]` array.
   * @return - The location of the circle center.
   */
  setCenter(center: Point | number[]): Point;

  /**
   * Sets the radius of the circle.
   *
   * @param radius - The new radius of the circle.
   * @return - The current Circle instance.
   */
  setRadius(radius: number): Circle;
}
