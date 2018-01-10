import { ChangeDetectorRef } from '@angular/core';
import { PagerElementComponent } from './pager-element.component';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PagerContextService, PagerContextChanges } from "./pager-context.service";
/**
 * Displays information about the current page and the total number of records.
 */
export declare class PagerInfoComponent extends PagerElementComponent {
    private cd;
    protected pagerContext: PagerContextService;
    /**
     * @hidden
     *
     * @readonly
     * @type {number}
     * @memberOf PagerInfoComponent
     */
    readonly maxItems: number;
    /**
     * @hidden
     *
     * @readonly
     * @type {number}
     * @memberOf PagerInfoComponent
     */
    readonly currentPageText: number;
    /**
     * @hidden
     *
     * @readonly
     * @type {boolean}
     * @memberOf PagerInfoComponent
     */
    readonly classes: boolean;
    constructor(localization: LocalizationService, cd: ChangeDetectorRef, pagerContext: PagerContextService);
    protected onChanges({total, skip, pageSize}: PagerContextChanges): void;
}
