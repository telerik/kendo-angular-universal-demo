import { GeometryObservable, Matrix, Point } from '../geometry';

/**
 * A utility class for building transformation matrices.
 */
export class Transformation extends GeometryObservable<Transformation> {
  /**
   * Creates a transformation from the specified matrix, if any.
   *
   * @param matrix - The initial transformation matrix.
   */
  constructor(matrix?: Matrix);

  /**
   * Creates a new instance with the same transformation matrix.
   *
   * @return - A new Transformation instance with the same matrix.
   */
  clone(): Transformation;

  /**
   * Compares this transformation with another instance.
   *
   * @param other - The transformation to compare with.
   * @return true if the transformation matrix is the same. Otherwise, returns `false`.
   */
  equals(other: Transformation): boolean;

  /**
   * Gets the current transformation matrix for this transformation.
   *
   * @return - The current transformation matrix.
   */
  matrix(): Matrix;

  /**
   * Multiplies the transformation by another one.
   * The underlying transformation matrix is updated in-place.
   *
   * @param transformation - The transformation to multiply by.
   * @return - The current Transformation instance.
   */
  multiply(transformation: Transformation): Transformation;

  /**
   * Sets the rotation with the specified parameters.
   *
   * @param angle - The angle of rotation in decimal degrees. Measured in a clockwise direction with 0 (zero) pointing "right". Negative values or values greater than 360 are normalized.
   * @param center - The center of rotation.
   * @return - The current transformation instance.
   */
  rotate(angle: number, center: Point | number[]): Transformation;

  /**
   * Sets scale with the specified parameters.
   *
   * @param scaleX - The scale factor on the X axis.
   * @param scaleY - The scale factor on the Y axis.
   * @return - The current Transformation instance.
   */
  scale(scaleX: number, scaleY: number): Transformation;

  /**
   * Sets the translation with the specified parameters.
   *
   * @param x - The distance to translate along the X axis.
   * @param y - The distance to translate along the Y axis.
   * @return - The current transformation instance.
   */
  translate(x: number, y: number): Transformation;
}
