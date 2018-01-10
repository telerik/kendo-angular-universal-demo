import Element from './element';
import Point from '../geometry/point';
import Rect from '../geometry/rect';
import toMatrix from '../geometry/to-matrix';
import Paintable from '../mixins/paintable';
import definePointAccessors from '../accessors/define-point-accessors';
import { defined, measureText } from '../util';

var DEFAULT_FONT = "12px sans-serif";
var DEFAULT_FILL = "#000";

var Text = (function (Element) {
    function Text(content, position, options) {
        if ( position === void 0 ) position = new Point();
        if ( options === void 0 ) options = {};

        Element.call(this, options);

        this.content(content);
        this.position(position);

        if (!this.options.font) {
            this.options.font = DEFAULT_FONT;
        }

        if (!defined(this.options.fill)) {
            this.fill(DEFAULT_FILL);
        }
    }

    if ( Element ) Text.__proto__ = Element;
    Text.prototype = Object.create( Element && Element.prototype );
    Text.prototype.constructor = Text;

    Text.prototype.content = function content (value) {
        if (defined(value)) {
            this.options.set("content", value);
            return this;
        }

        return this.options.get("content");
    };

    Text.prototype.measure = function measure () {
        var metrics = measureText(this.content(), {
            font: this.options.get("font")
        });

        return metrics;
    };

    Text.prototype.rect = function rect () {
        var size = this.measure();
        var pos = this.position().clone();
        return new Rect(pos, [ size.width, size.height ]);
    };

    Text.prototype.bbox = function bbox (transformation) {
        var combinedMatrix = toMatrix(this.currentTransform(transformation));
        return this.rect().bbox(combinedMatrix);
    };

    Text.prototype.rawBBox = function rawBBox () {
        return this.rect().bbox();
    };

    Text.prototype._containsPoint = function _containsPoint (point) {
        return this.rect().containsPoint(point);
    };

    return Text;
}(Element));

Text.prototype.nodeType = "Text";

Paintable.extend(Text.prototype);

definePointAccessors(Text.prototype, [ "position" ]);

export default Text;
//# sourceMappingURL=text.js.map
