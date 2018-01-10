import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/throttleTime';
/**
 * @hidden
 */
var ResizeService = (function () {
    function ResizeService() {
        this.resizeSubscription = new Subscription(function () { });
        this.dispatcher = new Subject();
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
export { ResizeService };
ResizeService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ResizeService.ctorParameters = function () { return []; };
