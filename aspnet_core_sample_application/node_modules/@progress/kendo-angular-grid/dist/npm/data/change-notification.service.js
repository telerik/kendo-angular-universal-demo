"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/take");
/**
 * @hidden
 */
var ChangeNotificationService = (function () {
    function ChangeNotificationService(ngZone) {
        this.ngZone = ngZone;
        this.changes = new core_1.EventEmitter();
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
ChangeNotificationService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ChangeNotificationService.ctorParameters = function () { return [
    { type: core_1.NgZone, },
]; };
exports.ChangeNotificationService = ChangeNotificationService;
