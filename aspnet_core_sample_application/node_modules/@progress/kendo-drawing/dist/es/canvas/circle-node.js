import PathNode from './path-node';
import NODE_MAP from './node-map';

var CircleNode = (function (PathNode) {
    function CircleNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) CircleNode.__proto__ = PathNode;
    CircleNode.prototype = Object.create( PathNode && PathNode.prototype );
    CircleNode.prototype.constructor = CircleNode;

    CircleNode.prototype.renderPoints = function renderPoints (ctx) {
        var ref = this.srcElement.geometry();
        var center = ref.center;
        var radius = ref.radius;

        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    };

    return CircleNode;
}(PathNode));

NODE_MAP.Circle = CircleNode;

export default CircleNode;
//# sourceMappingURL=circle-node.js.map
