import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { RowHeightService } from './row-height.service';
/**
 * @hidden
 */
export declare class ScrollAction {
    offset: number;
    constructor(offset: number);
}
/**
 * @hidden
 */
export declare class PageAction {
    skip: number;
    constructor(skip: number);
}
/**
 * @hidden
 */
export declare type Action = ScrollAction | PageAction;
/**
 * @hidden
 */
export declare class ScrollerService {
    private scrollObservable;
    private firstLoaded;
    private lastLoaded;
    private lastScrollTop;
    private take;
    private total;
    private rowHeightService;
    private scrollSubscription;
    private bottomOffset;
    private topOffset;
    constructor(scrollObservable: Observable<any>);
    create(rowHeightService: RowHeightService, skip: number, take: number, total: number, topOffset?: number, bottomOffset?: number): Observable<Action>;
    destroy(): void;
    protected onScroll({scrollTop, offsetHeight}: {
        scrollTop: number;
        offsetHeight: number;
    }, observer: Observer<Action>): void;
    private rowOffset(index);
    private rowsForHeight(height);
    private unsubscribe();
}
