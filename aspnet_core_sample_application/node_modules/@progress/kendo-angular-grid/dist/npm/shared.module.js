"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var column_component_1 = require("./columns/column.component");
var span_column_component_1 = require("./columns/span-column.component");
var column_group_component_1 = require("./columns/column-group.component");
var footer_template_directive_1 = require("./rendering/footer/footer-template.directive");
var col_group_component_1 = require("./rendering/common/col-group.component");
var resizable_directive_1 = require("./layout/resizable.directive");
var template_context_directive_1 = require("./rendering/common/template-context.directive");
var detail_template_directive_1 = require("./rendering/details/detail-template.directive");
var draggable_directive_1 = require("./common/draggable.directive");
var field_accessor_pipe_1 = require("./rendering/common/field-accessor.pipe");
var table_directive_1 = require("./column-resizing/table.directive");
var exportedModules = [
    draggable_directive_1.DraggableDirective,
    column_component_1.ColumnComponent,
    column_group_component_1.ColumnGroupComponent,
    footer_template_directive_1.FooterTemplateDirective,
    col_group_component_1.ColGroupComponent,
    resizable_directive_1.ResizableContainerDirective,
    template_context_directive_1.TemplateContextDirective,
    field_accessor_pipe_1.FieldAccessorPipe,
    detail_template_directive_1.DetailTemplateDirective,
    span_column_component_1.SpanColumnComponent,
    table_directive_1.TableDirective
];
/**
 * @hidden
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.exports = function () {
        return [
            column_component_1.ColumnComponent,
            span_column_component_1.SpanColumnComponent,
            column_group_component_1.ColumnGroupComponent,
            footer_template_directive_1.FooterTemplateDirective,
            detail_template_directive_1.DetailTemplateDirective
        ];
    };
    return SharedModule;
}());
SharedModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [exportedModules],
                exports: [exportedModules],
                imports: [common_1.CommonModule]
            },] },
];
/** @nocollapse */
SharedModule.ctorParameters = function () { return []; };
exports.SharedModule = SharedModule;
