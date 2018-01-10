import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents the `DoesNotContain` (**Does not contain**) filter operator.
 */
var DoesNotContainFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(DoesNotContainFilterOperatorComponent, _super);
    function DoesNotContainFilterOperatorComponent(localization) {
        return _super.call(this, "doesnotcontain", localization) || this;
    }
    return DoesNotContainFilterOperatorComponent;
}(FilterOperatorBase));
export { DoesNotContainFilterOperatorComponent };
DoesNotContainFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return DoesNotContainFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-not-contains-operator',
                template: ""
            },] },
];
/** @nocollapse */
DoesNotContainFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
