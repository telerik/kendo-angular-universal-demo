import PathNode from './path-node';
import NODE_MAP from './node-map';

var ArcNode = (function (PathNode) {
    function ArcNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) ArcNode.__proto__ = PathNode;
    ArcNode.prototype = Object.create( PathNode && PathNode.prototype );
    ArcNode.prototype.constructor = ArcNode;

    ArcNode.prototype.renderData = function renderData () {
        return this.printPath(this.srcElement.toPath());
    };

    return ArcNode;
}(PathNode));

NODE_MAP.Arc = ArcNode;

export default ArcNode;
//# sourceMappingURL=arc-node.js.map
