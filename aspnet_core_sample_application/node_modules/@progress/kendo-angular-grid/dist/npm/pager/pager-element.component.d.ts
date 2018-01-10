import { OnInit, OnDestroy } from '@angular/core';
import { PagerContextService, PagerContextChanges } from "./pager-context.service";
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * @hidden
 */
export declare abstract class PagerElementComponent implements OnInit, OnDestroy {
    private localization;
    protected pagerContext: PagerContextService;
    total: number;
    skip: number;
    pageSize: number;
    /**
     * @hidden
     *
     * @readonly
     * @type {number}
     * @memberOf PagerElementComponent
     */
    readonly currentPage: number;
    /**
     * @hidden
     *
     * @readonly
     * @type {number}
     * @memberOf PagerElementComponent
     */
    readonly totalPages: number;
    private changesSubscription;
    constructor(localization: LocalizationService, pagerContext: PagerContextService);
    /**
     * @hidden
     *
     * @param {string} key
     * @returns {string}
     *
     * @memberOf PagerElementComponent
     */
    textFor(key: string): string;
    /**
     * @hidden
     *
     * @param {number} page
     *
     * @memberOf PagerElementComponent
     */
    changePage(page: number): boolean;
    /**
     * @hidden
     *
     * @memberOf PagerElementComponent
     */
    ngOnInit(): void;
    protected abstract onChanges(changes: PagerContextChanges): void;
    ngOnDestroy(): void;
}
