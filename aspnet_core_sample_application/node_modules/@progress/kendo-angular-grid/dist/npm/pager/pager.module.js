"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var pager_component_1 = require("./pager.component");
var pager_prev_buttons_component_1 = require("./pager-prev-buttons.component");
var pager_next_buttons_component_1 = require("./pager-next-buttons.component");
var pager_numeric_buttons_component_1 = require("./pager-numeric-buttons.component");
var pager_input_component_1 = require("./pager-input.component");
var pager_info_component_1 = require("./pager-info.component");
var pager_page_sizes_component_1 = require("./pager-page-sizes.component");
var pager_template_directive_1 = require("./pager-template.directive");
var shared_module_1 = require("../shared.module");
var importedModules = [
    common_1.CommonModule,
    shared_module_1.SharedModule
];
var INTERNAL_COMPONENTS = [
    pager_component_1.PagerComponent,
    pager_prev_buttons_component_1.PagerPrevButtonsComponent,
    pager_next_buttons_component_1.PagerNextButtonsComponent,
    pager_numeric_buttons_component_1.PagerNumericButtonsComponent,
    pager_input_component_1.PagerInputComponent,
    pager_info_component_1.PagerInfoComponent,
    pager_page_sizes_component_1.PagerPageSizesComponent,
    pager_template_directive_1.PagerTemplateDirective
];
/**
 * @hidden
 */
var PagerModule = (function () {
    function PagerModule() {
    }
    PagerModule.exports = function () {
        return [
            pager_component_1.PagerComponent,
            pager_prev_buttons_component_1.PagerPrevButtonsComponent,
            pager_next_buttons_component_1.PagerNextButtonsComponent,
            pager_numeric_buttons_component_1.PagerNumericButtonsComponent,
            pager_input_component_1.PagerInputComponent,
            pager_info_component_1.PagerInfoComponent,
            pager_page_sizes_component_1.PagerPageSizesComponent,
            pager_template_directive_1.PagerTemplateDirective
        ];
    };
    return PagerModule;
}());
PagerModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [INTERNAL_COMPONENTS],
                exports: [INTERNAL_COMPONENTS],
                imports: importedModules.slice()
            },] },
];
/** @nocollapse */
PagerModule.ctorParameters = function () { return []; };
exports.PagerModule = PagerModule;
