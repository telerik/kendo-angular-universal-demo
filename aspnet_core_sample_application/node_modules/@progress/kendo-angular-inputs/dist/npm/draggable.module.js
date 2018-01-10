"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var draggable_1 = require("./common/draggable");
var common_1 = require("@angular/common");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
/**
 * @hidden
 */
/**
 * @hidden
 */
var DraggableModule = (function () {
    function DraggableModule() {
    }
    return DraggableModule;
}());
DraggableModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [draggable_1.KendoDraggableDirective],
                exports: [draggable_1.KendoDraggableDirective],
                imports: [common_1.CommonModule],
                providers: [
                    { provide: kendo_angular_intl_1.IntlService, useClass: kendo_angular_intl_1.CldrIntlService }
                ]
            },] },
];
/** @nocollapse */
DraggableModule.ctorParameters = function () { return []; };
exports.DraggableModule = DraggableModule;
