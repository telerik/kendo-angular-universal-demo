import { Class } from '../common';
import { defined, rad, round } from '../util';

var Matrix = (function (Class) {
    function Matrix(a, b, c, d, e, f) {
        if ( a === void 0 ) a = 0;
        if ( b === void 0 ) b = 0;
        if ( c === void 0 ) c = 0;
        if ( d === void 0 ) d = 0;
        if ( e === void 0 ) e = 0;
        if ( f === void 0 ) f = 0;

        Class.call(this);

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
    }

    if ( Class ) Matrix.__proto__ = Class;
    Matrix.prototype = Object.create( Class && Class.prototype );
    Matrix.prototype.constructor = Matrix;

    Matrix.prototype.multiplyCopy = function multiplyCopy (matrix) {
        return new Matrix(
            this.a * matrix.a + this.c * matrix.b,
            this.b * matrix.a + this.d * matrix.b,
            this.a * matrix.c + this.c * matrix.d,
            this.b * matrix.c + this.d * matrix.d,
            this.a * matrix.e + this.c * matrix.f + this.e,
            this.b * matrix.e + this.d * matrix.f + this.f
        );
    };

    Matrix.prototype.invert = function invert () {
        var ref = this;
        var a = ref.a;
        var b = ref.b;
        var d = ref.c;
        var e = ref.d;
        var g = ref.e;
        var h = ref.f;
        var det = a * e - b * d;

        if (det === 0) {
            return null;
        }

        return new Matrix(e / det, -b / det, -d / det, a / det,
                          (d * h - e * g) / det, (b * g - a * h) / det);
    };

    Matrix.prototype.clone = function clone () {
        return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
    };

    Matrix.prototype.equals = function equals (other) {
        if (!other) {
            return false;
        }

        return this.a === other.a && this.b === other.b &&
               this.c === other.c && this.d === other.d &&
               this.e === other.e && this.f === other.f;
    };

    Matrix.prototype.round = function round$1 (precision) {
        this.a = round(this.a, precision);
        this.b = round(this.b, precision);
        this.c = round(this.c, precision);
        this.d = round(this.d, precision);
        this.e = round(this.e, precision);
        this.f = round(this.f, precision);

        return this;
    };

    Matrix.prototype.toArray = function toArray (precision) {
        var result = [ this.a, this.b, this.c, this.d, this.e, this.f ];

        if (defined(precision)) {
            for (var i = 0; i < result.length; i++) {
                result[i] = round(result[i], precision);
            }
        }

        return result;
    };

    Matrix.prototype.toString = function toString (precision, separator) {
        if ( separator === void 0 ) separator = ",";

        return this.toArray(precision).join(separator);
    };

    Matrix.translate = function translate (x, y) {
        return new Matrix(1, 0, 0, 1, x, y);
    };

    Matrix.unit = function unit () {
        return new Matrix(1, 0, 0, 1, 0, 0);
    };

    Matrix.rotate = function rotate (angle, x, y) {
        var matrix = new Matrix();
        matrix.a = Math.cos(rad(angle));
        matrix.b = Math.sin(rad(angle));
        matrix.c = -matrix.b;
        matrix.d = matrix.a;
        matrix.e = (x - x * matrix.a + y * matrix.b) || 0;
        matrix.f = (y - y * matrix.a - x * matrix.b) || 0;

        return matrix;
    };

    Matrix.scale = function scale (scaleX, scaleY) {
        return new Matrix(scaleX, 0, 0, scaleY, 0, 0);
    };

    return Matrix;
}(Class));

Matrix.IDENTITY = Matrix.unit();

export default Matrix;
//# sourceMappingURL=matrix.js.map
