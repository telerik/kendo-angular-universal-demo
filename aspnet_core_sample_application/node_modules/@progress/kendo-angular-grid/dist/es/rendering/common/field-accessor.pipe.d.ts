import { PipeTransform } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
/**
 * @hidden
 */
export declare class FieldAccessorPipe implements PipeTransform {
    private intlService;
    constructor(intlService: IntlService);
    transform(dataItem: any, fieldName: string, format?: string, safe?: boolean): any;
}
