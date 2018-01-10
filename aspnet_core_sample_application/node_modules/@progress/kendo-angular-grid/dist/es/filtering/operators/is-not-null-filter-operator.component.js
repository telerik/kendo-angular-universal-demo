import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents the `IsNotNull` (**Is not null**) filter operator.
 */
var IsNotNullFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(IsNotNullFilterOperatorComponent, _super);
    function IsNotNullFilterOperatorComponent(localization) {
        return _super.call(this, "isnotnull", localization) || this;
    }
    return IsNotNullFilterOperatorComponent;
}(FilterOperatorBase));
export { IsNotNullFilterOperatorComponent };
IsNotNullFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return IsNotNullFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-isnotnull-operator',
                template: ""
            },] },
];
/** @nocollapse */
IsNotNullFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
