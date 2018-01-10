import { ChangeDetectorRef } from '@angular/core';
import { PagerElementComponent } from './pager-element.component';
import { LocalizationService } from "@progress/kendo-angular-l10n";
import { PagerContextService, PagerContextChanges } from "./pager-context.service";
/**
 * Displays an input element which allows typing and rendition of a page number.
 */
export declare class PagerInputComponent extends PagerElementComponent {
    protected pagerContext: PagerContextService;
    private cd;
    constructor(localization: LocalizationService, pagerContext: PagerContextService, cd: ChangeDetectorRef);
    /**
     * @hidden
     *
     * @param {string} value
     *
     * @memberOf PagerInputComponent
     */
    onInputChange(value: string): void;
    protected onChanges({total, skip, pageSize}: PagerContextChanges): void;
}
