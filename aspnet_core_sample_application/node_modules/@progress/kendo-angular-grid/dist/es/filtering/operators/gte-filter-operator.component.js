import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents the `GreaterOrEqualTo` (**Is greater than or equal to**) numeric filter operator.
 */
var GreaterOrEqualToFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(GreaterOrEqualToFilterOperatorComponent, _super);
    function GreaterOrEqualToFilterOperatorComponent(localization) {
        return _super.call(this, "gte", localization) || this;
    }
    return GreaterOrEqualToFilterOperatorComponent;
}(FilterOperatorBase));
export { GreaterOrEqualToFilterOperatorComponent };
GreaterOrEqualToFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return GreaterOrEqualToFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-gte-operator',
                template: ""
            },] },
];
/** @nocollapse */
GreaterOrEqualToFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
