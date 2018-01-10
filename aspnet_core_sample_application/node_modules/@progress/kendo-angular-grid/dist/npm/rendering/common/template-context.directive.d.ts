import { ViewContainerRef, OnDestroy } from '@angular/core';
/**
 * @hidden
 */
export declare class TemplateContextDirective implements OnDestroy {
    private viewContainerRef;
    private insertedViewRef;
    constructor(viewContainerRef: ViewContainerRef);
    templateContext: any;
    ngOnDestroy(): void;
    protected removeView(): void;
}
