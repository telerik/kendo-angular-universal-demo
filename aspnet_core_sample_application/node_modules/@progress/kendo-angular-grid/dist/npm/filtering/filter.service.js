"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
/**
 * Represent a service to set the filter descriptor.
 */
var FilterService = (function () {
    function FilterService() {
        /**
         * Fires when the filter descriptors is set.
         */
        this.changes = new Subject_1.Subject();
    }
    /**
     * Sets the filter descriptor.
     *
     * @param {CompositeFilterDescriptor} value - The filter descriptor that will be set.
     */
    FilterService.prototype.filter = function (value) {
        this.changes.next(value);
    };
    return FilterService;
}());
exports.FilterService = FilterService;
