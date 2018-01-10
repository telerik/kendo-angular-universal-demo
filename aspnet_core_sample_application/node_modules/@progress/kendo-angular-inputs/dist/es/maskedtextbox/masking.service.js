import { Injectable } from '@angular/core';
import { greedy, sequence } from './parsing/combinators';
import { literal, mask, rawLiteral, rawMask, token, unliteral, unmask } from './parsing/parsers';
/**
 * @hidden
 */
var MaskingService = (function () {
    function MaskingService() {
        this.rules = {};
        this.prompt = "_";
        this.mask = "";
        this.promptPlaceholder = " ";
        this.includeLiterals = false;
        this.maskTokens = [];
        this.unmaskTokens = [];
        this.rawTokens = [];
        this.validationTokens = [];
    }
    MaskingService.prototype.update = function (_a) {
        var _b = _a.mask, mask = _b === void 0 ? '' : _b, _c = _a.prompt, prompt = _c === void 0 ? '' : _c, _d = _a.promptPlaceholder, promptPlaceholder = _d === void 0 ? ' ' : _d, _e = _a.rules, rules = _e === void 0 ? {} : _e, _f = _a.includeLiterals, includeLiterals = _f === void 0 ? false : _f;
        this.mask = mask;
        this.prompt = prompt;
        this.promptPlaceholder = promptPlaceholder;
        this.rules = rules;
        this.includeLiterals = includeLiterals;
        this.tokenize();
    };
    MaskingService.prototype.validationValue = function (maskedValue) {
        if (maskedValue === void 0) { maskedValue = ''; }
        var value = maskedValue;
        sequence(this.validationTokens)
            .run(maskedValue)
            .fold(function (unmasked) {
            value = unmasked.join('');
        });
        return value;
    };
    MaskingService.prototype.rawValue = function (maskedValue) {
        if (maskedValue === void 0) { maskedValue = ''; }
        var value = maskedValue;
        if (!this.rawTokens.length) {
            return value;
        }
        sequence(this.rawTokens)
            .run(maskedValue)
            .fold(function (unmasked) {
            value = unmasked.join('');
        });
        return value;
    };
    /**
     * @hidden
     */
    MaskingService.prototype.maskRaw = function (rawValue) {
        if (rawValue === void 0) { rawValue = ''; }
        var value = rawValue;
        if (!this.maskTokens.length) {
            return value;
        }
        sequence(this.maskTokens)
            .run(rawValue)
            .fold(function (masked) {
            value = masked.join('');
        });
        return value;
    };
    MaskingService.prototype.maskInput = function (input, control, splitPoint) {
        if (input.length < control.length) {
            return this.maskRemoved(input, control, splitPoint);
        }
        return this.maskInserted(input, control, splitPoint);
    };
    MaskingService.prototype.maskInRange = function (pasted, oldValue, start, end) {
        var value = '';
        var selection = end;
        var beforeChange = oldValue.split('').slice(0, start);
        var afterChange = oldValue.split('').slice(end);
        sequence(this.maskTokens.slice(start, end))
            .run(pasted)
            .fold(function (masked) {
            value = beforeChange
                .concat(masked)
                .concat(afterChange)
                .join('');
        });
        return {
            selection: selection,
            value: value
        };
    };
    MaskingService.prototype.maskRemoved = function (input, control, splitPoint) {
        var _this = this;
        var value = '';
        var selection = splitPoint;
        var unchanged = input.split('').slice(splitPoint);
        var changed = input.split('').slice(0, splitPoint).join('');
        var take = this.maskTokens.length - (input.length - splitPoint);
        sequence(this.maskTokens.slice(0, take))
            .run(changed, control)
            .fold(function (masked) {
            selection = _this.adjustPosition(masked, selection);
            value = masked.concat(unchanged).join('');
        });
        return {
            selection: selection,
            value: value
        };
    };
    MaskingService.prototype.adjustPosition = function (input, selection) {
        var caretChar = input[selection];
        var isLiteral = this.maskTokens[selection].isLiteral(caretChar);
        if (!isLiteral && caretChar !== this.prompt) {
            return selection + 1;
        }
        return selection;
    };
    MaskingService.prototype.maskInserted = function (input, control, splitPoint) {
        var _this = this;
        var value = '';
        var selection = splitPoint;
        var changed = input.slice(0, splitPoint);
        sequence(this.unmaskTokens)
            .run(changed, control)
            .chain(function (unmasked) {
            selection = unmasked.join('').length;
            var unchanged = control.slice(selection);
            return sequence(_this.maskTokens)
                .run(unmasked.join('') + unchanged, control);
        })
            .fold(function (masked) {
            value = masked.join('');
        });
        return {
            selection: selection,
            value: value
        };
    };
    Object.defineProperty(MaskingService.prototype, "maskTokenCreator", {
        get: function () {
            var _a = this, prompt = _a.prompt, promptPlaceholder = _a.promptPlaceholder;
            return {
                literal: function (rule) { return literal(rule); },
                mask: function (rule) { return mask({ prompt: prompt, promptPlaceholder: promptPlaceholder })(rule); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskingService.prototype, "unmaskTokenCreator", {
        get: function () {
            var _this = this;
            return {
                literal: function (rule) { return unliteral(rule); },
                mask: function (rule) { return unmask(_this.prompt)(rule); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskingService.prototype, "rawTokenCreator", {
        get: function () {
            var _a = this, prompt = _a.prompt, promptPlaceholder = _a.promptPlaceholder, includeLiterals = _a.includeLiterals;
            return {
                literal: function (_) { return rawLiteral(includeLiterals); },
                mask: function (_) { return rawMask({ prompt: prompt, promptPlaceholder: promptPlaceholder }); }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskingService.prototype, "validationTokenCreator", {
        get: function () {
            var prompt = this.prompt;
            return {
                literal: function (_) { return rawLiteral(false); },
                mask: function (_) { return rawMask({ prompt: prompt, promptPlaceholder: '' }); }
            };
        },
        enumerable: true,
        configurable: true
    });
    MaskingService.prototype.tokenize = function () {
        var _this = this;
        greedy(token(this.rules, this.maskTokenCreator))
            .run(this.mask)
            .fold(function (tokens, _) {
            _this.maskTokens = tokens;
        });
        greedy(token(this.rules, this.unmaskTokenCreator))
            .run(this.mask)
            .fold(function (tokens, _) {
            _this.unmaskTokens = tokens;
        });
        greedy(token(this.rules, this.rawTokenCreator))
            .run(this.mask)
            .fold(function (tokens, _) {
            _this.rawTokens = tokens;
        });
        greedy(token(this.rules, this.validationTokenCreator))
            .run(this.mask)
            .fold(function (tokens, _) {
            _this.validationTokens = tokens;
        });
    };
    return MaskingService;
}());
export { MaskingService };
MaskingService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MaskingService.ctorParameters = function () { return []; };
