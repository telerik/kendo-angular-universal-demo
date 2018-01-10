"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var filter_operator_base_1 = require("./filter-operator.base");
/**
 * Represents the `Contains` (**Contains**) filter operator.
 */
var ContainsFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(ContainsFilterOperatorComponent, _super);
    function ContainsFilterOperatorComponent(localization) {
        return _super.call(this, "contains", localization) || this;
    }
    return ContainsFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
ContainsFilterOperatorComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: filter_operator_base_1.FilterOperatorBase,
                        useExisting: core_1.forwardRef(function () { return ContainsFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-contains-operator',
                template: ""
            },] },
];
/** @nocollapse */
ContainsFilterOperatorComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.ContainsFilterOperatorComponent = ContainsFilterOperatorComponent;
