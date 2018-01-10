import * as geometry from '../geometry';
import { Element } from '../shapes';

/**
 * Represents an image.
 */
export class Image extends Element {
  /**
   * Creates an image instance.
   *
   * @param src - The source image URL.
   * @param rect - A rectangle defining the image size and position.
   */
  constructor(src: string, rect: geometry.Rect);

  /**
   * Gets the source URL of the image.
   *
   * @return - The source URL of the image.
   */
  src(): string;

  /**
   * Sets the source URL of the image.
   *
   * @param value - The source URL of the image.
   */
  src(value: string): void;

  /**
   * Gets the rectangle which defines the position and size of the image.
   *
   * @return - The rectangle which defines the position and size of the image.
   */
  rect(): geometry.Rect;

  /**
   * Sets the rectangle which defines the position and size of the image.
   *
   * @param value - The rectangle which defines the position and size of the image.
   */
  rect(value: geometry.Rect): void;
}
