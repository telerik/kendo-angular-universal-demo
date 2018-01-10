import { ChangeDetectorRef } from '@angular/core';
import { PagerContextService, PagerContextChanges } from "./pager-context.service";
import { PagerElementComponent } from './pager-element.component';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Displays buttons for navigating to the first and the previous page.
 */
export declare class PagerPrevButtonsComponent extends PagerElementComponent {
    private cd;
    constructor(localization: LocalizationService, pagerContext: PagerContextService, cd: ChangeDetectorRef);
    /**
     * @hidden
     *
     * @readonly
     * @type {boolean}
     * @memberOf PagerPrevButtonsComponent
     */
    readonly disabled: boolean;
    protected onChanges({total, skip, pageSize}: PagerContextChanges): void;
}
