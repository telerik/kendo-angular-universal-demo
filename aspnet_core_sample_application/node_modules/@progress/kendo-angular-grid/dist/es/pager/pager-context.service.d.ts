import { Subject } from "rxjs/Subject";
import { PageChangeEvent } from "../data/change-event-args.interface";
/**
 * @hidden
 */
export declare type PagerContextChanges = {
    total: number;
    skip: number;
    pageSize: number;
};
/**
 * @hidden
 */
export declare class PagerContextService {
    total: number;
    skip: number;
    pageSize: number;
    changes: Subject<PagerContextChanges>;
    pageChange: Subject<PageChangeEvent>;
    notifyChanges(changes: PagerContextChanges): void;
    changePage(page: number): void;
    changePageSize(value: number): void;
}
