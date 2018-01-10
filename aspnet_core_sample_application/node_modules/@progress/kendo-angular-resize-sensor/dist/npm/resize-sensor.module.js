"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var resize_sensor_component_1 = require("./resize-sensor.component");
var COMPONENT_DIRECTIVES = [resize_sensor_component_1.ResizeSensorComponent];
/**
 * Resize Sensor module
 */
var ResizeSensorModule = (function () {
    function ResizeSensorModule() {
    }
    return ResizeSensorModule;
}());
ResizeSensorModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [COMPONENT_DIRECTIVES],
                exports: [COMPONENT_DIRECTIVES]
            },] },
];
/** @nocollapse */
ResizeSensorModule.ctorParameters = function () { return []; };
exports.ResizeSensorModule = ResizeSensorModule;
