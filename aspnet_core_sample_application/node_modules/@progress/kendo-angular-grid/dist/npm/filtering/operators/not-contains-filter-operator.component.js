"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var filter_operator_base_1 = require("./filter-operator.base");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
/**
 * Represents the `DoesNotContain` (**Does not contain**) filter operator.
 */
var DoesNotContainFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(DoesNotContainFilterOperatorComponent, _super);
    function DoesNotContainFilterOperatorComponent(localization) {
        return _super.call(this, "doesnotcontain", localization) || this;
    }
    return DoesNotContainFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
DoesNotContainFilterOperatorComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: filter_operator_base_1.FilterOperatorBase,
                        useExisting: core_1.forwardRef(function () { return DoesNotContainFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-not-contains-operator',
                template: ""
            },] },
];
/** @nocollapse */
DoesNotContainFilterOperatorComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.DoesNotContainFilterOperatorComponent = DoesNotContainFilterOperatorComponent;
