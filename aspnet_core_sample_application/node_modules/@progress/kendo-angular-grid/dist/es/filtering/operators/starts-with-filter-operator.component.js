import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents the `StartsWith` (**Starts with**) filter operator.
 */
var StartsWithFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(StartsWithFilterOperatorComponent, _super);
    function StartsWithFilterOperatorComponent(localization) {
        return _super.call(this, "startswith", localization) || this;
    }
    return StartsWithFilterOperatorComponent;
}(FilterOperatorBase));
export { StartsWithFilterOperatorComponent };
StartsWithFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return StartsWithFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-startswith-operator',
                template: ""
            },] },
];
/** @nocollapse */
StartsWithFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
