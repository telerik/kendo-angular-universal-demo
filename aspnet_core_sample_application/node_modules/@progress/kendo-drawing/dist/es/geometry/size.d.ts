import { GeometryObservable } from '../geometry'

/**
 * Represents the width and height of an entity.
 */
export class Size {
  /**
   * The horizontal size.
   */
  width: number;

  /**
   * The vertical size.
   */
  height: number;

  /**
   * Creates a size instance with the specified parameters.
   *
   * @param width - The width value.
   * @param height - The height value.
   */
  constructor(width?: number, height?: number);

  /**
   * Creates a Size instance with the specified parameters.
   *
   * @param width - The width value.
   * @param height - The height value.
   * @return - The new Size instance.
   */
  static create(width: number, height: number): Size;

  /**
   * Creates a Size instance with the specified parameters.
   *
   * @param size - The size values as a `[width, height]` array or an existing instance.
   * @return - The newly created Size instance.
   */
  static create(size: number[] | Size): Size;

  /**
   * Creates a new instance with the same width and height.
   *
   * @return - A new Size instance with the same dimensions.
   */
  clone(): Size;

  /**
   * Compares this Size with another instance.
   *
   * @param other - The Size to compare with.
   * @return true if the size members match. Otherwise, returns `false`.
   */
  equals(other: Size): boolean;

  /**
   * Gets the width value.
   *
   * @return - The current width value.
   */
  getWidth(): number;

  /**
   * Gets the height value.
   *
   * @return - The current height value.
   */
  getHeight(): number;

  /**
   * Sets the width to a new value.
   *
   * @param value - The new width value.
   * @return - The current Size instance.
   */
  setWidth(value: number): Size;

  /**
   * Sets the height to a new value.
   *
   * @param value - The new height value.
   * @return - The current Size instance.
   */
  setHeight(value: number): Size;
}
