import defineAccessors from '../accessors/define-accessors';
import ObserversMixin from '../mixins/observers-mixin';
import { Class } from '../common';
import { defined, MIN_NUM, MAX_NUM, round } from '../util';
import Matrix from './matrix';
import toMatrix from './to-matrix';

var Point = (function (Class) {
    function Point(x, y) {
        Class.call(this);

        this.x = x || 0;
        this.y = y || 0;
    }

    if ( Class ) Point.__proto__ = Class;
    Point.prototype = Object.create( Class && Class.prototype );
    Point.prototype.constructor = Point;

    var staticAccessors = { ZERO: {} };

    Point.prototype.equals = function equals (other) {
        return other && other.x === this.x && other.y === this.y;
    };

    Point.prototype.clone = function clone () {
        return new Point(this.x, this.y);
    };

    Point.prototype.rotate = function rotate (angle, origin) {
        var originPoint = Point.create(origin) || Point.ZERO;

        return this.transform(Matrix.rotate(angle, originPoint.x, originPoint.y));
    };

    Point.prototype.translate = function translate (x, y) {
        this.x += x;
        this.y += y;

        this.geometryChange();

        return this;
    };

    Point.prototype.translateWith = function translateWith (point) {
        return this.translate(point.x, point.y);
    };

    Point.prototype.move = function move (x, y) {
        this.x = this.y = 0;
        return this.translate(x, y);
    };

    Point.prototype.scale = function scale (scaleX, scaleY) {
        if ( scaleY === void 0 ) scaleY = scaleX;

        this.x *= scaleX;
        this.y *= scaleY;

        this.geometryChange();

        return this;
    };

    Point.prototype.scaleCopy = function scaleCopy (scaleX, scaleY) {
        return this.clone().scale(scaleX, scaleY);
    };

    Point.prototype.transform = function transform (transformation) {
        var matrix = toMatrix(transformation);
        var ref = this;
        var x = ref.x;
        var y = ref.y;

        this.x = matrix.a * x + matrix.c * y + matrix.e;
        this.y = matrix.b * x + matrix.d * y + matrix.f;

        this.geometryChange();

        return this;
    };

    Point.prototype.transformCopy = function transformCopy (transformation) {
        var point = this.clone();

        if (transformation) {
            point.transform(transformation);
        }

        return point;
    };

    Point.prototype.distanceTo = function distanceTo (point) {
        var dx = this.x - point.x;
        var dy = this.y - point.y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    Point.prototype.round = function round$1 (digits) {
        this.x = round(this.x, digits);
        this.y = round(this.y, digits);

        this.geometryChange();

        return this;
    };

    Point.prototype.toArray = function toArray (digits) {
        var doRound = defined(digits);
        var x = doRound ? round(this.x, digits) : this.x;
        var y = doRound ? round(this.y, digits) : this.y;

        return [ x, y ];
    };

    Point.prototype.toString = function toString (digits, separator) {
        if ( separator === void 0 ) separator = " ";

        var ref = this;
        var x = ref.x;
        var y = ref.y;

        if (defined(digits)) {
            x = round(x, digits);
            y = round(y, digits);
        }

        return x + separator + y;
    };

    Point.create = function create (arg0, arg1) {
        if (defined(arg0)) {
            if (arg0 instanceof Point) {
                return arg0;
            } else if (arguments.length === 1 && arg0.length === 2) {
                return new Point(arg0[0], arg0[1]);
            }

            return new Point(arg0, arg1);
        }
    };

    Point.min = function min () {
        var arguments$1 = arguments;

        var minX = MAX_NUM;
        var minY = MAX_NUM;

        for (var i = 0; i < arguments.length; i++) {
            var point = arguments$1[i];
            minX = Math.min(point.x, minX);
            minY = Math.min(point.y, minY);
        }

        return new Point(minX, minY);
    };

    Point.max = function max () {
        var arguments$1 = arguments;

        var maxX = MIN_NUM;
        var maxY = MIN_NUM;

        for (var i = 0; i < arguments.length; i++) {
            var point = arguments$1[i];
            maxX = Math.max(point.x, maxX);
            maxY = Math.max(point.y, maxY);
        }

        return new Point(maxX, maxY);
    };

    Point.minPoint = function minPoint () {
        return new Point(MIN_NUM, MIN_NUM);
    };

    Point.maxPoint = function maxPoint () {
        return new Point(MAX_NUM, MAX_NUM);
    };

    staticAccessors.ZERO.get = function () {
        return new Point(0, 0);
    };

    Object.defineProperties( Point, staticAccessors );

    return Point;
}(Class));

defineAccessors(Point.prototype, [ "x", "y" ]);
ObserversMixin.extend(Point.prototype);

export default Point;

//# sourceMappingURL=point.js.map
