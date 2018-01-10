import { EventEmitter, ElementRef, OnDestroy } from '@angular/core';
/**
 * @hidden
 */
export declare class KendoDraggableDirective implements OnDestroy {
    kendoDrag: EventEmitter<any>;
    kendoPress: EventEmitter<any>;
    kendoRelease: EventEmitter<any>;
    private draggable;
    constructor(ngEl: ElementRef);
    ngOnDestroy(): void;
}
