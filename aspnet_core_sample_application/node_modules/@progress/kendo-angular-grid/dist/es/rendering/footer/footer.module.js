import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared.module";
import { FooterComponent } from "./footer.component";
var exportedModules = [
    FooterComponent
];
var importedModules = [
    CommonModule,
    SharedModule
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
export { FooterModule };
FooterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [exportedModules],
                exports: [exportedModules],
                imports: importedModules.slice()
            },] },
];
/** @nocollapse */
FooterModule.ctorParameters = function () { return []; };
