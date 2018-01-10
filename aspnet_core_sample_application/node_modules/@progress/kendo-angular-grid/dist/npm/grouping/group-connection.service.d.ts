import { NgZone } from '@angular/core';
import { DraggableDirective } from '../common/draggable.directive';
import { ColumnComponent } from '../columns/column.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/switchMap';
/**
 * @hidden
 */
export declare class GroupConnectionService {
    enter: Observable<any>;
    leave: Observable<any>;
    over: Observable<any>;
    private change;
    private cue;
    private target;
    private currentIndex?;
    private items;
    register(target: any): Observable<{
        field: string;
        idx: number;
    }>;
    isOutside(e: {
        pageX: number;
        pageY: number;
    }): boolean;
    showCue(e: {
        pageX: number;
        pageY: number;
    }): void;
    registerItems(items: any[]): void;
    add(field: string, idx?: number): void;
    hideCue(): void;
}
/**
 * @hidden
 */
export declare type ColumnFilter = (e: {
    column: ColumnComponent;
}) => boolean;
/**
 * @hidden
 */
export declare class GroupDragService {
    private connection;
    private ngzone;
    private subscriptions;
    constructor(connection: GroupConnectionService, ngzone: NgZone);
    connect(draggables: DraggableDirective[], filter?: ColumnFilter): void;
    unsubscribe(): void;
}
