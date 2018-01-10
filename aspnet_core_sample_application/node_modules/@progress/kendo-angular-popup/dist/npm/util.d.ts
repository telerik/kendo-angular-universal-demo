import { ElementRect, OffsetPosition } from '@progress/kendo-popup-common';
/**
 * @hidden
 */
export declare const eitherRect: (rect: ElementRect, offset: OffsetPosition) => ElementRect;
/**
 * @hidden
 */
export declare const replaceOffset: (rect: ElementRect, offset: OffsetPosition) => ElementRect;
/**
 * @hidden
 */
export declare const removeStackingOffset: (rect: ElementRect, stackingOffset: ElementRect) => ElementRect;
/**
 * @hidden
 */
export declare const isDifferentOffset: (oldOffset: OffsetPosition, newOffset: OffsetPosition) => boolean;
/**
 * @hidden
 */
export declare const isDocumentAvailable: () => boolean;
/**
 * @hidden
 */
export declare const isWindowAvailable: () => boolean;
/**
 * @hidden
 */
export declare const hasBoundingRect: (elem: HTMLElement) => boolean;
/**
 * @hidden
 */
export declare const OVERFLOW_REGEXP: RegExp;
/**
 * @hidden
 */
export declare const scrollableParents: (element: HTMLElement) => HTMLElement[];
/**
 * @hidden
 */
export declare const FRAME_DURATION: number;
/**
 * @hidden
 */
export declare const hasRelativeStackingContext: () => boolean;
/**
 * @hidden
 */
export declare const HAS_RELATIVE_STACKING_CONTEXT: boolean;
/**
 * @hidden
 */
export declare const zIndex: (anchor: HTMLElement, container: HTMLElement) => number;
