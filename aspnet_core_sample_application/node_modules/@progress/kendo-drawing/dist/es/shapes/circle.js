import GeometryCircle from '../geometry/circle';
import Paintable from '../mixins/paintable';
import Measurable from '../mixins/measurable';
import defineGeometryAccessors from '../accessors/define-geometry-accessors';
import Element from './element';
import { defined } from '../util';

var DEFAULT_STROKE = "#000";

var Circle = (function (Element) {
    function Circle(geometry, options) {
        if ( geometry === void 0 ) geometry = new GeometryCircle();
        if ( options === void 0 ) options = {};

        Element.call(this, options);
        this.geometry(geometry);

        if (!defined(this.options.stroke)) {
            this.stroke(DEFAULT_STROKE);
        }
    }

    if ( Element ) Circle.__proto__ = Element;
    Circle.prototype = Object.create( Element && Element.prototype );
    Circle.prototype.constructor = Circle;

    Circle.prototype.rawBBox = function rawBBox () {
        return this._geometry.bbox();
    };

    Circle.prototype._bbox = function _bbox (matrix) {
        return this._geometry.bbox(matrix);
    };

    Circle.prototype._containsPoint = function _containsPoint (point) {
        return this.geometry().containsPoint(point);
    };

    Circle.prototype._isOnPath = function _isOnPath (point) {
        return this.geometry()._isOnPath(point, this.options.stroke.width / 2);
    };

    return Circle;
}(Element));

Circle.prototype.nodeType = "Circle";

Paintable.extend(Circle.prototype);
Measurable.extend(Circle.prototype);
defineGeometryAccessors(Circle.prototype, [ "geometry" ]);

export default Circle;
//# sourceMappingURL=circle.js.map
