import { Arc, Point, Rect, Segment, Transformation } from '../geometry';
import { Shape, ShapeOptions } from '../shapes';

/**
 * Represents a composite path consisting of multiple sub-paths.
 * It is more efficient to use composite paths than individually draw the paths.
 *
 * The interface of the MultiPath mirrors that of the Path,
 * but each `moveTo` command starts a new sub-path.
 */
export class MultiPath extends Shape<MultiPath> {
  /**
   * A collection of the sub-path.
   */
  paths: any;

  /**
   * Creates a new MultiPath with the specified options.
   *
   * @param options - The configuration options.
   */
  constructor(options?: ShapeOptions);

  /**
   * Closes the current sub-path by linking its current end point with its start point.
   *
   * @return - The current instance to allow chaining.
   */
  close(): MultiPath;

  /**
   * Draws an arc segment with the specified parameters.
   * Angles increase in a clockwise direction with 0 (zero) pointing "right".
   * Negative values or values greater than 360 are normalized.
   *
   * @param startAngle - The start angle of the arc in decimal degrees.
   * @param endAngle - The end angle of the arc in decimal degrees.
   * @param rx - The X radius of the arc.
   * @param ry - The Y radius of the arc.
   * @param anticlockwise - A flag indicating if the arc should be drawn in a clockwise or anticlockwise direction. By default, it is drawn clockwise.
   * @return - The current instance to allow chaining.
   */
  arc(startAngle: number, endAngle: number, rx: number, ry: number,
      anticlockwise?: boolean): MultiPath;

  /**
   * Draws an arc segment to the specified point.
   *
   * The parameters are based on the [SVG Arc](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Arcs) syntax.
   *
   * @param end - The end point of the arc.
   * @param rx - The X radius of the arc.
   * @param ry - The Y radius of the arc.
   * @param largeArc - A flag indicating if the arc should be greater or less than 180 degrees.
   * @param sweep - A flag indicating if the arc should begin moving at negative or positive angles.
   * @return - The current instance to allow chaining.
   */
  arcTo(end: number, rx: number, ry: number,
        largeArc: boolean, sweep: boolean): MultiPath;

  /**
   * Draws a cubic Bézier curve (with two control points).
   * A quadratic Bézier curve (with one control point) can be plotted by making the control point equal.
   *
   * @param controlOut - The first control point for the curve.
   * @param controlIn - The second control point for the curve.
   * @param endPoint - The curve end point.
   * @return - The current instance to allow chaining.
   */
  curveTo(controlOut: Point | number[], controlIn: Point | number[],
          endPoint: Point | number[]): MultiPath;

  /**
   * Draws a straight line to the specified absolute coordinates.
   *
   * @param x - The end X coordinate of the line.
   * @param y - The end Y coordinate of the lined.
   * @return - The current instance to allow chaining.
   */
  lineTo(x: number, y: number): MultiPath;

  /**
   * Draws a straight line to the specified absolute coordinates.
   *
   * @param point - The line end point.
   * @return - The current instance to allow chaining.
   */
  lineTo(point: Point): MultiPath;

  /**
   * Clears all existing segments and moves the starting point to the specified absolute coordinates.
   *
   * @param x - The starting X coordinate.
   * @param y - The starting Y coordinate.
   * @return - The current instance to allow chaining.
   */
  moveTo(x: number, y: number): MultiPath;

  /**
   * Clears all existing segments and moves the starting point to the specified absolute coordinates.
   *
   * @param point - The end point of the line.
   * @return - The current instance to allow chaining.
   */
  moveTo(point: Point): MultiPath;
}
