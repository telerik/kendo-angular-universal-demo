/**
 * Represents a 3x3 transformation matrix in the following form:
 *
 * `a c e`
 * `( b d f )`
 * `0 0 1`
 */
export class Matrix {
  /**
   * The `a (1, 1)` member of the matrix.
   */
  a: number;

  /**
   * The `b (2, 1)` member of the matrix.
   */
  b: number;

  /**
   * The `c (1, 2)` member of the matrix.
   */
  c: number;

  /**
   * The `d (2, 2)` member of the matrix.
   */
  d: number;

  /**
   * The e (1, 3) member of the matrix.
   */
  e: number;

  /**
   * The `f (2, 3)` member of the matrix.
   */
  f: number;

  /**
   * Creates a transformation matrix with the specified parameters.
   *
   * @param a - The `a (1, 1)` member of the matrix.
   * @param b - The `b (2, 1)` member of the matrix.
   * @param c - The `c (1, 2)` member of the matrix.
   * @param d - The `d (2, 2)` member of the matrix.
   * @param e - The `e (1, 3)` member of the matrix.
   * @param f - The `f (2, 3)` member of the matrix.
   */
  constructor(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number);

  /**
   * Creates a transformation matrix for rotation with the specified parameters.
   *
   * @param angle - The angle of rotation in decimal degrees. Measured in a clockwise direction with 0 (zero) pointing "right". Negative values or values greater than 360 are normalized.
   * @param x - The center of rotation on the X axis.
   * @param y - The center of rotation on the Y axis.
   * @return - The transformation matrix for the specified rotation.
   */
  static rotate(angle: number, x: number, y: number): Matrix;

  /**
   * Creates a transformation matrix for the scale with the specified parameters.
   *
   * @param scaleX - The scale factor on the X axis.
   * @param scaleY - The scale factor on the Y axis.
   * @return - The transformation matrix for the specified scale.
   */
  static scale(scaleX: number, scaleY: number): Matrix;

  /**
   * Creates a transformation matrix for the translation with the specified parameters.
   *
   * @param x - The distance to translate along the X axis.
   * @param y - The distance to translate along the Y axis.
   * @return - The transformation matrix for the specified translation.
   */
  static translate(x: number, y: number): Matrix;

  /**
   * Returns the unit (identity) transformation matrix.
   *
   * @return - The unit (identity) matrix.
   */
  static unit(): Matrix;

  /**
   * Creates a new instance with the same element values.
   *
   * @return - A new Matrix instance with the same element values.
   */
  clone(): Matrix;

  /**
   * Compares this matrix with another instance.
   *
   * @param other - The matrix instance to compare with.
   * @return true if the matrix elements match. Otherwise, returns `false`.
   */
  equals(other: Matrix): boolean;

  /**
   * Rounds the matrix elements to the specified number of fractional digits.
   *
   * @param digits - The number of fractional digits.
   * @return - The current matrix instance.
   */
  round(digits: number): Matrix;

  /**
   * Multiplies the matrix by another one and returns the result as a new instance. The current instance elements are not altered.
   *
   * @param matrix - The matrix to multiply by.
   * @return - The result of the multiplication.
   */
  multiplyCopy(matrix: Matrix): Matrix;

  /**
   * Returns the matrix elements as an `[a, b, c, d, e, f]` array.
   *
   * @param digits - The number of fractional digits.
   * @return - An array representation of the matrix.
   */
  toArray(digits?: number): number[];

  /**
   * Formats the matrix elements as a string.
   *
   * @param digits - The number of fractional digits.
   * @param separator - The separator to place between elements.
   * @return - A string representation of the matrix. For example, `"1, 0, 0, 1, 0, 0"`.
   */
  toString(digits?: number, separator?: string): string;
}
