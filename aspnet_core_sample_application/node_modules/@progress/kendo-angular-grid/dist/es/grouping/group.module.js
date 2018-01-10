import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupHeaderTemplateDirective } from './group-header-template.directive';
import { GroupHeaderComponent } from './group-header.component';
import { GroupFooterTemplateDirective } from './group-footer-template.directive';
import { GroupPanelComponent } from './group-panel.component';
import { GroupIndicatorComponent } from './group-indicator.component';
import { SharedModule } from "../shared.module";
var exportedModules = [
    GroupHeaderTemplateDirective,
    GroupFooterTemplateDirective,
    GroupHeaderComponent,
    GroupPanelComponent,
    GroupIndicatorComponent
];
/**
 * @hidden
 */
var GroupModule = (function () {
    function GroupModule() {
    }
    GroupModule.exports = function () {
        return [
            GroupHeaderTemplateDirective,
            GroupFooterTemplateDirective
        ];
    };
    return GroupModule;
}());
export { GroupModule };
GroupModule.decorators = [
    { type: NgModule, args: [{
                declarations: [exportedModules],
                exports: [exportedModules],
                imports: [CommonModule, SharedModule]
            },] },
];
/** @nocollapse */
GroupModule.ctorParameters = function () { return []; };
