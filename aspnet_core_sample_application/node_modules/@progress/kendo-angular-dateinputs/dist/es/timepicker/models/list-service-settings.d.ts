import { DateFormatPart } from '@progress/kendo-angular-intl';
/**
 * @hidden
 */
export interface ListServiceSettings {
    boundRange: boolean;
    insertUndividedMax: boolean;
    min: Date;
    max: Date;
    part: DateFormatPart;
    step: number;
}
