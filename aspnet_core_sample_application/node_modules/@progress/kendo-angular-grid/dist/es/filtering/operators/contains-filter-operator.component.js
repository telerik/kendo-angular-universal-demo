import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `Contains` (**Contains**) filter operator.
 */
var ContainsFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(ContainsFilterOperatorComponent, _super);
    function ContainsFilterOperatorComponent(localization) {
        return _super.call(this, "contains", localization) || this;
    }
    return ContainsFilterOperatorComponent;
}(FilterOperatorBase));
export { ContainsFilterOperatorComponent };
ContainsFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return ContainsFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-contains-operator',
                template: ""
            },] },
];
/** @nocollapse */
ContainsFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
