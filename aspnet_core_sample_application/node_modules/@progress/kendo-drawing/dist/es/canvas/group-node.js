import Node from './node';
import Traversable from '../mixins/traversable';
import NODE_MAP from './node-map';

var GroupNode = (function (Node) {
    function GroupNode () {
        Node.apply(this, arguments);
    }

    if ( Node ) GroupNode.__proto__ = Node;
    GroupNode.prototype = Object.create( Node && Node.prototype );
    GroupNode.prototype.constructor = GroupNode;

    GroupNode.prototype.renderTo = function renderTo (ctx) {
        if (!this.visible()) {
            return;
        }

        ctx.save();

        this.setTransform(ctx);
        this.setClip(ctx);
        this.setOpacity(ctx);

        var childNodes = this.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            var child = childNodes[i];
            if (child.visible()) {
                child.renderTo(ctx);
            }
        }

        ctx.restore();
    };

    return GroupNode;
}(Node));

Traversable.extend(GroupNode.prototype, "childNodes");

NODE_MAP.Group = GroupNode;

export default GroupNode;
//# sourceMappingURL=group-node.js.map
