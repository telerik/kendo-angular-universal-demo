"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var Stream = (function () {
    function Stream(input, control) {
        if (input === void 0) { input = []; }
        if (control === void 0) { control = []; }
        this.input = input;
        this.control = control;
        this.inputCursor = 0;
        this.controlCursor = 0;
    }
    Stream.prototype.eof = function () {
        return this.inputCursor >= this.input.length;
    };
    // Get the first value from the input.
    Stream.prototype.next = function () {
        return {
            char: this.input[this.inputCursor++],
            control: this.control[this.controlCursor++]
        };
    };
    Stream.prototype.peek = function () {
        return {
            char: this.input[this.inputCursor],
            control: this.control[this.controlCursor]
        };
    };
    Stream.prototype.eat_input = function () {
        this.inputCursor++;
    };
    Stream.prototype.eat_control = function () {
        this.controlCursor++;
    };
    Stream.prototype.eat = function () {
        this.inputCursor++;
        this.controlCursor++;
    };
    return Stream;
}());
exports.Stream = Stream;
