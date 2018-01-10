import PathNode from './path-node';
import NODE_MAP from './node-map';

var RectNode = (function (PathNode) {
    function RectNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) RectNode.__proto__ = PathNode;
    RectNode.prototype = Object.create( PathNode && PathNode.prototype );
    RectNode.prototype.constructor = RectNode;

    RectNode.prototype.renderPoints = function renderPoints (ctx) {
        var ref = this.srcElement.geometry();
        var origin = ref.origin;
        var size = ref.size;

        ctx.rect(origin.x, origin.y, size.width, size.height);
    };

    return RectNode;
}(PathNode));

NODE_MAP.Rect = RectNode;

export default RectNode;
//# sourceMappingURL=rect-node.js.map
