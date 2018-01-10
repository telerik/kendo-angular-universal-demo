import defineAccessors from '../accessors/define-accessors';
import ObserversMixin from '../mixins/observers-mixin';
import Point from './point';
import Rect from './rect';
import ellipseExtremeAngles from './math/ellipse-extreme-angles';
import { Class } from '../common';
import { rad } from '../util';

var PI_DIV_2 = Math.PI / 2;

var Circle = (function (Class) {
    function Circle(center, radius) {
        if ( center === void 0 ) center = new Point();
        if ( radius === void 0 ) radius = 0;

        Class.call(this);

        this.setCenter(center);
        this.setRadius(radius);
    }

    if ( Class ) Circle.__proto__ = Class;
    Circle.prototype = Object.create( Class && Class.prototype );
    Circle.prototype.constructor = Circle;

    Circle.prototype.setCenter = function setCenter (value) {
        this._observerField("center", Point.create(value));
        this.geometryChange();
        return this;
    };

    Circle.prototype.getCenter = function getCenter () {
        return this.center;
    };

    Circle.prototype.equals = function equals (other) {
        return other &&
               other.center.equals(this.center) &&
               other.radius === this.radius;
    };

    Circle.prototype.clone = function clone () {
        return new Circle(this.center.clone(), this.radius);
    };

    Circle.prototype.pointAt = function pointAt (angle) {
        return this._pointAt(rad(angle));
    };

    Circle.prototype.bbox = function bbox (matrix) {
        var this$1 = this;

        var extremeAngles = ellipseExtremeAngles(this.center, this.radius, this.radius, matrix);
        var minPoint = Point.maxPoint();
        var maxPoint = Point.minPoint();

        for (var i = 0; i < 4; i++) {
            var currentPointX = this$1._pointAt(extremeAngles.x + i * PI_DIV_2).transformCopy(matrix);
            var currentPointY = this$1._pointAt(extremeAngles.y + i * PI_DIV_2).transformCopy(matrix);
            var currentPoint = new Point(currentPointX.x, currentPointY.y);

            minPoint = Point.min(minPoint, currentPoint);
            maxPoint = Point.max(maxPoint, currentPoint);
        }

        return Rect.fromPoints(minPoint, maxPoint);
    };

    Circle.prototype._pointAt = function _pointAt (angle) {
        var ref = this;
        var center = ref.center;
        var radius = ref.radius;

        return new Point(
            center.x + radius * Math.cos(angle),
            center.y + radius * Math.sin(angle)
        );
    };

    Circle.prototype.containsPoint = function containsPoint (point) {
        var ref = this;
        var center = ref.center;
        var radius = ref.radius;
        var inCircle = Math.pow(point.x - center.x, 2) +
            Math.pow(point.y - center.y, 2) <= Math.pow(radius, 2);
        return inCircle;
    };

    Circle.prototype._isOnPath = function _isOnPath (point, width) {
        var ref = this;
        var center = ref.center;
        var radius = ref.radius;
        var pointDistance = center.distanceTo(point);

        return radius - width <= pointDistance && pointDistance <= radius + width;
    };

    return Circle;
}(Class));

defineAccessors(Circle.prototype, [ "radius" ]);
ObserversMixin.extend(Circle.prototype);

export default Circle;
//# sourceMappingURL=circle.js.map
