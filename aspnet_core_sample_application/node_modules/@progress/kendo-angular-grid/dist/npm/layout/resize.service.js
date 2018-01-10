"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var Subscription_1 = require("rxjs/Subscription");
require("rxjs/add/operator/throttleTime");
/**
 * @hidden
 */
var ResizeService = (function () {
    function ResizeService() {
        this.resizeSubscription = new Subscription_1.Subscription(function () { });
        this.dispatcher = new Subject_1.Subject();
        // tslint:disable-next-line:member-ordering
        this.changes = this.dispatcher.asObservable().throttleTime(100);
    }
    ResizeService.prototype.connect = function (resizes) {
        this.resizeSubscription.add(resizes.subscribe(this.dispatcher));
    };
    ResizeService.prototype.destroy = function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    };
    return ResizeService;
}());
ResizeService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ResizeService.ctorParameters = function () { return []; };
exports.ResizeService = ResizeService;
