import * as tslib_1 from "tslib";
import { PreventableEvent } from '../common/preventable-event';
var CellCloseEvent = (function (_super) {
    tslib_1.__extends(CellCloseEvent, _super);
    function CellCloseEvent(options) {
        var _this = _super.call(this) || this;
        /**
         * @hidden
         */
        _this.action = 'cellClose';
        Object.assign(_this, options);
        return _this;
    }
    return CellCloseEvent;
}(PreventableEvent));
export { CellCloseEvent };
