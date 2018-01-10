"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var filter_operator_base_1 = require("./filter-operator.base");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
/**
 * Represents the `NotEqual` (**Is not equal to**) filter operator.
 */
var NotEqualFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(NotEqualFilterOperatorComponent, _super);
    function NotEqualFilterOperatorComponent(localization) {
        return _super.call(this, "neq", localization) || this;
    }
    return NotEqualFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
NotEqualFilterOperatorComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: filter_operator_base_1.FilterOperatorBase,
                        useExisting: core_1.forwardRef(function () { return NotEqualFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-neq-operator',
                template: ""
            },] },
];
/** @nocollapse */
NotEqualFilterOperatorComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.NotEqualFilterOperatorComponent = NotEqualFilterOperatorComponent;
