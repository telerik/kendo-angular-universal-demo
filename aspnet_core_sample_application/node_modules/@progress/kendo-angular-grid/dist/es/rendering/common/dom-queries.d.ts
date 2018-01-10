/**
 * @hidden
 */
export declare const hasClasses: (element: HTMLElement, classNames: string) => boolean;
/**
 * @hidden
 */
export declare const matchesClasses: (classNames: string) => (element: HTMLElement) => boolean;
/**
 * @hidden
 */
export declare const matchesNodeName: (nodeName: string) => any;
/**
 * @hidden
 */
export declare const closest: (node: any, predicate: any) => any;
/**
 * @hidden
 */
export declare const closestInScope: (node: any, predicate: any, scope: any) => any;
/**
 * @hidden
 */
export declare const isVisible: (element: any) => boolean;
/**
 * @hidden
 */
export declare const isFocusable: (element: any, checkVisibility?: boolean) => boolean;
/**
 * @hidden
 */
export declare const findElement: (node: any, predicate: (element: any) => boolean) => any;
/**
 * @hidden
 */
export declare const findFocusable: (element: any) => any;
