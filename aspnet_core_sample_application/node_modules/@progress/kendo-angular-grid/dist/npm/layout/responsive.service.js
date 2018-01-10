"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/* tslint:disable: object-literal-sort-keys */
var bootstrapToMedia = function (media) { return (({
    "xs": "(max-width: 576px)",
    "sm": "(min-width: 576px)",
    "md": "(min-width: 768px)",
    "lg": "(min-width: 992px)",
    "xl": "(min-width: 1200px)"
})[media] || media); };
/* tslint:enable: object-literal-sort-keys */
var browserMatchMedia = function (media) { return window.matchMedia(media).matches; };
/**
 * @hidden
 */
var ResponsiveService = (function () {
    function ResponsiveService() {
        /**
         * @hidden
         */
        this.matchMedia = browserMatchMedia;
    }
    /**
     * @hidden
     */
    ResponsiveService.prototype.matchesMedia = function (media) {
        return !media || this.matchMedia(bootstrapToMedia(media));
    };
    return ResponsiveService;
}());
ResponsiveService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ResponsiveService.ctorParameters = function () { return []; };
exports.ResponsiveService = ResponsiveService;
