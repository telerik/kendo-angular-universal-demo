import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents the `NotEqual` (**Is not equal to**) filter operator.
 */
var NotEqualFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(NotEqualFilterOperatorComponent, _super);
    function NotEqualFilterOperatorComponent(localization) {
        return _super.call(this, "neq", localization) || this;
    }
    return NotEqualFilterOperatorComponent;
}(FilterOperatorBase));
export { NotEqualFilterOperatorComponent };
NotEqualFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return NotEqualFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-neq-operator',
                template: ""
            },] },
];
/** @nocollapse */
NotEqualFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
