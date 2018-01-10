"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var filter_operator_base_1 = require("./filter-operator.base");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
/**
 * Represents the `StartsWith` (**Starts with**) filter operator.
 */
var StartsWithFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(StartsWithFilterOperatorComponent, _super);
    function StartsWithFilterOperatorComponent(localization) {
        return _super.call(this, "startswith", localization) || this;
    }
    return StartsWithFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
StartsWithFilterOperatorComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: filter_operator_base_1.FilterOperatorBase,
                        useExisting: core_1.forwardRef(function () { return StartsWithFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-startswith-operator',
                template: ""
            },] },
];
/** @nocollapse */
StartsWithFilterOperatorComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.StartsWithFilterOperatorComponent = StartsWithFilterOperatorComponent;
