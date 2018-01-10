import { Matrix, Transformation } from '../geometry';

/**
 * Creates a new Transformation instance with an optional default matrix.
 *
 * @param matrix - The initial transformation matrix, if any.
 * @return - The newly created Transformation instance.
 */
export function transform(matrix?: Matrix): Transformation;
