import defineGeometryAccessors from '../accessors/define-geometry-accessors';
import Element from './element';
import Rect from '../geometry/rect';
import toMatrix from '../geometry/to-matrix';
import { defined } from '../util';

var Image = (function (Element) {
    function Image(src, rect, options) {
        if ( rect === void 0 ) rect = new Rect();
        if ( options === void 0 ) options = {};

        Element.call(this, options);

        this.src(src);
        this.rect(rect);
    }

    if ( Element ) Image.__proto__ = Element;
    Image.prototype = Object.create( Element && Element.prototype );
    Image.prototype.constructor = Image;

    Image.prototype.src = function src (value) {
        if (defined(value)) {
            this.options.set("src", value);
            return this;
        }

        return this.options.get("src");
    };

    Image.prototype.bbox = function bbox (transformation) {
        var combinedMatrix = toMatrix(this.currentTransform(transformation));
        return this._rect.bbox(combinedMatrix);
    };

    Image.prototype.rawBBox = function rawBBox () {
        return this._rect.bbox();
    };

    Image.prototype._containsPoint = function _containsPoint (point) {
        return this._rect.containsPoint(point);
    };

    Image.prototype._hasFill = function _hasFill () {
        return this.src();
    };

    return Image;
}(Element));

Image.prototype.nodeType = "Image";

defineGeometryAccessors(Image.prototype, [ "rect" ]);

export default Image;
//# sourceMappingURL=image.js.map
