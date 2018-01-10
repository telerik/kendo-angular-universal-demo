import defineAccessors from '../accessors/define-accessors';
import ObserversMixin from '../mixins/observers-mixin';
import { Class } from '../common';
import { deg, rad, round } from '../util';

import closeOrLess from './math/close-or-less';
import lineIntersection from './math/line-intersection';
import ellipseExtremeAngles from './math/ellipse-extreme-angles';

import { PRECISION } from './constants';
import Point from './point';
import Rect from './rect';
import transform from './transform';

var MAX_INTERVAL = 45;
var pow = Math.pow;

var Arc = (function (Class) {
    function Arc(center, options) {
        if ( center === void 0 ) center = new Point();
        if ( options === void 0 ) options = {};

        Class.call(this);

        this.setCenter(center);

        this.radiusX = options.radiusX;
        this.radiusY = options.radiusY || options.radiusX;
        this.startAngle = options.startAngle;
        this.endAngle = options.endAngle;
        this.anticlockwise = options.anticlockwise || false;
        this.xRotation = options.xRotation;
    }

    if ( Class ) Arc.__proto__ = Class;
    Arc.prototype = Object.create( Class && Class.prototype );
    Arc.prototype.constructor = Arc;

    Arc.prototype.clone = function clone () {
        return new Arc(this.center, {
            radiusX: this.radiusX,
            radiusY: this.radiusY,
            startAngle: this.startAngle,
            endAngle: this.endAngle,
            anticlockwise: this.anticlockwise
        });
    };

    Arc.prototype.setCenter = function setCenter (value) {
        this._observerField("center", Point.create(value));
        this.geometryChange();
        return this;
    };

    Arc.prototype.getCenter = function getCenter () {
        return this.center;
    };

    Arc.prototype.pointAt = function pointAt (angle) {
        var center = this.center;
        var radian = rad(angle);

        return new Point(
            center.x + this.radiusX * Math.cos(radian),
            center.y + this.radiusY * Math.sin(radian)
        );
    };

    Arc.prototype.curvePoints = function curvePoints () {
        var this$1 = this;

        var startAngle = this.startAngle;
        var dir = this.anticlockwise ? -1 : 1;
        var curvePoints = [ this.pointAt(startAngle) ];
        var interval = this._arcInterval();
        var intervalAngle = interval.endAngle - interval.startAngle;
        var subIntervalsCount = Math.ceil(intervalAngle / MAX_INTERVAL);
        var subIntervalAngle = intervalAngle / subIntervalsCount;
        var currentAngle = startAngle;
        var transformation;
        if (this.xRotation) {
            transformation = transform().rotate(this.xRotation, this.center);
        }

        for (var i = 1; i <= subIntervalsCount; i++) {
            var nextAngle = currentAngle + dir * subIntervalAngle;
            var points = this$1._intervalCurvePoints(currentAngle, nextAngle, transformation);

            curvePoints.push(points.cp1, points.cp2, points.p2);
            currentAngle = nextAngle;
        }

        return curvePoints;
    };

    Arc.prototype.bbox = function bbox (matrix) {
        var this$1 = this;

        var interval = this._arcInterval();
        var startAngle = interval.startAngle;
        var endAngle = interval.endAngle;
        var extremeAngles = ellipseExtremeAngles(this.center, this.radiusX, this.radiusY, matrix);
        var extremeX = deg(extremeAngles.x);
        var extremeY = deg(extremeAngles.y);
        var endPoint = this.pointAt(endAngle).transformCopy(matrix);
        var currentAngleX = bboxStartAngle(extremeX, startAngle);
        var currentAngleY = bboxStartAngle(extremeY, startAngle);
        var currentPoint = this.pointAt(startAngle).transformCopy(matrix);
        var minPoint = Point.min(currentPoint, endPoint);
        var maxPoint = Point.max(currentPoint, endPoint);

        while (currentAngleX < endAngle || currentAngleY < endAngle) {
            var currentPointX;
            if (currentAngleX < endAngle) {
                currentPointX = this$1.pointAt(currentAngleX).transformCopy(matrix);
                currentAngleX += 90;
            }

            var currentPointY;
            if (currentAngleY < endAngle) {
                currentPointY = this$1.pointAt(currentAngleY).transformCopy(matrix);
                currentAngleY += 90;
            }

            currentPoint = new Point(currentPointX.x, currentPointY.y);
            minPoint = Point.min(minPoint, currentPoint);
            maxPoint = Point.max(maxPoint, currentPoint);
        }

        return Rect.fromPoints(minPoint, maxPoint);
    };

    Arc.prototype._arcInterval = function _arcInterval () {
        var ref = this;
        var startAngle = ref.startAngle;
        var endAngle = ref.endAngle;
        var anticlockwise = ref.anticlockwise;

        if (anticlockwise) {
            var oldStart = startAngle;
            startAngle = endAngle;
            endAngle = oldStart;
        }

        if (startAngle > endAngle || (anticlockwise && startAngle === endAngle)) {
            endAngle += 360;
        }

        return {
            startAngle: startAngle,
            endAngle: endAngle
        };
    };

    Arc.prototype._intervalCurvePoints = function _intervalCurvePoints (startAngle, endAngle, transformation) {
        var p1 = this.pointAt(startAngle);
        var p2 = this.pointAt(endAngle);
        var p1Derivative = this._derivativeAt(startAngle);
        var p2Derivative = this._derivativeAt(endAngle);
        var t = (rad(endAngle) - rad(startAngle)) / 3;
        var cp1 = new Point(p1.x + t * p1Derivative.x, p1.y + t * p1Derivative.y);
        var cp2 = new Point(p2.x - t * p2Derivative.x, p2.y - t * p2Derivative.y);
        if (transformation) {
            p1.transform(transformation);
            p2.transform(transformation);
            cp1.transform(transformation);
            cp2.transform(transformation);
        }

        return {
            p1: p1,
            cp1: cp1,
            cp2: cp2,
            p2: p2
        };
    };

    Arc.prototype._derivativeAt = function _derivativeAt (angle) {
        var radian = rad(angle);

        return new Point(-this.radiusX * Math.sin(radian), this.radiusY * Math.cos(radian));
    };

    Arc.prototype.containsPoint = function containsPoint (point) {
        var interval = this._arcInterval();
        var intervalAngle = interval.endAngle - interval.startAngle;
        var ref = this;
        var center = ref.center;
        var radiusX = ref.radiusX;
        var radiusY = ref.radiusY;
        var distance = center.distanceTo(point);
        var angleRad = Math.atan2(point.y - center.y, point.x - center.x);
        var pointRadius = (radiusX * radiusY) /
            Math.sqrt(pow(radiusX, 2) * pow(Math.sin(angleRad), 2) + pow(radiusY, 2) * pow(Math.cos(angleRad), 2));
        var startPoint = this.pointAt(this.startAngle).round(PRECISION);
        var endPoint = this.pointAt(this.endAngle).round(PRECISION);
        var intersection = lineIntersection(center, point.round(PRECISION), startPoint, endPoint);
        var containsPoint;

        if (intervalAngle < 180) {
            containsPoint = intersection && closeOrLess(center.distanceTo(intersection), distance) && closeOrLess(distance, pointRadius);
        } else {
            var angle = calculateAngle(center.x, center.y, radiusX, radiusY, point.x, point.y);
            if (angle !== 360) {
                angle = (360 + angle) % 360;
            }

            var inAngleRange = interval.startAngle <= angle && angle <= interval.endAngle;
            containsPoint = (inAngleRange && closeOrLess(distance, pointRadius)) || (!inAngleRange && (!intersection || intersection.equals(point)));
        }
        return containsPoint;
    };

    Arc.prototype._isOnPath = function _isOnPath (point, width) {
        var interval = this._arcInterval();
        var center = this.center;
        var angle = calculateAngle(center.x, center.y, this.radiusX, this.radiusY, point.x, point.y);
        if (angle !== 360) {
            angle = (360 + angle) % 360;
        }

        var inAngleRange = interval.startAngle <= angle && angle <= interval.endAngle;

        return inAngleRange && this.pointAt(angle).distanceTo(point) <= width;
    };

    Arc.fromPoints = function fromPoints (start, end, rx, ry, largeArc, swipe, rotation) {// eslint-disable-line max-params
        var arcParameters = normalizeArcParameters({
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            rx: rx,
            ry: ry,
            largeArc: largeArc,
            swipe: swipe,
            rotation: rotation
        });

        return new Arc(arcParameters.center, {
            startAngle: arcParameters.startAngle,
            endAngle: arcParameters.endAngle,
            radiusX: arcParameters.radiusX,
            radiusY: arcParameters.radiusY,
            xRotation: arcParameters.xRotation,
            anticlockwise: swipe === 0
        });
    };

    return Arc;
}(Class));

defineAccessors(Arc.prototype, [ "radiusX", "radiusY", "startAngle", "endAngle", "anticlockwise" ]);
ObserversMixin.extend(Arc.prototype);

function calculateAngle(cx, cy, rx, ry, x, y) {
    var cos = round((x - cx) / rx, 3);
    var sin = round((y - cy) / ry, 3);

    return round(deg(Math.atan2(sin, cos)));
}

function normalizeArcParameters(parameters) {
    var x1 = parameters.x1;
    var y1 = parameters.y1;
    var x2 = parameters.x2;
    var y2 = parameters.y2;
    var rx = parameters.rx;
    var ry = parameters.ry;
    var largeArc = parameters.largeArc;
    var swipe = parameters.swipe;
    var rotation = parameters.rotation; if ( rotation === void 0 ) rotation = 0;

    var radians = rad(rotation);
    var cosine = Math.cos(radians);
    var sine = Math.sin(radians);

    var xT = cosine * (x1 - x2) / 2 + sine * (y1 - y2) / 2;
    var yT = -sine * (x1 - x2) / 2 + cosine * (y1 - y2) / 2;

    var sign = largeArc !== swipe ? 1 : -1;

    var xt2 = Math.pow(xT, 2);
    var yt2 = Math.pow(yT, 2);
    var rx2 = Math.pow(rx, 2);
    var ry2 = Math.pow(ry, 2);

    var delta = xt2 / rx2 + yt2 / ry2;

    if (delta > 1) {
        delta = Math.sqrt(xt2 / rx2 + yt2 / ry2);
        rx = delta * rx;
        rx2 = Math.pow(rx, 2);

        ry = delta * ry;
        ry2 = Math.pow(ry, 2);
    }

    var constT = sign * Math.sqrt((rx2 * ry2 - rx2 * yt2 - ry2 * xt2) / (rx2 * yt2 + ry2 * xt2));
    // due to rounding errors the value could become NaN even after radii correction
    if (isNaN(constT)) {
        constT = 0;
    }

    var cxT = constT * (rx * yT) / ry;
    var cyT = - constT * (ry * xT) / rx;

    var cx = cosine * cxT - sine * cyT + (x1 + x2) / 2;
    var cy = sine * cxT + cosine * cyT + (y1 + y2) / 2;


    var uX = (xT - cxT) / rx;
    var uY = (yT - cyT) / ry;
    var vX = -(xT + cxT) / rx;
    var vY = -(yT + cyT) / ry;

    var startAngle = (uY >= 0 ? 1 : -1) * deg(Math.acos(uX / Math.sqrt(uX * uX + uY * uY)));

    var angleCosine = round((uX * vX + uY * vY) / (Math.sqrt(uX * uX + uY * uY) * Math.sqrt(vX * vX + vY * vY)), 10);
    var angle = (uX * vY - uY * vX >= 0 ? 1 : -1) * deg(Math.acos(angleCosine));

    if (!swipe && angle > 0) {
        angle -= 360;
    }

    if (swipe && angle < 0) {
        angle += 360;
    }
    var endAngle = startAngle + angle;
    var signEndAngle = endAngle >= 0 ? 1 : -1;
    endAngle = (Math.abs(endAngle) % 360) * signEndAngle;

    return {
        center: new Point(cx, cy),
        startAngle: startAngle,
        endAngle: endAngle,
        radiusX: rx,
        radiusY: ry,
        xRotation: rotation
    };
}

function bboxStartAngle(angle, start) {
    var startAngle = angle;

    while (startAngle < start) {
        startAngle += 90;
    }

    return startAngle;
}

export default Arc;

//# sourceMappingURL=arc.js.map
