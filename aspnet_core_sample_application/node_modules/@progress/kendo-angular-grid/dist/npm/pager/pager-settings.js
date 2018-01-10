"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var normalizeSettings = function (_a) {
    var _b = _a.buttonCount, buttonCount = _b === void 0 ? 10 : _b, _c = _a.info, info = _c === void 0 ? true : _c, _d = _a.type, type = _d === void 0 ? 'numeric' : _d, _e = _a.pageSizes, pageSizes = _e === void 0 ? false : _e, _f = _a.previousNext, previousNext = _f === void 0 ? true : _f;
    return ({
        buttonCount: buttonCount,
        info: info,
        pageSizes: pageSizes === true ? [5, 10, 20] : pageSizes,
        previousNext: previousNext,
        type: type
    });
};
/**
 * @hidden
 */
exports.normalize = function (settings) {
    return normalizeSettings(settings === true ? {} : settings);
};
