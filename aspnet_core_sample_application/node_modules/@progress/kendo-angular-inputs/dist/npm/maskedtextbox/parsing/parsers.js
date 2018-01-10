"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("./result");
var stream_1 = require("./stream");
var toArray = function (value) { return (value || '').split(''); };
var ESCAPE_CHARACTER = '\\';
/**
 * @hidden
 */
var Parser = (function () {
    function Parser(parse) {
        this.parse = parse;
    }
    Parser.prototype.run = function (input, control) {
        if (control === void 0) { control = ''; }
        if (input instanceof stream_1.Stream) {
            return this.parse(input);
        }
        else {
            return this.parse(new stream_1.Stream(toArray(input), toArray(control)));
        }
    };
    //map :: Functor f => f a ~> (a -> b) -> f b
    Parser.prototype.map = function (f) {
        var _this = this;
        return new Parser(function (stream) { return _this.parse(stream).map(f); });
    };
    //chain :: Chain m => m a ~> (a -> m b) -> m b
    Parser.prototype.chain = function (f) {
        var _this = this;
        return new Parser(function (stream) { return _this.parse(stream).chain(function (v, s) { return f(v).run(s); }); });
    };
    Parser.prototype.isLiteral = function (c) {
        return this.run(c).type === result_1.ResultType.Literal;
    };
    return Parser;
}());
exports.Parser = Parser;
/**
 * @hidden
 */
exports.mask = function (_a) {
    var prompt = _a.prompt, promptPlaceholder = _a.promptPlaceholder;
    return function (rule) { return new Parser(function (stream) {
        while (!stream.eof()) {
            var _a = stream.peek(), char = _a.char, control = _a.control;
            if (char === control && control === prompt) {
                stream.eat();
                return new result_1.Result(prompt, stream, result_1.ResultType.Mask);
            }
            if (rule.test(char)) {
                stream.eat();
                return new result_1.Result(char, stream, result_1.ResultType.Mask);
            }
            if (char === promptPlaceholder) {
                stream.eat();
                return new result_1.Result(prompt, stream, result_1.ResultType.Mask);
            }
            stream.eat_input();
        }
        stream.eat();
        return new result_1.Result(prompt, stream, result_1.ResultType.Mask);
    }); };
};
/**
 * @hidden
 */
exports.literal = function (token) { return new Parser(function (stream) {
    //    let {char, control} = stream.peek();
    var char = stream.peek().char;
    if (char === token) {
        stream.eat();
        return new result_1.Result(token, stream, result_1.ResultType.Literal);
    }
    //    if (control === token) {
    //        while (!stream.eof() && char !== token) {
    //            stream.eat_input();
    //            char = stream.peek().char;
    //        }
    //    }
    //
    //    if (control !== undefined) {
    //        stream.eat();
    //    }
    return new result_1.Result(token, stream, result_1.ResultType.Literal);
}); };
/**
 * @hidden
 */
exports.unmask = function (prompt) { return function (rule) { return new Parser(function (stream) {
    while (!stream.eof()) {
        var _a = stream.peek(), char = _a.char, control = _a.control;
        if (char === prompt && control === prompt) {
            stream.eat();
            return new result_1.Result(char, stream);
        }
        if (rule.test(char)) {
            stream.eat();
            return new result_1.Result(char, stream);
        }
        stream.eat_input();
    }
    stream.eat();
    return new result_1.Result('', stream);
}); }; };
/**
 * @hidden
 */
exports.unliteral = function (token) { return new Parser(function (stream) {
    if (stream.eof()) {
        return new result_1.Result('', stream);
    }
    var char = stream.peek().char;
    if (char === token) {
        stream.eat();
    }
    return new result_1.Result(token, stream);
}); };
/**
 * @hidden
 */
exports.token = function (rules, creator) { return new Parser(function (stream) {
    var char = stream.next().char;
    var rule = rules[char];
    if (char === ESCAPE_CHARACTER) {
        char = stream.next().char;
        return new result_1.Result(creator.literal(char), stream);
    }
    if (!rule) {
        return new result_1.Result(creator.literal(char), stream);
    }
    return new result_1.Result(creator.mask(rule), stream);
}); };
/**
 * @hidden
 */
exports.rawMask = function (_a) {
    var prompt = _a.prompt, promptPlaceholder = _a.promptPlaceholder;
    return new Parser(function (stream) {
        var char = stream.next().char;
        if (char === prompt) {
            return new result_1.Result(promptPlaceholder, stream);
        }
        return new result_1.Result(char, stream);
    });
};
/**
 * @hidden
 */
exports.rawLiteral = function (includeLiterals) { return new Parser(function (stream) {
    var char = stream.next().char;
    if (includeLiterals) {
        return new result_1.Result(char, stream);
    }
    return new result_1.Result('', stream);
}); };
