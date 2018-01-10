import { ChangeDetectorRef } from '@angular/core';
import { PagerContextService, PagerContextChanges } from "./pager-context.service";
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { PagerElementComponent } from "./pager-element.component";
/**
 * Displays numeric buttons to enable navigation between the pages.
 */
export declare class PagerNumericButtonsComponent extends PagerElementComponent {
    private cd;
    protected pagerContext: PagerContextService;
    /**
     * The count of the shown buttons.
     *
     * @type {number}
     * @memberOf PagerNumericButtonsComponent
     */
    buttonCount: number;
    /**
     * @hidden
     *
     * @readonly
     * @type {number[]}
     * @memberOf PagerNumericButtonsComponent
     */
    readonly buttons: number[];
    /**
     * @hidden
     */
    readonly end: number;
    /**
     * @hidden
     */
    readonly start: number;
    constructor(localization: LocalizationService, cd: ChangeDetectorRef, pagerContext: PagerContextService);
    protected onChanges({total, skip, pageSize}: PagerContextChanges): void;
}
