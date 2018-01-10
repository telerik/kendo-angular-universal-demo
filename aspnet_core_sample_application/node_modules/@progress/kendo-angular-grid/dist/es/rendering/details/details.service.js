import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ExpandStateService } from '../../common/expand-state.service';
/**
 * @hidden
 */
var DetailsService = (function (_super) {
    tslib_1.__extends(DetailsService, _super);
    function DetailsService() {
        return _super.call(this, true) || this;
    }
    return DetailsService;
}(ExpandStateService));
export { DetailsService };
DetailsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DetailsService.ctorParameters = function () { return []; };
