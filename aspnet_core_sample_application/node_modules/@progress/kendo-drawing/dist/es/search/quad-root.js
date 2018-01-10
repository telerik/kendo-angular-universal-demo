import { Class } from '../common';

var QuadRoot = (function (Class) {
    function QuadRoot() {
        Class.call(this);

        this.shapes = [];
    }

    if ( Class ) QuadRoot.__proto__ = Class;
    QuadRoot.prototype = Object.create( Class && Class.prototype );
    QuadRoot.prototype.constructor = QuadRoot;

    QuadRoot.prototype._add = function _add (shape, bbox) {
        this.shapes.push({
            bbox: bbox,
            shape: shape
        });
        shape._quadNode = this;
    };

    QuadRoot.prototype.pointShapes = function pointShapes (point) {
        var shapes = this.shapes;
        var length = shapes.length;
        var result = [];
        for (var idx = 0; idx < length; idx++) {
            if (shapes[idx].bbox.containsPoint(point)) {
                result.push(shapes[idx].shape);
            }
        }
        return result;
    };

    QuadRoot.prototype.insert = function insert (shape, bbox) {
        this._add(shape, bbox);
    };

    QuadRoot.prototype.remove = function remove (shape) {
        var shapes = this.shapes;
        var length = shapes.length;

        for (var idx = 0; idx < length; idx++) {
            if (shapes[idx].shape === shape) {
                shapes.splice(idx, 1);
                break;
            }
        }
    };

    return QuadRoot;
}(Class));

export default QuadRoot;
//# sourceMappingURL=quad-root.js.map
