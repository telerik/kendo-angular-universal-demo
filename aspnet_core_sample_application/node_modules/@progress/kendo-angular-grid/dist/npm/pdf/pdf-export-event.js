"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var preventable_event_1 = require("../common/preventable-event");
/**
 * Arguments for the `pdfExport` event.
 */
var PDFExportEvent = (function (_super) {
    tslib_1.__extends(PDFExportEvent, _super);
    function PDFExportEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PDFExportEvent;
}(preventable_event_1.PreventableEvent));
exports.PDFExportEvent = PDFExportEvent;
