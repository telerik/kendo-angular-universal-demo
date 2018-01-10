"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var filter_operator_base_1 = require("./filter-operator.base");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
/**
 * Represents the `IsEmpty` (**Is empty**) filter operator.
 */
var IsEmptyFilterOperatorComponent = (function (_super) {
    tslib_1.__extends(IsEmptyFilterOperatorComponent, _super);
    function IsEmptyFilterOperatorComponent(localization) {
        return _super.call(this, "isempty", localization) || this;
    }
    return IsEmptyFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
IsEmptyFilterOperatorComponent.decorators = [
    { type: core_1.Component, args: [{
                providers: [
                    {
                        provide: filter_operator_base_1.FilterOperatorBase,
                        useExisting: core_1.forwardRef(function () { return IsEmptyFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                    }
                ],
                selector: 'kendo-filter-isempty-operator',
                template: ""
            },] },
];
/** @nocollapse */
IsEmptyFilterOperatorComponent.ctorParameters = function () { return [
    { type: kendo_angular_l10n_1.LocalizationService, },
]; };
exports.IsEmptyFilterOperatorComponent = IsEmptyFilterOperatorComponent;
