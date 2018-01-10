import PathNode from './path-node';
import NODE_MAP from './node-map';

var MultiPathNode = (function (PathNode) {
    function MultiPathNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) MultiPathNode.__proto__ = PathNode;
    MultiPathNode.prototype = Object.create( PathNode && PathNode.prototype );
    MultiPathNode.prototype.constructor = MultiPathNode;

    MultiPathNode.prototype.renderData = function renderData () {
        var this$1 = this;

        var paths = this.srcElement.paths;

        if (paths.length > 0) {
            var result = [];

            for (var i = 0; i < paths.length; i++) {
                result.push(this$1.printPath(paths[i]));
            }

            return result.join(" ");
        }
    };

    return MultiPathNode;
}(PathNode));

NODE_MAP.MultiPath = MultiPathNode;

export default MultiPathNode;
//# sourceMappingURL=multi-path-node.js.map
