"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:pipe-naming */
var core_1 = require("@angular/core");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var utils_1 = require("../../utils");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
/**
 * @hidden
 */
var FieldAccessorPipe = (function () {
    function FieldAccessorPipe(intlService) {
        this.intlService = intlService;
    }
    FieldAccessorPipe.prototype.transform = function (dataItem, fieldName, format, safe) {
        if (format === void 0) { format = ""; }
        if (safe === void 0) { safe = true; }
        if (!utils_1.isNullOrEmptyString(fieldName)) {
            var value = kendo_data_query_1.getter(fieldName, safe)(dataItem);
            if (utils_1.isPresent(value) && !utils_1.isNullOrEmptyString(format)) {
                return this.intlService.format(format, value);
            }
            return value;
        }
        return dataItem;
    };
    return FieldAccessorPipe;
}());
FieldAccessorPipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'valueOf',
                pure: false
            },] },
];
/** @nocollapse */
FieldAccessorPipe.ctorParameters = function () { return [
    { type: kendo_angular_intl_1.IntlService, },
]; };
exports.FieldAccessorPipe = FieldAccessorPipe;
