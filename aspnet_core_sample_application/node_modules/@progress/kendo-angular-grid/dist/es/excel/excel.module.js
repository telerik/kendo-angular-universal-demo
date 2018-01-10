import { NgModule } from '@angular/core';
import { ExcelComponent } from './excel.component';
import { ExcelCommandDirective } from './excel-command.directive';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
var declarations = [ExcelComponent, ExcelCommandDirective];
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
export { ExcelModule };
ExcelModule.decorators = [
    { type: NgModule, args: [{
                declarations: [declarations],
                exports: [declarations, ExcelExportModule]
            },] },
];
/** @nocollapse */
ExcelModule.ctorParameters = function () { return []; };
