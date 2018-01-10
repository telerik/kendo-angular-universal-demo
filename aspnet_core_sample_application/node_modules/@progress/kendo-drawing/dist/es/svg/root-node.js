import BaseNode from '../core/base-node';
import Node from './node';
import DefinitionNode from './definition-node';

var RootNode = (function (Node) {
    function RootNode(options) {
        Node.call(this);
        this.options = options;
        this.defs = new DefinitionNode();
    }

    if ( Node ) RootNode.__proto__ = Node;
    RootNode.prototype = Object.create( Node && Node.prototype );
    RootNode.prototype.constructor = RootNode;

    RootNode.prototype.attachTo = function attachTo (domElement) {
        this.element = domElement;
        this.defs.attachTo(domElement.firstElementChild);
    };

    RootNode.prototype.clear = function clear () {
        BaseNode.prototype.clear.call(this);
    };

    RootNode.prototype.template = function template () {
        return this.defs.render() + this.renderChildren();
    };

    RootNode.prototype.definitionChange = function definitionChange (e) {
        this.defs.definitionChange(e);
    };

    return RootNode;
}(Node));

export default RootNode;
//# sourceMappingURL=root-node.js.map
