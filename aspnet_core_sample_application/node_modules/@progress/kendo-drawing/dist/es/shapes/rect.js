import defineGeometryAccessors from '../accessors/define-geometry-accessors';
import Element from './element';
import Paintable from '../mixins/paintable';
import Measurable from '../mixins/measurable';
import GeometryRect from '../geometry/rect';
import { defined } from '../util';

var Rect = (function (Element) {
    function Rect(geometry, options) {
        if ( geometry === void 0 ) geometry = new GeometryRect();
        if ( options === void 0 ) options = {};

        Element.call(this, options);
        this.geometry(geometry);

        if (!defined(this.options.stroke)) {
            this.stroke("#000");
        }
    }

    if ( Element ) Rect.__proto__ = Element;
    Rect.prototype = Object.create( Element && Element.prototype );
    Rect.prototype.constructor = Rect;

    Rect.prototype._bbox = function _bbox (matrix) {
        return this._geometry.bbox(matrix);
    };

    Rect.prototype.rawBBox = function rawBBox () {
        return this._geometry.bbox();
    };

    Rect.prototype._containsPoint = function _containsPoint (point) {
        return this._geometry.containsPoint(point);
    };

    Rect.prototype._isOnPath = function _isOnPath (point) {
        return this.geometry()._isOnPath(point, this.options.stroke.width / 2);
    };

    return Rect;
}(Element));

Rect.prototype.nodeType = "Rect";

Paintable.extend(Rect.prototype);
Measurable.extend(Rect.prototype);
defineGeometryAccessors(Rect.prototype, [ "geometry" ]);

export default Rect;


//# sourceMappingURL=rect.js.map
