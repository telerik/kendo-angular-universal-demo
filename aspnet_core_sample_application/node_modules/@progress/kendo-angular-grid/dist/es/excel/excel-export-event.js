import * as tslib_1 from "tslib";
import { PreventableEvent } from '../common/preventable-event';
/**
 * Arguments for the `excelExport` event.
 */
var ExcelExportEvent = (function (_super) {
    tslib_1.__extends(ExcelExportEvent, _super);
    function ExcelExportEvent(workbook) {
        var _this = _super.call(this) || this;
        _this.workbook = workbook;
        return _this;
    }
    return ExcelExportEvent;
}(PreventableEvent));
export { ExcelExportEvent };
