import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents the `Equal` (**Is equal to**) filter operator.
 */
var EqualFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(EqualFilterOperatorComponent, _super);
    function EqualFilterOperatorComponent(localization) {
        return _super.call(this, "eq", localization) || this;
    }
    return EqualFilterOperatorComponent;
}(FilterOperatorBase));
export { EqualFilterOperatorComponent };
EqualFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return EqualFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-eq-operator',
                template: ""
            },] },
];
/** @nocollapse */
EqualFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
