import Node from './node';

var ClipNode = (function (Node) {
    function ClipNode(srcElement) {
        Node.call(this);

        this.srcElement = srcElement;
        this.id = srcElement.id;

        this.load([ srcElement ]);
    }

    if ( Node ) ClipNode.__proto__ = Node;
    ClipNode.prototype = Object.create( Node && Node.prototype );
    ClipNode.prototype.constructor = ClipNode;

    ClipNode.prototype.template = function template () {
        return ("<clipPath id='" + (this.id) + "'>" + (this.renderChildren()) + "</clipPath>");
    };

    return ClipNode;
}(Node));

export default ClipNode;
//# sourceMappingURL=clip-node.js.map
