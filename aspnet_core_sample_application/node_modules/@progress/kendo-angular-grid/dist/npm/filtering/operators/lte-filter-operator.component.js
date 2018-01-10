"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var filter_operator_base_1 = require("./filter-operator.base");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
/*
 * Represents the `LessOrEqualTo` (**Is less than or equal to**) numeric filter operator.
 */
var LessOrEqualToFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(LessOrEqualToFilterOperatorComponent, _super);
    function LessOrEqualToFilterOperatorComponent(localization) {
        return _super.call(this, "lte", localization) || this;
    }
    return LessOrEqualToFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
LessOrEqualToFilterOperatorComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: filter_operator_base_1.FilterOperatorBase,
                        useExisting: core_1.forwardRef(function () { return LessOrEqualToFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-lte-operator',
                template: ""
            },] },
];
/** @nocollapse */
LessOrEqualToFilterOperatorComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.LessOrEqualToFilterOperatorComponent = LessOrEqualToFilterOperatorComponent;
