import { GeometryObservable, Matrix, Point, Rect } from '../geometry';

/**
 * Defines a path segment with an anchor point and optional curve control points.
 *
 * Segments are created implicitly by the Path lineTo and curveTo commands.
 */
export class Segment extends GeometryObservable<Segment> {
  /**
   * Creates a path segment with an anchor point and optional curve control points.
   *
   * @param anchor The anchor point of this segment. If no control points are defined the path will pass through this point.
   * @param controlIn The first curve control point of this segment, if any.
   * @param controlOut The second curve control point of this segment, if any.
   */
  constructor(anchor: Point | number[], controlIn?: Point | number[], controlOut?: Point | number[]);

  /**
   * Gets the segment anchor point.
   *
   * @return - The current anchor point.
   */
  anchor(): Point;

  /**
   * Sets the segment anchor point.
   *
   * @param value - The new anchor point.
   */
  anchor(value: Point | number[]): void;

  /**
   * Gets the first curve control point of this segment.
   *
   * @return - The current control point.
   */
  controlIn(): Point;

  /**
   * Sets the second curve control point of this segment.
   *
   * @param value - The new control point.
   */
  controlIn(value: Point | number[]): void;

  /**
   * Gets the second curve control point of this segment.
   *
   * @return - The new control point.
   */
  controlOut(): Point;

  /**
   * Sets the second curve control point of this segment.
   *
   * @param value - The new control point.
   */
  controlOut(value: Point | number[]): void;
}
