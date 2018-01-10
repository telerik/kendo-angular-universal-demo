import ObserversMixin from '../mixins/observers-mixin';
import { Class } from '../common';
import definePointAccessors from '../accessors/define-point-accessors';
import Rect from './rect';
import Point from './point';
import transform from './transform';
import { deg, MIN_NUM, MAX_NUM } from '../util';
import isOutOfEndPoint from './math/is-out-of-end-point';
import calculateCurveAt from './math/calculate-curve-at';
import hasRootsInRange from './math/has-roots-in-range';
import curveIntersectionsCount from './math/curve-intersections-count';
import lineIntersectionsCount from './math/line-intersections-count';

var Segment = (function (Class) {
    function Segment(anchor, controlIn, controlOut) {
        Class.call(this);

        this.anchor(anchor || new Point());
        this.controlIn(controlIn);
        this.controlOut(controlOut);
    }

    if ( Class ) Segment.__proto__ = Class;
    Segment.prototype = Object.create( Class && Class.prototype );
    Segment.prototype.constructor = Segment;

    Segment.prototype.bboxTo = function bboxTo (toSegment, matrix) {
        var segmentAnchor = this.anchor().transformCopy(matrix);
        var toSegmentAnchor = toSegment.anchor().transformCopy(matrix);
        var rect;

        if (this.controlOut() && toSegment.controlIn()) {
            rect = this._curveBoundingBox(
                segmentAnchor, this.controlOut().transformCopy(matrix),
                toSegment.controlIn().transformCopy(matrix), toSegmentAnchor
            );
        } else {
            rect = this._lineBoundingBox(segmentAnchor, toSegmentAnchor);
        }

        return rect;
    };

    Segment.prototype._lineBoundingBox = function _lineBoundingBox (p1, p2) {
        return Rect.fromPoints(p1, p2);
    };

    Segment.prototype._curveBoundingBox = function _curveBoundingBox (p1, cp1, cp2, p2) {
        var points = [ p1, cp1, cp2, p2 ];
        var extremesX = this._curveExtremesFor(points, "x");
        var extremesY = this._curveExtremesFor(points, "y");
        var xLimits = arrayLimits([ extremesX.min, extremesX.max, p1.x, p2.x ]);
        var yLimits = arrayLimits([ extremesY.min, extremesY.max, p1.y, p2.y ]);

        return Rect.fromPoints(new Point(xLimits.min, yLimits.min), new Point(xLimits.max, yLimits.max));
    };

    Segment.prototype._curveExtremesFor = function _curveExtremesFor (points, field) {
        var extremes = this._curveExtremes(
            points[0][field], points[1][field],
            points[2][field], points[3][field]
        );

        return {
            min: calculateCurveAt(extremes.min, field, points),
            max: calculateCurveAt(extremes.max, field, points)
        };
    };

    Segment.prototype._curveExtremes = function _curveExtremes (x1, x2, x3, x4) {
        var a = x1 - 3 * x2 + 3 * x3 - x4;
        var b = - 2 * (x1 - 2 * x2 + x3);
        var c = x1 - x2;
        var sqrt = Math.sqrt(b * b - 4 * a * c);
        var t1 = 0;
        var t2 = 1;

        if (a === 0) {
            if (b !== 0) {
                t1 = t2 = -c / b;
            }
        } else if (!isNaN(sqrt)) {
            t1 = (- b + sqrt) / (2 * a);
            t2 = (- b - sqrt) / (2 * a);
        }

        var min = Math.max(Math.min(t1, t2), 0);
        if (min < 0 || min > 1) {
            min = 0;
        }

        var max = Math.min(Math.max(t1, t2), 1);
        if (max > 1 || max < 0) {
            max = 1;
        }

        return {
            min: min,
            max: max
        };
    };

    Segment.prototype._intersectionsTo = function _intersectionsTo (segment, point) {
        var intersectionsCount;
        if (this.controlOut() && segment.controlIn()) {
            intersectionsCount = curveIntersectionsCount([ this.anchor(), this.controlOut(), segment.controlIn(), segment.anchor() ], point, this.bboxTo(segment));
        } else {
            intersectionsCount = lineIntersectionsCount(this.anchor(), segment.anchor(), point);
        }
        return intersectionsCount;
    };

    Segment.prototype._isOnCurveTo = function _isOnCurveTo (segment, point, width, endSegment) {
        var bbox = this.bboxTo(segment).expand(width, width);
        if (bbox.containsPoint(point)) {
            var p1 = this.anchor();
            var p2 = this.controlOut();
            var p3 = segment.controlIn();
            var p4 = segment.anchor();

            if (endSegment === "start" && p1.distanceTo(point) <= width) {
                return !isOutOfEndPoint(p1, p2, point);
            } else if (endSegment === "end" && p4.distanceTo(point) <= width) {
                return !isOutOfEndPoint(p4, p3, point);
            }

            //the approach is not entirely correct but is close and the alternatives are solving a 6th degree polynomial or testing the segment points
            var points = [ p1, p2, p3, p4 ];
            if (hasRootsInRange(points, point, "x", "y", width) || hasRootsInRange(points, point, "y", "x", width)) {
                return true;
            }
            var rotation = transform().rotate(45, point);
            var rotatedPoints = [ p1.transformCopy(rotation), p2.transformCopy(rotation), p3.transformCopy(rotation), p4.transformCopy(rotation) ];
            return hasRootsInRange(rotatedPoints, point, "x", "y", width) || hasRootsInRange(rotatedPoints, point, "y", "x", width);
        }
    };

    Segment.prototype._isOnLineTo = function _isOnLineTo (segment, point, width) {
        var p1 = this.anchor();
        var p2 = segment.anchor();
        var angle = deg(Math.atan2(p2.y - p1.y, p2.x - p1.x));
        var rect = new Rect([ p1.x, p1.y - width / 2 ], [ p1.distanceTo(p2), width ]);
        return rect.containsPoint(point.transformCopy(transform().rotate(-angle, p1)));
    };

    Segment.prototype._isOnPathTo = function _isOnPathTo (segment, point, width, endSegment) {
        var isOnPath;
        if (this.controlOut() && segment.controlIn()) {
            isOnPath = this._isOnCurveTo(segment, point, width / 2, endSegment);
        } else {
            isOnPath = this._isOnLineTo(segment, point, width);
        }
        return isOnPath;
    };

    return Segment;
}(Class));

definePointAccessors(Segment.prototype, [ "anchor", "controlIn", "controlOut" ]);
ObserversMixin.extend(Segment.prototype);

function arrayLimits(arr) {
    var length = arr.length;
    var min = MAX_NUM;
    var max = MIN_NUM;

    for (var i = 0; i < length; i ++) {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }

    return {
        min: min,
        max: max
    };
}

export default Segment;
//# sourceMappingURL=segment.js.map
