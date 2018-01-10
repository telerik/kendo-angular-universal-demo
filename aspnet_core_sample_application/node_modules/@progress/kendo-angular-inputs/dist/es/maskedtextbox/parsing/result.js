/**
 * @hidden
 */
export var ResultType;
(function (ResultType) {
    ResultType[ResultType["Literal"] = 0] = "Literal";
    ResultType[ResultType["Mask"] = 1] = "Mask";
    ResultType[ResultType["Undefined"] = 2] = "Undefined";
})(ResultType || (ResultType = {}));
/**
 * @hidden
 */
var Result = (function () {
    function Result(value, rest, type) {
        if (type === void 0) { type = ResultType.Undefined; }
        this.value = value;
        this.rest = rest;
        this.type = type;
    }
    //map :: Functor f => f a ~> (a -> b) -> f b
    Result.prototype.map = function (fn) {
        return new Result(fn(this.value), this.rest);
    };
    //chain :: Chain m => m a ~> (a -> m b) -> m b
    Result.prototype.chain = function (fn) {
        return fn(this.value, this.rest);
    };
    Result.prototype.fold = function (s, _ /*we don't need it*/) {
        return s(this.value, this.rest);
    };
    Result.prototype.concat = function (r) {
        return this.map(function (vs, _) { return r.chain(function (v, __) { return vs.concat([v]); }); });
    };
    Result.prototype.toString = function () {
        return "Result({ value: '" + this.value + "', rest: " + this.rest + " })";
    };
    return Result;
}());
export { Result };
