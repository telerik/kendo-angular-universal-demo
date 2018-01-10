"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var expand_state_service_1 = require("../../common/expand-state.service");
/**
 * @hidden
 */
var DetailsService = (function (_super) {
    tslib_1.__extends(DetailsService, _super);
    function DetailsService() {
        return _super.call(this, true) || this;
    }
    return DetailsService;
}(expand_state_service_1.ExpandStateService));
DetailsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
DetailsService.ctorParameters = function () { return []; };
exports.DetailsService = DetailsService;
