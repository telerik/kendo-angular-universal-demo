import GeometryElementsArray from './geometry-elements-array';
import Element from './element';
import Path from './path';
import Paintable from '../mixins/paintable';
import Measurable from '../mixins/measurable';
import elementsBoundingBox from './utils/elements-bounding-box';
import elementsClippedBoundingBox from './utils/elements-clippend-bounding-box';
import { defined, last } from '../util';

var MultiPath = (function (Element) {
    function MultiPath(options) {
        Element.call(this, options);
        this.paths = new GeometryElementsArray();
        this.paths.addObserver(this);

        if (!defined(this.options.stroke)) {
            this.stroke("#000");
        }
    }

    if ( Element ) MultiPath.__proto__ = Element;
    MultiPath.prototype = Object.create( Element && Element.prototype );
    MultiPath.prototype.constructor = MultiPath;

    MultiPath.prototype.moveTo = function moveTo (x, y) {
        var path = new Path();
        path.moveTo(x, y);

        this.paths.push(path);

        return this;
    };

    MultiPath.prototype.lineTo = function lineTo (x, y) {
        if (this.paths.length > 0) {
            last(this.paths).lineTo(x, y);
        }

        return this;
    };

    MultiPath.prototype.curveTo = function curveTo (controlOut, controlIn, point) {
        if (this.paths.length > 0) {
            last(this.paths).curveTo(controlOut, controlIn, point);
        }

        return this;
    };

    MultiPath.prototype.arc = function arc (startAngle, endAngle, radiusX, radiusY, anticlockwise) {
        if (this.paths.length > 0) {
            last(this.paths).arc(startAngle, endAngle, radiusX, radiusY, anticlockwise);
        }

        return this;
    };

    MultiPath.prototype.arcTo = function arcTo (end, rx, ry, largeArc, swipe, rotation) {
        if (this.paths.length > 0) {
            last(this.paths).arcTo(end, rx, ry, largeArc, swipe, rotation);
        }

        return this;
    };

    MultiPath.prototype.close = function close () {
        if (this.paths.length > 0) {
            last(this.paths).close();
        }

        return this;
    };

    MultiPath.prototype._bbox = function _bbox (matrix) {
        return elementsBoundingBox(this.paths, true, matrix);
    };

    MultiPath.prototype.rawBBox = function rawBBox () {
        return elementsBoundingBox(this.paths, false);
    };

    MultiPath.prototype._containsPoint = function _containsPoint (point) {
        var paths = this.paths;

        for (var idx = 0; idx < paths.length; idx++) {
            if (paths[idx]._containsPoint(point)) {
                return true;
            }
        }
        return false;
    };

    MultiPath.prototype._isOnPath = function _isOnPath (point) {
        var paths = this.paths;
        var width = this.options.stroke.width;

        for (var idx = 0; idx < paths.length; idx++) {
            if (paths[idx]._isOnPath(point, width)) {
                return true;
            }
        }
        return false;
    };

    MultiPath.prototype._clippedBBox = function _clippedBBox (transformation) {
        return elementsClippedBoundingBox(this.paths, this.currentTransform(transformation));
    };

    return MultiPath;
}(Element));

MultiPath.prototype.nodeType = "MultiPath";

Paintable.extend(MultiPath.prototype);
Measurable.extend(MultiPath.prototype);

export default MultiPath;
//# sourceMappingURL=multi-path.js.map
