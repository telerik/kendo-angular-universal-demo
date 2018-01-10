import { ElementRef } from '@angular/core';
/**
 * @hidden
 */
export declare class DOMService {
    itemHeight: number;
    timeListHeight: number;
    ensureHeights(): void;
    calculateHeights(container?: HTMLElement): void;
    isActive(element: ElementRef): boolean;
}
