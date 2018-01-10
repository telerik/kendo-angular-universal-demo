"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var filter_operator_base_1 = require("./filter-operator.base");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
/**
 * Represents the `IsNotNull` (**Is not null**) filter operator.
 */
var IsNotNullFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(IsNotNullFilterOperatorComponent, _super);
    function IsNotNullFilterOperatorComponent(localization) {
        return _super.call(this, "isnotnull", localization) || this;
    }
    return IsNotNullFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
IsNotNullFilterOperatorComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: filter_operator_base_1.FilterOperatorBase,
                        useExisting: core_1.forwardRef(function () { return IsNotNullFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-isnotnull-operator',
                template: ""
            },] },
];
/** @nocollapse */
IsNotNullFilterOperatorComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.IsNotNullFilterOperatorComponent = IsNotNullFilterOperatorComponent;
