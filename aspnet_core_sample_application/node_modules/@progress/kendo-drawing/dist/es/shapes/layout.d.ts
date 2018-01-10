import * as geometry from '../geometry';
import { Group } from '../drawing';

/**
 * The configuration options for the Layout element.
 */
export interface LayoutOptions {
  /**
   * The optional name for this element.
   */
  name?: string;

  /**
   * Specifies the alignment of the content.
   *
   * The supported values are:
   *
   * * `"start"`&mdash;Aligns the content to the rectangle origin.
   * * `"center"`&mdash;Aligns the content to the rectangle center.
   * * `"end"`&mdash;Aligns the content to the rectangle end.
   *
   * @default "start"
   */
  alignContent?: 'start' | 'center' | 'end';

  /**
   * Specifies the alignment of the items based on the largest one.
   *
   * The supported values are:
   *
   * * `"start"`&mdash;Aligns the items to the start of the largest element.
   * * `"center"`&mdash;Aligns the items to the center of the largest element.
   * * `"end"`&mdash;Aligns the items to the end of the largest element.
   *
   * @default "start"
   */
  alignItems?: 'start' | 'center' | 'end';

  /**
   * Specifies the way the content has to be justified.
   *
   * The supported values are:
   *
   * * `"start"`&mdash;Aligns the items to the rectangle origin.
   * * `"center"`&mdash;Aligns the items to the rectangle center.
   * * `"end"`&mdash;Aligns the items to the rectangle end.
   *
   * @default "start"
   */
  justifyContent?: 'start' | 'center' | 'end';

  /**
   * Specifies the distance between the lines for wrapped layout.
   *
   * @default 0
   */
  lineSpacing?: number;

  /**
   * Specifies the distance between the elements.
   *
   * @default 0
   */
  spacing?: number;

  /**
   * Specifies the layout orientation.
   *
   * The supported values are:
   *
   * * `"horizontal"`&mdash;The elements are arranged horizontally.
   * * `"vertical"`&mdas;The elements are arranged vertically.
   *
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Specifies the behavior when the elements size exceeds the rectangle size. If set to `true`, the elements are moved to the next `"line"`. If set to `false`, the layout is scaled so that the elements fit in the rectangle.
   *
   * @default true
   */
  wrap?: boolean;
}

/**
 * Represents a group that can arrange its children within a rectangle.
 */
export class Layout extends Group {
  /**
   * Creates a new Layout instance.
   *
   * @param rect - The bounding rectangle for the layout.
   * @param options - The layout configuration options.
   */
  constructor(rect: geometry.Rect, options?: LayoutOptions);

  /**
   * Gets the rectangle within which the children should be arranged.
   *
   * @return - The current rectangle.
   */
  rect(): geometry.Rect;

  /**
   * Sets the rectangle within which the children should be arranged.
   *
   * @param rect - The layout rectangle.
   */
  rect(rect: geometry.Rect): void;

  /**
   * Arranges the elements based on the current options.
   */
  reflow(): void;
}
