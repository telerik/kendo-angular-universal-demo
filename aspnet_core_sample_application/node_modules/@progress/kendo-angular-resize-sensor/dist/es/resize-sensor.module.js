import { NgModule } from '@angular/core';
import { ResizeSensorComponent } from './resize-sensor.component';
var COMPONENT_DIRECTIVES = [ResizeSensorComponent];
/**
 * Resize Sensor module
 */
var ResizeSensorModule = (function () {
    function ResizeSensorModule() {
    }
    return ResizeSensorModule;
}());
export { ResizeSensorModule };
ResizeSensorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [COMPONENT_DIRECTIVES],
                exports: [COMPONENT_DIRECTIVES]
            },] },
];
/** @nocollapse */
ResizeSensorModule.ctorParameters = function () { return []; };
