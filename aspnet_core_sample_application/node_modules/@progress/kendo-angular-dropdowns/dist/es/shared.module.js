import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { SearchBarComponent } from './searchbar.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ResizeSensorModule } from '@progress/kendo-angular-resize-sensor';
import { SharedDirectivesModule } from './shared-directives.module';
import { ListItemDirective } from './list-item.directive';
import { SelectableDirective } from './selectable.directive';
import { TemplateContextDirective } from './templates/template-context.directive';
var INTERNAL_DIRECTIVES = [
    ListComponent,
    ListItemDirective,
    SelectableDirective,
    SearchBarComponent,
    TemplateContextDirective
];
/**
 * @hidden
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
export { SharedModule };
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [INTERNAL_DIRECTIVES],
                exports: [INTERNAL_DIRECTIVES, CommonModule, FormsModule, PopupModule, ResizeSensorModule, SharedDirectivesModule],
                imports: [CommonModule, FormsModule, PopupModule, ResizeSensorModule, SharedDirectivesModule]
            },] },
];
/** @nocollapse */
SharedModule.ctorParameters = function () { return []; };
