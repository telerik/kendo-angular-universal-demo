import * as tslib_1 from "tslib";
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/*
 * Represents the `Less` (**Is less than**) numeric filter operator.
 */
var LessFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(LessFilterOperatorComponent, _super);
    function LessFilterOperatorComponent(localization) {
        return _super.call(this, "lt", localization) || this;
    }
    return LessFilterOperatorComponent;
}(FilterOperatorBase));
export { LessFilterOperatorComponent };
LessFilterOperatorComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: FilterOperatorBase,
                        useExisting: forwardRef(function () { return LessFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-lt-operator',
                template: ""
            },] },
];
/** @nocollapse */
LessFilterOperatorComponent.ctorParameters = function () { return [
    { type: LocalizationService, },
]; };
