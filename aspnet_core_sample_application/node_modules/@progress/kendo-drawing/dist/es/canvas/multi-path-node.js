import PathNode from './path-node';
import NODE_MAP from './node-map';
import renderPath from './utils/render-path';

var MultiPathNode = (function (PathNode) {
    function MultiPathNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) MultiPathNode.__proto__ = PathNode;
    MultiPathNode.prototype = Object.create( PathNode && PathNode.prototype );
    MultiPathNode.prototype.constructor = MultiPathNode;

    MultiPathNode.prototype.renderPoints = function renderPoints (ctx) {
        var paths = this.srcElement.paths;
        for (var i = 0; i < paths.length; i++) {
            renderPath(ctx, paths[i]);
        }
    };

    return MultiPathNode;
}(PathNode));

NODE_MAP.MultiPath = MultiPathNode;

export default MultiPathNode;
//# sourceMappingURL=multi-path-node.js.map
