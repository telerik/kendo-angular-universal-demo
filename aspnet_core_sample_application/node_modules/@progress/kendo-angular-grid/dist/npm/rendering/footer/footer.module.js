"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_module_1 = require("../../shared.module");
var footer_component_1 = require("./footer.component");
var exportedModules = [
    footer_component_1.FooterComponent
];
var importedModules = [
    common_1.CommonModule,
    shared_module_1.SharedModule
];
/**
 * @hidden
 */
var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule.exports = function () {
        return [];
    };
    return FooterModule;
}());
FooterModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [exportedModules],
                exports: [exportedModules],
                imports: importedModules.slice()
            },] },
];
/** @nocollapse */
FooterModule.ctorParameters = function () { return []; };
exports.FooterModule = FooterModule;
