import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/**
 * @hidden
 */
export interface Scrollable {
    /**
     * @hidden
     *
     * The scrollable element.
     */
    container: ElementRef;
    /**
     * @hidden
     *
     * The method that scrolls the container to a specific `scrollTop` value.
     */
    scrollTo: (scrollTop: number) => void;
    /**
     * @hidden
     *
     * The method that scrolls the container to a specific element index.
     */
    scrollToIndex: (index: number) => void;
    /**
     * @hidden
     *
     * The method that scrolls the container to the bottom.
     */
    scrollToBottom: () => void;
    /**
     * @hidden
     *
     * The returning method.
     */
    scroll$: () => Observable<any>;
}
