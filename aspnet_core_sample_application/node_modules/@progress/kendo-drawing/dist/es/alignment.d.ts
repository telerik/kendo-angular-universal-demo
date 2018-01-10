import { Rect } from './geometry';
import { Element } from './shapes';

/**
 * Aligns the X axis position of the drawing elements to a given rectangle.
 *
 * The supported values are:
 * * `"start"`&mdash;The elements will be aligned to the rectangle origin.
 * * `"center"`&mdash;The elements will be aligned to the rectangle center.
 * * `"end"`&mdash;The elements will be aligned to the right side of the rectangle.
 *
 * @param elements - An array with the drawing elements that should be aligned.
 * @param rect - The rectangle in which the elements should be aligned.
 * @param alignment - Specifies how the elements should be aligned.
 */
export function align(elements: Element[], rect: Rect, alignment: 'start' | 'center' | 'end'): void;

/**
 * Aligns the Y axis position of the drawing elements to a given rectangle.
 *
 * The supported values are:
 * * `"start"`&mdash;The elements will be aligned to the rectangle origin.
 * * `"center"`&mdash;The elements will be aligned to the rectangle center.
 * * `"end"`&mdash;The elements will be aligned to the bottom side of the rectangle.
 *
 * @param elements - An array with the drawing elements that should be aligned.
 * @param rect - The rectangle in which the elements should be aligned.
 * @param alignment - Specifies how should the elements be aligned.
 */
export function vAlign(elements: Element[], rect: Rect, alignment: 'start' | 'center' | 'end'): void;

/**
* Stacks drawing elements horizontally.
*
* @param elements - An array with the drawing elements that should be stacked.
*/
export function stack(elements: Element[]): void;

/**
 * Stacks drawing elements vertically.
 *
 * @param elements - An array with the drawing elements that should be stacked.
 */
export function vStack(elements: any): void;

/**
 * Stacks the drawing elements horizontally.
 * Multiple stacks are used if the elements width exceeds the given rectangle width.
 *
 * @param elements - An array with the drawing elements that should be wrapped.
 * @param rect - The rectangle in which the elements should be wrapped.
 * @return - An array with the stacks. Each stack is an Array holding the stack drawing elements.
 */
export function wrap(elements: Element[], rect: Rect): Array<Array<Element>>;

/**
 * Stacks the drawing elements vertically.
 * Multiple stacks are used if the elements height exceeds the given rectangle height.
 *
 * @param elements - An array with the drawing elements that should be wrapped.
 * @param rect - The rectangle in which the elements should be wrapped.
 * @return - An array with the stacks. Each stack is an Array holding the stack drawing elements.
 */
export function vWrap(elements: Element[], rect: Rect): Array<Array<Element>>;

/**
 * Scales uniformly an element so that it fits in a given rectangle.
 * No scaling is applied if the element is already small enough to fit in the rectangle.
 *
 * @param element - The drawing element that should be fitted.
 * @param rect - The rectangle in which the elements should be fitted.
 */
export function fit(element: Element, rect: Rect): void;
