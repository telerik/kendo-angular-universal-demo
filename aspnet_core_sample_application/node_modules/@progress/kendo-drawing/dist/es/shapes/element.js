import OptionsStore from '../core/options-store';
import ObserversMixin from '../mixins/observers-mixin';
import Rect from '../geometry/rect';
import Matrix from '../geometry/matrix';
import createTransform from '../geometry/transform';
import toMatrix from '../geometry/to-matrix';
import { Class } from '../common';
import { defined, definitionId, isTransparent, valueOrDefault } from '../util';

var Element = (function (Class) {
    function Element(options) {
        Class.call(this);

        this._initOptions(options);
    }

    if ( Class ) Element.__proto__ = Class;
    Element.prototype = Object.create( Class && Class.prototype );
    Element.prototype.constructor = Element;

    Element.prototype._initOptions = function _initOptions (options) {
        if ( options === void 0 ) options = {};

        var clip = options.clip;
        var transform = options.transform;

        if (transform) {
            options.transform = createTransform(transform);
        }

        if (clip && !clip.id) {
            clip.id = definitionId();
        }

        this.options = new OptionsStore(options);
        this.options.addObserver(this);
    };

    Element.prototype.transform = function transform (value) {
        if (defined(value)) {
            this.options.set("transform", createTransform(value));
        } else {
            return this.options.get("transform");
        }
    };

    Element.prototype.parentTransform = function parentTransform () {
        var element = this;
        var parentMatrix;

        while (element.parent) {
            element = element.parent;
            var transformation = element.transform();
            if (transformation) {
                parentMatrix = transformation.matrix().multiplyCopy(parentMatrix || Matrix.unit());
            }
        }

        if (parentMatrix) {
            return createTransform(parentMatrix);
        }
    };

    Element.prototype.currentTransform = function currentTransform (parentTransform) {
        if ( parentTransform === void 0 ) parentTransform = this.parentTransform();

        var elementTransform = this.transform();
        var elementMatrix = toMatrix(elementTransform);

        var parentMatrix = toMatrix(parentTransform);
        var combinedMatrix;

        if (elementMatrix && parentMatrix) {
            combinedMatrix = parentMatrix.multiplyCopy(elementMatrix);
        } else {
            combinedMatrix = elementMatrix || parentMatrix;
        }

        if (combinedMatrix) {
            return createTransform(combinedMatrix);
        }
    };

    Element.prototype.visible = function visible (value) {
        if (defined(value)) {
            this.options.set("visible", value);
            return this;
        }

        return this.options.get("visible") !== false;
    };

    Element.prototype.clip = function clip (value) {
        var options = this.options;
        if (defined(value)) {
            if (value && !value.id) {
                value.id = definitionId();
            }
            options.set("clip", value);
            return this;
        }

        return options.get("clip");
    };

    Element.prototype.opacity = function opacity (value) {
        if (defined(value)) {
            this.options.set("opacity", value);
            return this;
        }

        return valueOrDefault(this.options.get("opacity"), 1);
    };

    Element.prototype.clippedBBox = function clippedBBox (transformation) {
        var bbox = this._clippedBBox(transformation);
        if (bbox) {
            var clip = this.clip();
            return clip ? Rect.intersect(bbox, clip.bbox(transformation)) : bbox;
        }
    };

    Element.prototype.containsPoint = function containsPoint (point, parentTransform) {
        if (this.visible()) {
            var transform = this.currentTransform(parentTransform);
            var transformedPoint = point;
            if (transform) {
                transformedPoint = point.transformCopy(transform.matrix().invert());
            }
            return (this._hasFill() && this._containsPoint(transformedPoint)) || (this._isOnPath && this._hasStroke() && this._isOnPath(transformedPoint));
        }
        return false;
    };

    Element.prototype._hasFill = function _hasFill () {
        var fill = this.options.fill;
        return fill && !isTransparent(fill.color);
    };

    Element.prototype._hasStroke = function _hasStroke () {
        var stroke = this.options.stroke;
        return stroke && stroke.width > 0 && !isTransparent(stroke.color);
    };

    Element.prototype._clippedBBox = function _clippedBBox (transformation) {
        return this.bbox(transformation);
    };

    return Element;
}(Class));

Element.prototype.nodeType = "Element";

ObserversMixin.extend(Element.prototype);

export default Element;

//# sourceMappingURL=element.js.map
