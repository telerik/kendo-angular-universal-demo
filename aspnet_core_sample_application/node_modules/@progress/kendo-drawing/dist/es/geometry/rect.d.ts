import { GeometryObservable, Matrix, Point, Size } from '../geometry';

/**
 * Represents a rectangle with a set origin (top-left corner) and size.
 */
export class Rect {
    /**
     * The origin (top-left corner) of the rectangle.
     */
    origin: Point;

    /**
     * The size of the rectangle.
     */
    size: Size;

    /**
     * Creates a rectangle geometry with the specified parameters.
     *
     * @param origin - The origin (top-left corner) of the rectangle or an equivalent `[x, y]` array.
     * @param size - The size of the rectangle or an equivalent `[width, height]` array.
     */
    constructor(origin: Point|number[], size: Size|number[]);

    /**
     * Creates a Rect instance that contains the points given as arguments.
     *
     * @param a - The first point.
     * @param b - The second point.
     * @return - The new Rect instance.
     */
    static fromPoints(a: Point, b: Point): Rect;

    /**
     * Creates a new Rect instance that encloses the two rectangles given as arguments.
     *
     * @param a - The first rectangle.
     * @param b - The second rectangle.
     * @return - The new Rect instance.
     */
    static union(a: Rect, b: Rect): Rect;

    /**
     * Returns the bounding box of this rectangle after applying the specified transformation matrix.
     *
     * @param matrix - The transformation matrix to apply.
     * @return - The bounding box after applying the transformation matrix.
     */
    bbox(matrix?: Matrix): Rect;

    /**
     * Gets the position of the bottom-left corner of the rectangle. This is also the rectangle origin.
     *
     * @return - The position of the bottom-left corner.
     */
    bottomLeft(): Point;

    /**
     * Gets the position of the bottom-right corner of the rectangle.
     *
     * @return - The position of the bottom-right corner.
     */
    bottomRight(): Point;

    /**
     * Gets the position of the center of the rectangle.
     *
     * @return - The position of the center.
     */
    center(): Point;

    /**
     * Creates a new instance with the same origin and size.
     *
     * @return - A new Rect instance with the same origin and size.
     */
    clone(): Rect;

    /**
     * Compares this rectangle with another instance.
     *
     * @param other - The rectangle to compare with.
     * @return true if the origin and size is the same for both rectangles. Otherwise, returns `false`.
     */
    equals(other: Rect): boolean;

    /**
     * Gets the origin (top-left point) of the rectangle.
     *
     * @return - The origin (top-left point).
     */
    getOrigin(): Point;

    /**
     * Gets the rectangle size.
     *
     * @return - The current Size of the rectangle.
     */
    getSize(): Size;

    /**
     * Gets the height of the rectangle.
     *
     * @return - The height of the rectangle.
     */
    height(): number;

    /**
     * Sets the origin (top-left point) of the rectangle.
     *
     * @param origin - The new origin Point or an equivalent `[x, y]` array.
     * @return - The current Rect instance.
     */
    setOrigin(origin: Point | number[]): Rect;

    /**
     * Sets the size of the rectangle.
     *
     * @param size - The new rectangle Size or an equivalent `[width, height]` array.
     * @return - The current rectangle instance.
     */
    setSize(size: Size | number[]): Rect;

    /**
     * Gets the position of the top-left corner of the rectangle. This is also the rectangle origin.
     *
     * @return - The position of the top-left corner.
     */
    topLeft(): Point;

    /**
     * Gets the position of the top-right corner of the rectangle.
     *
     * @return - The position of the top-right corner.
     */
    topRight(): Point;

    /**
     * Gets the rectangle width.
     *
     * @return - The rectangle width.
     */
    width(): number;
}
