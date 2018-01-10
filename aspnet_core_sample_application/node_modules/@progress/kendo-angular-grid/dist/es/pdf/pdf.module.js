import { NgModule } from '@angular/core';
import { PDFComponent } from './pdf.component';
import { PDFMarginComponent } from './pdf-margin.component';
import { PDFCommandDirective } from './pdf-command.directive';
import { PDFTemplateDirective } from './pdf-template.directive';
var exportedModules = [
    PDFComponent,
    PDFMarginComponent,
    PDFCommandDirective,
    PDFTemplateDirective
];
var declarations = [
    PDFComponent,
    PDFMarginComponent,
    PDFCommandDirective,
    PDFTemplateDirective
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the Grid PDF component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Grid and PDF modules
 * import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
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
 *     imports:      [BrowserModule, GridModule, PDFModule], // import Grid and PDF modules
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
var PDFModule = (function () {
    function PDFModule() {
    }
    return PDFModule;
}());
export { PDFModule };
PDFModule.decorators = [
    { type: NgModule, args: [{
                declarations: [declarations],
                exports: [exportedModules]
            },] },
];
/** @nocollapse */
PDFModule.ctorParameters = function () { return []; };
