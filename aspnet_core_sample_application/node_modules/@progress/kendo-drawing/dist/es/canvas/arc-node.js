import PathNode from './path-node';
import NODE_MAP from './node-map';
import renderPath from './utils/render-path';

var ArcNode = (function (PathNode) {
    function ArcNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) ArcNode.__proto__ = PathNode;
    ArcNode.prototype = Object.create( PathNode && PathNode.prototype );
    ArcNode.prototype.constructor = ArcNode;

    ArcNode.prototype.renderPoints = function renderPoints (ctx) {
        var path = this.srcElement.toPath();
        renderPath(ctx, path);
    };

    return ArcNode;
}(PathNode));

NODE_MAP.Arc = ArcNode;

export default ArcNode;
//# sourceMappingURL=arc-node.js.map
