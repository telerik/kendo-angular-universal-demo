"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var excel_component_1 = require("./excel.component");
var excel_command_directive_1 = require("./excel-command.directive");
var kendo_angular_excel_export_1 = require("@progress/kendo-angular-excel-export");
var declarations = [excel_component_1.ExcelComponent, excel_command_directive_1.ExcelCommandDirective];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the Excel component of the Grid.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Grid and Excel modules
 * import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, GridModule, ExcelModule], // import Grid and Excel modules
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
var ExcelModule = (function () {
    function ExcelModule() {
    }
    return ExcelModule;
}());
ExcelModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [declarations],
                exports: [declarations, kendo_angular_excel_export_1.ExcelExportModule]
            },] },
];
/** @nocollapse */
ExcelModule.ctorParameters = function () { return []; };
exports.ExcelModule = ExcelModule;
