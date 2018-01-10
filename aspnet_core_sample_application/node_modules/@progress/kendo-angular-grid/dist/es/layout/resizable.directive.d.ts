import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { GridComponent } from '../grid.component';
import { ResizeService } from "./resize.service";
/**
 * @hidden
 */
export declare class ResizableContainerDirective implements OnDestroy {
    private el;
    private renderer;
    private resizeService;
    private grid;
    private _lockedWidth;
    lockedWidth: number;
    kendoGridResizableContainer: boolean;
    private enabled;
    private resizeSubscription;
    constructor(el: ElementRef, renderer: Renderer2, resizeService: ResizeService, grid?: GridComponent);
    ngOnDestroy(): void;
    private attachResize();
    private resize();
}
