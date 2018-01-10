import { Element } from '../drawing';

/**
 * Configuration options for a drawing surface.
 */
export interface SurfaceOptions {
  /**
   * The preferred type of surface to create.
   *
   * If not supported by the browser, the option will be ignored.
   */
  type?: 'svg' | 'canvas';

  /**
   * The height of the surface element.
   *
   * By default, the surface expands to fill the height of the first positioned container.
   *
   * @default "100%"
   */
  height?: string;

  /**
   * The width of the surface element.
   *
   * By default, the surface expands to fill the width of the first positioned container.
   *
   * @default "100%"
   */
  width?: string;

  /**
   * The handler for the `click` event.
   */
  click?: (e: SurfaceEvent) => void;

  /**
   * The handler for the `mouseenter` event.
   */
  mouseenter?: (e: SurfaceEvent) => void;

  /**
   * The handler for the `mouseleave` event.
   */
  mouseleave?: (e: SurfaceEvent) => void;

  /**
   * The handler for the `mousemove` event.
   */
  mousemove?: (e: SurfaceEvent) => void;
}

/**
 * An abstract class representing the top-level drawing surface.
 * Cannot be directly instantiated.
 *
 * Specific implementations are created through the static `create` method.
 * The implementations for SVG and Canvas inherit from this base class.
 */
export abstract class Surface {
  /**
   * Configuration options for the surface.
   */
  options: SurfaceOptions;

  /**
   * Creates a drawing surface that matches the browser capabilities.
   *
   * @param element - The DOM element that will host the surface.
   * @param options - The configuration options for the surface.
   * @return - The newly created surface instance.
   */
  static create(element: HTMLElement, options?: SurfaceOptions): Surface;

  /**
   * Clears the drawing surface.
   */
  clear(): void;

  /**
   * Releases the resources allocated by this instance.
   *
   * > The DOM elements will not be cleared.
   */
  destroy(): void;

  /**
   * Draws the element and its children on the surface.
   *
   * Existing elements are not affected.
   *
   * @param element - The element to draw.
   */
  draw(element: Element): void;

  /**
   * Returns the target drawing element of a DOM event.
   *
   * @param e - The original DOM event object.
   * @return - The target drawing element, if any.
   */
  eventTarget(e: any): Element;

  /**
   * Resizes the surface to match the size of the container.
   *
   * @param force - Whether to proceed with resizing even if the container dimensions are not changed.
   */
  resize(force?: boolean): void;

  /**
   * Binds to an event on the Surface.
   *
   * @param eventName - The name of the event to bind to.
   * @param handler - The event handler.
   * @return - The current Surface instance to allow chaining.
   */
  bind(eventName: SurfaceEventName , handler: (e: any) => void): Surface;

  /**
   * Binds to an event once.
   *
   * The handler will be unbound after the first event fires.
   *
   * @param eventName - The name of the event to bind to.
   * @param handler - The event handler.
   * @return - The current Surface instance to allow chaining.
   */
  one(eventName: SurfaceEventName, handler: (e: any) => void): Surface;

  /**
   * Unbinds an event handler.
   *
   * @param eventName - The name of the event to bind to.
   * @param handler - The event handler.
   * @return - The current Surface instance to allow chaining.
   */
  unbind(eventName: SurfaceEventName, handler?: (e: any) => void): Surface;
}

/**
 * Supported event names for the Surface.
 */
export type SurfaceEventName =
  'click' | 'mouseenter' | 'mouseleave' | 'mousemove';

/**
 * Drawing surface event arguments.
 */
export interface SurfaceEvent {
  /**
   * The surface instance that initiates the event.
   */
  sender: Surface;

  /**
   * The drawing element that triggered the event.
   */
  element?: Element;

  /**
   * The original DOM event.
   */
  originalEvent?: any;
}
