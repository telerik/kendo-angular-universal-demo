import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents the `IsEmpty` (**Is empty**) filter operator.
 */
var IsEmptyFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(IsEmptyFilterOperatorComponent, _super);
    function IsEmptyFilterOperatorComponent(localization) {
        return _super.call(this, "isempty", localization) || this;
    }
    return IsEmptyFilterOperatorComponent;
}(FilterOperatorBase));
export { IsEmptyFilterOperatorComponent };
IsEmptyFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return IsEmptyFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-isempty-operator',
                template: ""
            },] },
];
/** @nocollapse */
IsEmptyFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
