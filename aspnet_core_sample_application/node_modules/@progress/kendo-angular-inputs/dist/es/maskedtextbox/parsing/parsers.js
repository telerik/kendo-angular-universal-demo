import { Result, ResultType } from './result';
import { Stream } from './stream';
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
        if (input instanceof Stream) {
            return this.parse(input);
        }
        else {
            return this.parse(new Stream(toArray(input), toArray(control)));
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
        return this.run(c).type === ResultType.Literal;
    };
    return Parser;
}());
export { Parser };
/**
 * @hidden
 */
export var mask = function (_a) {
    var prompt = _a.prompt, promptPlaceholder = _a.promptPlaceholder;
    return function (rule) { return new Parser(function (stream) {
        while (!stream.eof()) {
            var _a = stream.peek(), char = _a.char, control = _a.control;
            if (char === control && control === prompt) {
                stream.eat();
                return new Result(prompt, stream, ResultType.Mask);
            }
            if (rule.test(char)) {
                stream.eat();
                return new Result(char, stream, ResultType.Mask);
            }
            if (char === promptPlaceholder) {
                stream.eat();
                return new Result(prompt, stream, ResultType.Mask);
            }
            stream.eat_input();
        }
        stream.eat();
        return new Result(prompt, stream, ResultType.Mask);
    }); };
};
/**
 * @hidden
 */
export var literal = function (token) { return new Parser(function (stream) {
    //    let {char, control} = stream.peek();
    var char = stream.peek().char;
    if (char === token) {
        stream.eat();
        return new Result(token, stream, ResultType.Literal);
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
    return new Result(token, stream, ResultType.Literal);
}); };
/**
 * @hidden
 */
export var unmask = function (prompt) { return function (rule) { return new Parser(function (stream) {
    while (!stream.eof()) {
        var _a = stream.peek(), char = _a.char, control = _a.control;
        if (char === prompt && control === prompt) {
            stream.eat();
            return new Result(char, stream);
        }
        if (rule.test(char)) {
            stream.eat();
            return new Result(char, stream);
        }
        stream.eat_input();
    }
    stream.eat();
    return new Result('', stream);
}); }; };
/**
 * @hidden
 */
export var unliteral = function (token) { return new Parser(function (stream) {
    if (stream.eof()) {
        return new Result('', stream);
    }
    var char = stream.peek().char;
    if (char === token) {
        stream.eat();
    }
    return new Result(token, stream);
}); };
/**
 * @hidden
 */
export var token = function (rules, creator) { return new Parser(function (stream) {
    var char = stream.next().char;
    var rule = rules[char];
    if (char === ESCAPE_CHARACTER) {
        char = stream.next().char;
        return new Result(creator.literal(char), stream);
    }
    if (!rule) {
        return new Result(creator.literal(char), stream);
    }
    return new Result(creator.mask(rule), stream);
}); };
/**
 * @hidden
 */
export var rawMask = function (_a) {
    var prompt = _a.prompt, promptPlaceholder = _a.promptPlaceholder;
    return new Parser(function (stream) {
        var char = stream.next().char;
        if (char === prompt) {
            return new Result(promptPlaceholder, stream);
        }
        return new Result(char, stream);
    });
};
/**
 * @hidden
 */
export var rawLiteral = function (includeLiterals) { return new Parser(function (stream) {
    var char = stream.next().char;
    if (includeLiterals) {
        return new Result(char, stream);
    }
    return new Result('', stream);
}); };
