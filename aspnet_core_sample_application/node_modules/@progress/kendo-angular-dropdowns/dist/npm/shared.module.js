"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var list_component_1 = require("./list.component");
var searchbar_component_1 = require("./searchbar.component");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var kendo_angular_resize_sensor_1 = require("@progress/kendo-angular-resize-sensor");
var shared_directives_module_1 = require("./shared-directives.module");
var list_item_directive_1 = require("./list-item.directive");
var selectable_directive_1 = require("./selectable.directive");
var template_context_directive_1 = require("./templates/template-context.directive");
var INTERNAL_DIRECTIVES = [
    list_component_1.ListComponent,
    list_item_directive_1.ListItemDirective,
    selectable_directive_1.SelectableDirective,
    searchbar_component_1.SearchBarComponent,
    template_context_directive_1.TemplateContextDirective
];
/**
 * @hidden
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [INTERNAL_DIRECTIVES],
                exports: [INTERNAL_DIRECTIVES, common_1.CommonModule, forms_1.FormsModule, kendo_angular_popup_1.PopupModule, kendo_angular_resize_sensor_1.ResizeSensorModule, shared_directives_module_1.SharedDirectivesModule],
                imports: [common_1.CommonModule, forms_1.FormsModule, kendo_angular_popup_1.PopupModule, kendo_angular_resize_sensor_1.ResizeSensorModule, shared_directives_module_1.SharedDirectivesModule]
            },] },
];
/** @nocollapse */
SharedModule.ctorParameters = function () { return []; };
exports.SharedModule = SharedModule;
