import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents the `IsNull` (**Is null**) filter operator.
 */
var IsNullFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(IsNullFilterOperatorComponent, _super);
    function IsNullFilterOperatorComponent(localization) {
        return _super.call(this, "isnull", localization) || this;
    }
    return IsNullFilterOperatorComponent;
}(FilterOperatorBase));
export { IsNullFilterOperatorComponent };
IsNullFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return IsNullFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-isnull-operator',
                template: ""
            },] },
];
/** @nocollapse */
IsNullFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
