import { Arc, Point, Rect, Segment, Transformation } from '../geometry';
import { Shape, ShapeOptions } from '../shapes';

/**
 * Represents a path consisting of linear or cubic Bézier curve segments.
 */
export class Path extends Shape<Path> {
  /**
   * A collection of the path segments.
   */
  segments: Segment[];

  /**
   * Creates a new Path with the specified options.
   *
   * @param options - The configuration options.
   */
  constructor(options?: ShapeOptions);

  /**
   * Creates a curve from the given arc.
   *
   * @param arc - The source arc to trace.
   * @param options - The configuration options for the path.
   * @return - The newly constructed path.
   */
  static fromArc(arc: Arc, options?: ShapeOptions): Path;

  /**
   * Creates a straight path from the given points.
   *
   * @param points - An array of Point objects or `[x, y]` arrays.
   * @param options - The configuration options for the path.
   * @return - The newly constructed path.
   */
  static fromPoints(points: Point[] | number[][], options?: ShapeOptions): Path;

  /**
   * Creates a straight path from the given rectangle.
   *
   * @param rect - The source rectangle to trace.
   * @param options - The configuration options for the path.
   * @return - The newly constructed path.
   */
  static fromRect(rect: Rect, options?: ShapeOptions): Path;

  /**
   * Parses a path encoded in an [SVG Path Data format](http://www.w3.org/TR/SVG/paths.html#PathData).
   *
   * @param svgPath - The path encoded in [SVG Path Data format](http://www.w3.org/TR/SVG/paths.html#PathData).
   * @param options - The configuration options for the path.
   * @return - The newly constructed path.
   */
  static parse(svgPath: string, options?: ShapeOptions): Path;

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
      anticlockwise?: boolean): Path;

  /**
   * Draws an arc segment to the specified point.
   *
   * The parameters are based on the [SVG Arc](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Arcs) syntax.
   *
   * @param end - The end point of the arc.
   * @param rx - The x radius of the arc.
   * @param ry - The y radius of the arc.
   * @param largeArc - A flag indicating if the arc should be greater or less than 180 degrees.
   * @param sweep - A flag indicating if the arc should begin moving at negative or positive angles.
   * @return - The current instance to allow chaining.
   */
  arcTo(end: number, rx: number, ry: number,
        largeArc: boolean, sweep: boolean): Path;

  /**
   * Closes the path by linking the current end point with the start point.
   *
   * @return - The current instance to allow chaining.
   */
  close(): Path;

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
          endPoint: Point | number[]): Path;

  /**
   * Draws a straight line to the specified absolute coordinates.
   *
   * @param x - The end X coordinate of the line.
   * @param y - The end Y coordinate of the line.
   * @return - The current instance to allow chaining.
   */
  lineTo(x: number, y: number): Path;

  /**
   * Draws a straight line to the specified absolute coordinates.
   *
   * @param point - The end point of the line.
   * @return - The current instance to allow chaining.
   */
  lineTo(point: Point): Path;

  /**
   * Clears all existing segments and moves the starting point to the specified absolute coordinates.
   *
   * @param x - The starting X coordinate.
   * @param y - The starting Y coordinate.
   * @return - The current instance to allow chaining.
   */
  moveTo(x: number, y: number): Path;

  /**
   * Clears all existing segments and moves the starting point to the specified absolute coordinates.
   *
   * @param point - The end point of the line.
   * @return - The current instance to allow chaining.
   */
  moveTo(point: Point): Path;
}
