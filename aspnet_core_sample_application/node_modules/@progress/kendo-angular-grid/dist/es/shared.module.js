import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './columns/column.component';
import { SpanColumnComponent } from './columns/span-column.component';
import { ColumnGroupComponent } from './columns/column-group.component';
import { FooterTemplateDirective } from './rendering/footer/footer-template.directive';
import { ColGroupComponent } from './rendering/common/col-group.component';
import { ResizableContainerDirective } from './layout/resizable.directive';
import { TemplateContextDirective } from './rendering/common/template-context.directive';
import { DetailTemplateDirective } from './rendering/details/detail-template.directive';
import { DraggableDirective } from './common/draggable.directive';
import { FieldAccessorPipe } from "./rendering/common/field-accessor.pipe";
import { TableDirective } from "./column-resizing/table.directive";
var exportedModules = [
    DraggableDirective,
    ColumnComponent,
    ColumnGroupComponent,
    FooterTemplateDirective,
    ColGroupComponent,
    ResizableContainerDirective,
    TemplateContextDirective,
    FieldAccessorPipe,
    DetailTemplateDirective,
    SpanColumnComponent,
    TableDirective
];
/**
 * @hidden
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.exports = function () {
        return [
            ColumnComponent,
            SpanColumnComponent,
            ColumnGroupComponent,
            FooterTemplateDirective,
            DetailTemplateDirective
        ];
    };
    return SharedModule;
}());
export { SharedModule };
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [exportedModules],
                exports: [exportedModules],
                imports: [CommonModule]
            },] },
];
/** @nocollapse */
SharedModule.ctorParameters = function () { return []; };
