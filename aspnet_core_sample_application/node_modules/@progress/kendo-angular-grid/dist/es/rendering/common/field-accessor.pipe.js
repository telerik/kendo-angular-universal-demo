/* tslint:disable:pipe-naming */
import { Pipe } from '@angular/core';
import { getter } from '@progress/kendo-data-query';
import { isNullOrEmptyString, isPresent } from '../../utils';
import { IntlService } from '@progress/kendo-angular-intl';
/**
 * @hidden
 */
var FieldAccessorPipe = (function () {
    function FieldAccessorPipe(intlService) {
        this.intlService = intlService;
    }
    FieldAccessorPipe.prototype.transform = function (dataItem, fieldName, format, safe) {
        if (format === void 0) { format = ""; }
        if (safe === void 0) { safe = true; }
        if (!isNullOrEmptyString(fieldName)) {
            var value = getter(fieldName, safe)(dataItem);
            if (isPresent(value) && !isNullOrEmptyString(format)) {
                return this.intlService.format(format, value);
            }
            return value;
        }
        return dataItem;
    };
    return FieldAccessorPipe;
}());
export { FieldAccessorPipe };
FieldAccessorPipe.decorators = [
    { type: Pipe, args: [{
                name: 'valueOf',
                pure: false
            },] },
];
/** @nocollapse */
FieldAccessorPipe.ctorParameters = function () { return [
    { type: IntlService, },
]; };
