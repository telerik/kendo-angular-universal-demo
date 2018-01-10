import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * @hidden
 */
export declare const toJSON: (xs: FilterOperatorBase[]) => {
    text: string;
    value: string;
}[];
/**
 * @hidden
 */
export declare class FilterOperatorBase {
    protected operator: string;
    protected localization: LocalizationService;
    /**
     * The text to be displayed in the DropDownList.
     * @readonly
     * @type {string}
     * @memberOf FilterOperatorBase
     */
    /**
     *
     */
    text: string;
    private messages;
    private _text;
    constructor(operator: string, localization: LocalizationService);
    /**
     * @hidden
     */
    toJSON(): {
        text: string;
        value: string;
    };
}
