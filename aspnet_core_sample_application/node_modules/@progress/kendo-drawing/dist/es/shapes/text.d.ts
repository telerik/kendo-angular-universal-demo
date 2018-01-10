import { Point, Rect, Transformation } from '../geometry';
import { Shape, ShapeOptions } from '../drawing';

/**
 * Text configuration options.
 */
export interface TextOptions extends ShapeOptions {
  /**
   * The font to use for rendering the text.
   *
   * Accepts the standard [CSS font syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/font#Syntax).
   *
   * Examples of valid font values:
   * * Size and family: "2em 'Open Sans', sans-serif"
   * * Style, size and family: "italic 2em 'Open Sans', sans-serif"
   */
  font?: string;
}

/**
 * A text shape
 */
export class Text extends Shape<Text> {
  /**
   * Creates a new Text instance
   *
   * @param content The content of the text. Control characters are not supported.
   * @param position The position of the text upper left corner.
   * @param options The configuration options.
   */
  constructor(content: string, position: Point | number[], options?: TextOptions);

  /**
   * Gets the text content.
   *
   * @return The current text content.
   */
  content(): string;

  /**
   * Sets the text content.
   *
   * @param value The new text content.
   */
  content(value: string): void;

  /**
   * Gets the position of the text upper left corner.
   *
   * @return The position of the text upper left corner.
   */
  position(): Point;

  /**
   * Sets the the position of the text upper left corner.
   *
   * @param value The new position of the text upper left corner.
   */
  position(value: Point | number[]): void;
}
