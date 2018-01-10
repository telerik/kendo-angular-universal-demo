import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager.component';
import { PagerPrevButtonsComponent } from './pager-prev-buttons.component';
import { PagerNextButtonsComponent } from './pager-next-buttons.component';
import { PagerNumericButtonsComponent } from './pager-numeric-buttons.component';
import { PagerInputComponent } from './pager-input.component';
import { PagerInfoComponent } from './pager-info.component';
import { PagerPageSizesComponent } from './pager-page-sizes.component';
import { PagerTemplateDirective } from './pager-template.directive';
import { SharedModule } from "../shared.module";
var importedModules = [
    CommonModule,
    SharedModule
];
var INTERNAL_COMPONENTS = [
    PagerComponent,
    PagerPrevButtonsComponent,
    PagerNextButtonsComponent,
    PagerNumericButtonsComponent,
    PagerInputComponent,
    PagerInfoComponent,
    PagerPageSizesComponent,
    PagerTemplateDirective
];
/**
 * @hidden
 */
var PagerModule = (function () {
    function PagerModule() {
    }
    PagerModule.exports = function () {
        return [
            PagerComponent,
            PagerPrevButtonsComponent,
            PagerNextButtonsComponent,
            PagerNumericButtonsComponent,
            PagerInputComponent,
            PagerInfoComponent,
            PagerPageSizesComponent,
            PagerTemplateDirective
        ];
    };
    return PagerModule;
}());
export { PagerModule };
PagerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [INTERNAL_COMPONENTS],
                exports: [INTERNAL_COMPONENTS],
                imports: importedModules.slice()
            },] },
];
/** @nocollapse */
PagerModule.ctorParameters = function () { return []; };
