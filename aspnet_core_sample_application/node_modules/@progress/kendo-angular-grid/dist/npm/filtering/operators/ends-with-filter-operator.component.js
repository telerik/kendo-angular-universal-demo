"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var filter_operator_base_1 = require("./filter-operator.base");
/**
 * Represents the `EndsWith` (**Ends with**) string filter operator.
 */
var EndsWithFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(EndsWithFilterOperatorComponent, _super);
    function EndsWithFilterOperatorComponent(localization) {
        return _super.call(this, "endswith", localization) || this;
    }
    return EndsWithFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
EndsWithFilterOperatorComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: filter_operator_base_1.FilterOperatorBase,
                        useExisting: core_1.forwardRef(function () { return EndsWithFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-endswith-operator',
                template: ""
            },] },
];
/** @nocollapse */
EndsWithFilterOperatorComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.EndsWithFilterOperatorComponent = EndsWithFilterOperatorComponent;
