import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `EndsWith` (**Ends with**) string filter operator.
 */
var EndsWithFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(EndsWithFilterOperatorComponent, _super);
    function EndsWithFilterOperatorComponent(localization) {
        return _super.call(this, "endswith", localization) || this;
    }
    return EndsWithFilterOperatorComponent;
}(FilterOperatorBase));
export { EndsWithFilterOperatorComponent };
EndsWithFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return EndsWithFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-endswith-operator',
                template: ""
            },] },
];
/** @nocollapse */
EndsWithFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
