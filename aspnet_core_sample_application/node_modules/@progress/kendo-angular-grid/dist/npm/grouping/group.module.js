"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var group_header_template_directive_1 = require("./group-header-template.directive");
var group_header_component_1 = require("./group-header.component");
var group_footer_template_directive_1 = require("./group-footer-template.directive");
var group_panel_component_1 = require("./group-panel.component");
var group_indicator_component_1 = require("./group-indicator.component");
var shared_module_1 = require("../shared.module");
var exportedModules = [
    group_header_template_directive_1.GroupHeaderTemplateDirective,
    group_footer_template_directive_1.GroupFooterTemplateDirective,
    group_header_component_1.GroupHeaderComponent,
    group_panel_component_1.GroupPanelComponent,
    group_indicator_component_1.GroupIndicatorComponent
];
/**
 * @hidden
 */
var GroupModule = (function () {
    function GroupModule() {
    }
    GroupModule.exports = function () {
        return [
            group_header_template_directive_1.GroupHeaderTemplateDirective,
            group_footer_template_directive_1.GroupFooterTemplateDirective
        ];
    };
    return GroupModule;
}());
GroupModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [exportedModules],
                exports: [exportedModules],
                imports: [common_1.CommonModule, shared_module_1.SharedModule]
            },] },
];
/** @nocollapse */
GroupModule.ctorParameters = function () { return []; };
exports.GroupModule = GroupModule;
