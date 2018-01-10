import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/*
 * Represents the `LessOrEqualTo` (**Is less than or equal to**) numeric filter operator.
 */
var LessOrEqualToFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(LessOrEqualToFilterOperatorComponent, _super);
    function LessOrEqualToFilterOperatorComponent(localization) {
        return _super.call(this, "lte", localization) || this;
    }
    return LessOrEqualToFilterOperatorComponent;
}(FilterOperatorBase));
export { LessOrEqualToFilterOperatorComponent };
LessOrEqualToFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return LessOrEqualToFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-lte-operator',
                template: ""
            },] },
];
/** @nocollapse */
LessOrEqualToFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
