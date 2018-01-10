import ObserversMixin from '../mixins/observers-mixin';
import { Class } from '../common';
import toMatrix from './to-matrix';
import Matrix from './matrix';
import Point from './point';

var Transformation = (function (Class) {
    function Transformation(matrix) {
        if ( matrix === void 0 ) matrix = Matrix.unit();

        Class.call(this);

        this._matrix = matrix;
    }

    if ( Class ) Transformation.__proto__ = Class;
    Transformation.prototype = Object.create( Class && Class.prototype );
    Transformation.prototype.constructor = Transformation;

    Transformation.prototype.clone = function clone () {
        return new Transformation(
            this._matrix.clone()
        );
    };

    Transformation.prototype.equals = function equals (other) {
        return other &&
               other._matrix.equals(this._matrix);
    };

    Transformation.prototype.translate = function translate (x, y) {
        this._matrix = this._matrix.multiplyCopy(Matrix.translate(x, y));

        this._optionsChange();
        return this;
    };

    Transformation.prototype.scale = function scale (scaleX, scaleY, origin) {
        if ( scaleY === void 0 ) scaleY = scaleX;
        if ( origin === void 0 ) origin = null;

        var originPoint = origin;

        if (originPoint) {
            originPoint = Point.create(originPoint);
            this._matrix = this._matrix.multiplyCopy(Matrix.translate(originPoint.x, originPoint.y));
        }

        this._matrix = this._matrix.multiplyCopy(Matrix.scale(scaleX, scaleY));

        if (originPoint) {
            this._matrix = this._matrix.multiplyCopy(Matrix.translate(-originPoint.x, -originPoint.y));
        }

        this._optionsChange();
        return this;
    };

    Transformation.prototype.rotate = function rotate (angle, origin) {
        var originPoint = Point.create(origin) || Point.ZERO;

        this._matrix = this._matrix.multiplyCopy(Matrix.rotate(angle, originPoint.x, originPoint.y));

        this._optionsChange();
        return this;
    };

    Transformation.prototype.multiply = function multiply (transformation) {
        var matrix = toMatrix(transformation);

        this._matrix = this._matrix.multiplyCopy(matrix);

        this._optionsChange();
        return this;
    };

    Transformation.prototype.matrix = function matrix (value) {
        if (value) {
            this._matrix = value;
            this._optionsChange();
            return this;
        }

        return this._matrix;
    };

    Transformation.prototype._optionsChange = function _optionsChange () {
        this.optionsChange({
            field: "transform",
            value: this
        });
    };

    return Transformation;
}(Class));

ObserversMixin.extend(Transformation.prototype);

export default Transformation;

//# sourceMappingURL=transformation.js.map
