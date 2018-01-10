import { Parser } from './parsers';
import { Result } from './result';
/**
 * @hidden
 */
var always = function (value) { return new Parser(function (stream) { return new Result(value, stream); }); };
/**
 * @hidden
 */
var append = function (p1, p2) { return p1.chain(function (vs) { return p2.map(function (v) { return vs.concat([v]); }); }); };
/**
 * @hidden
 */
export var sequence = function (list) { return list.reduce(function (acc, parser) { return append(acc, parser); }, always([])); };
/**
 * @hidden
 */
export var greedy = function (parser) { return new Parser(function (stream) {
    var result = new Result([], stream);
    while (!stream.eof()) {
        result = result.concat(parser.run(stream));
    }
    return result;
}); };
