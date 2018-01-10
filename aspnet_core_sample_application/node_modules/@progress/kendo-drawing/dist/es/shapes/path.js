import GeometryElementsArray from './geometry-elements-array';
import Element from './element';
import Paintable from '../mixins/paintable';
import Measurable from '../mixins/measurable';
import Arc from '../geometry/arc';
import Rect from '../geometry/rect';
import Segment from '../geometry/segment';
import Point from '../geometry/point';
import Size from '../geometry/size';
import lineIntersectionsCount from '../geometry/math/line-intersections-count';
import { defined, last, rad } from '../util';

var Path = (function (Element) {
    function Path(options) {
        Element.call(this, options);
        this.segments = new GeometryElementsArray();
        this.segments.addObserver(this);

        if (!defined(this.options.stroke)) {
            this.stroke("#000");

            if (!defined(this.options.stroke.lineJoin)) {
                this.options.set("stroke.lineJoin", "miter");
            }
        }
    }

    if ( Element ) Path.__proto__ = Element;
    Path.prototype = Object.create( Element && Element.prototype );
    Path.prototype.constructor = Path;

    Path.prototype.moveTo = function moveTo (x, y) {
        this.suspend();
        this.segments.elements([]);
        this.resume();

        this.lineTo(x, y);

        return this;
    };

    Path.prototype.lineTo = function lineTo (x, y) {
        var point = defined(y) ? new Point(x, y) : x;
        var segment = new Segment(point);

        this.segments.push(segment);

        return this;
    };

    Path.prototype.curveTo = function curveTo (controlOut, controlIn, point) {
        if (this.segments.length > 0) {
            var lastSegment = last(this.segments);
            var segment = new Segment(point, controlIn);
            this.suspend();
            lastSegment.controlOut(controlOut);
            this.resume();

            this.segments.push(segment);
        }

        return this;
    };

    Path.prototype.arc = function arc (startAngle, endAngle, radiusX, radiusY, anticlockwise) {
        if (this.segments.length > 0) {
            var lastSegment = last(this.segments);
            var anchor = lastSegment.anchor();
            var start = rad(startAngle);
            var center = new Point(anchor.x - radiusX * Math.cos(start),
                anchor.y - radiusY * Math.sin(start));
            var arc = new Arc(center, {
                startAngle: startAngle,
                endAngle: endAngle,
                radiusX: radiusX,
                radiusY: radiusY,
                anticlockwise: anticlockwise
            });

            this._addArcSegments(arc);
        }

        return this;
    };

    Path.prototype.arcTo = function arcTo (end, rx, ry, largeArc, swipe, rotation) {
        if (this.segments.length > 0) {
            var lastSegment = last(this.segments);
            var anchor = lastSegment.anchor();
            var arc = Arc.fromPoints(anchor, end, rx, ry, largeArc, swipe, rotation);

            this._addArcSegments(arc);
        }
        return this;
    };

    Path.prototype._addArcSegments = function _addArcSegments (arc) {
        var this$1 = this;

        this.suspend();

        var curvePoints = arc.curvePoints();

        for (var i = 1; i < curvePoints.length; i += 3) {
            this$1.curveTo(curvePoints[i], curvePoints[i + 1], curvePoints[i + 2]);
        }

        this.resume();
        this.geometryChange();
    };

    Path.prototype.close = function close () {
        this.options.closed = true;
        this.geometryChange();

        return this;
    };

    Path.prototype.rawBBox = function rawBBox () {
        return this._bbox();
    };

    Path.prototype._containsPoint = function _containsPoint (point) {
        var segments = this.segments;
        var length = segments.length;
        var intersectionsCount = 0;
        var previous, current;

        for (var idx = 1; idx < length; idx++) {
            previous = segments[idx - 1];
            current = segments[idx];
            intersectionsCount += previous._intersectionsTo(current, point);
        }

        if (this.options.closed || !segments[0].anchor().equals(segments[length - 1].anchor())) {
            intersectionsCount += lineIntersectionsCount(segments[0].anchor(), segments[length - 1].anchor(), point);
        }

        return intersectionsCount % 2 !== 0;
    };

    Path.prototype._isOnPath = function _isOnPath (point, width) {
        var segments = this.segments;
        var length = segments.length;
        var pathWidth = width || this.options.stroke.width;

        if (length > 1) {
            if (segments[0]._isOnPathTo(segments[1], point, pathWidth, "start")) {
                return true;
            }

            for (var idx = 2; idx <= length - 2; idx++) {
                if (segments[idx - 1]._isOnPathTo(segments[idx], point, pathWidth)) {
                    return true;
                }
            }

            if (segments[length - 2]._isOnPathTo(segments[length - 1], point, pathWidth, "end")) {
                return true;
            }
        }
        return false;
    };

    Path.prototype._bbox = function _bbox (matrix) {
        var segments = this.segments;
        var length = segments.length;
        var boundingBox;

        if (length === 1) {
            var anchor = segments[0].anchor().transformCopy(matrix);
            boundingBox = new Rect(anchor, Size.ZERO);
        } else if (length > 0) {
            for (var i = 1; i < length; i++) {
                var segmentBox = segments[i - 1].bboxTo(segments[i], matrix);
                if (boundingBox) {
                    boundingBox = Rect.union(boundingBox, segmentBox);
                } else {
                    boundingBox = segmentBox;
                }
            }
        }

        return boundingBox;
    };

    Path.fromRect = function fromRect (rect, options) {
        return new Path(options)
            .moveTo(rect.topLeft())
            .lineTo(rect.topRight())
            .lineTo(rect.bottomRight())
            .lineTo(rect.bottomLeft())
            .close();
    };

    Path.fromPoints = function fromPoints (points, options) {
        if (points) {
            var path = new Path(options);

            for (var i = 0; i < points.length; i++) {
                var point = Point.create(points[i]);
                if (point) {
                    if (i === 0) {
                        path.moveTo(point);
                    } else {
                        path.lineTo(point);
                    }
                }
            }

            return path;
        }
    };

    Path.fromArc = function fromArc (arc, options) {
        var path = new Path(options);
        var startAngle = arc.startAngle;
        var start = arc.pointAt(startAngle);
        path.moveTo(start.x, start.y);
        path.arc(startAngle, arc.endAngle, arc.radiusX, arc.radiusY, arc.anticlockwise);
        return path;
    };

    return Path;
}(Element));

Path.prototype.nodeType = "Path";

Paintable.extend(Path.prototype);
Measurable.extend(Path.prototype);

export default Path;
//# sourceMappingURL=path.js.map
