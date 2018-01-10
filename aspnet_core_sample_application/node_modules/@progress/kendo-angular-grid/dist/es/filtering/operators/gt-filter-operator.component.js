import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/*
 * Represents the `Greater` (**Is greater than**) numeric filter operator.
 */
var GreaterFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(GreaterFilterOperatorComponent, _super);
    function GreaterFilterOperatorComponent(localization) {
        return _super.call(this, "gt", localization) || this;
    }
    return GreaterFilterOperatorComponent;
}(FilterOperatorBase));
export { GreaterFilterOperatorComponent };
GreaterFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return GreaterFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-gt-operator',
                template: ""
            },] },
];
/** @nocollapse */
GreaterFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
