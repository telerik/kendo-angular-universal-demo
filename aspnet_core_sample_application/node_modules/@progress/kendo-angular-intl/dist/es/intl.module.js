import { NgModule } from '@angular/core';
import { DatePipe } from './date.pipe';
import { NumberPipe } from './number.pipe';
import { IntlService } from './intl.service';
import { CldrIntlService } from './cldr-intl.service';
var pipes = [
    DatePipe,
    NumberPipe
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the Intl services.
 */
var IntlModule = (function () {
    function IntlModule() {
    }
    return IntlModule;
}());
export { IntlModule };
IntlModule.decorators = [
    { type: NgModule, args: [{
                declarations: [pipes],
                exports: [pipes],
                providers: [
                    { provide: IntlService, useClass: CldrIntlService }
                ]
            },] },
];
/** @nocollapse */
IntlModule.ctorParameters = function () { return []; };
