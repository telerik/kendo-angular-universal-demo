import { Transformation } from '../geometry';
import { Element, ElementOptions, Path } from '../drawing';
import { PDFOptions } from '../pdf';

/**
 * The configuration options for the group.
 */
export interface GroupOptions extends ElementOptions {
  /**
   * The page options to be applied during PDF export.
   */
  pdf?: PDFOptions;
}

/**
 * Represents a set of drawing elements, possibly including other groups.
 */
export class Group extends Element {
  /**
   * The children of this group.
   */
  children: Element[];

  /**
   * Creates a new Group instance with the specified options.
   *
   * @param options - Configuration options for the group.
   */
  constructor(options?: GroupOptions);

  /**
   * Appends the specified element as a last child of the group.
   *
   * @param element - The element to append. Multiple parameters are accepted.
   */
  append(...elements: Element[]): void;

  /**
   * Removes all child elements from the group.
   */
  clear(): void;

  /**
   * Inserts an element at the specified position.
   *
   * @param position - The position to insert the element at. Existing children beyond this position are shifted right.
   * @param element - The element to insert.
   */
  insert(position: number, element: Element): void;

  /**
   * Removes the specified element from the group.
   *
   * @param element - The element to remove.
   */
  remove(element: Element): void;

  /**
   * Removes the child element at the specified position.
   *
   * @param index - The index at which the element currently resides.
   */
  removeAt(index: number): void;
}
