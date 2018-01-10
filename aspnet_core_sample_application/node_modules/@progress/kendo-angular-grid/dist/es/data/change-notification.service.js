import { EventEmitter, NgZone, Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
/**
 * @hidden
 */
var ChangeNotificationService = (function () {
    function ChangeNotificationService(ngZone) {
        this.ngZone = ngZone;
        this.changes = new EventEmitter();
    }
    ChangeNotificationService.prototype.notify = function () {
        var _this = this;
        if (!this.subscription || this.subscription.closed) {
            this.subscription = this.ngZone.onStable
                .asObservable()
                .take(1)
                .subscribe(function () { return _this.changes.emit(); });
        }
    };
    return ChangeNotificationService;
}());
export { ChangeNotificationService };
ChangeNotificationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChangeNotificationService.ctorParameters = function () { return [
    { type: NgZone, },
]; };
