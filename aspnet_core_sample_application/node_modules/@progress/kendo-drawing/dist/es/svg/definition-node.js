import LinearGradient from '../gradients/linear-gradient';
import RadialGradient from '../gradients/radial-gradient';
import LinearGradientNode from './linear-gradient-node';
import RadialGradientNode from './radial-gradient-node';
import Node from './node';
import ClipNode from './clip-node';

var DefinitionNode = (function (Node) {
    function DefinitionNode() {
        Node.call(this);
        this.definitionMap = {};
    }

    if ( Node ) DefinitionNode.__proto__ = Node;
    DefinitionNode.prototype = Object.create( Node && Node.prototype );
    DefinitionNode.prototype.constructor = DefinitionNode;

    DefinitionNode.prototype.attachTo = function attachTo (domElement) {
        this.element = domElement;
    };

    DefinitionNode.prototype.template = function template () {
        return ("<defs>" + (this.renderChildren()) + "</defs>");
    };

    DefinitionNode.prototype.definitionChange = function definitionChange (e) {
        var definitions = e.definitions;
        var action = e.action;

        if (action === "add") {
            this.addDefinitions(definitions);
        } else if (action === "remove") {
            this.removeDefinitions(definitions);
        }
    };

    DefinitionNode.prototype.createDefinition = function createDefinition (type, item) {
        var nodeType;
        if (type === "clip") {
            nodeType = ClipNode;
        } else if (type === "fill") {
            if (item instanceof LinearGradient) {
                nodeType = LinearGradientNode;
            } else if (item instanceof RadialGradient) {
                nodeType = RadialGradientNode;
            }
        }
        return new nodeType(item);
    };

    DefinitionNode.prototype.addDefinitions = function addDefinitions (definitions) {
        var this$1 = this;

        for (var field in definitions) {
            this$1.addDefinition(field, definitions[field]);
        }
    };

    DefinitionNode.prototype.addDefinition = function addDefinition (type, srcElement) {
        var ref = this;
        var element = ref.element;
        var definitionMap = ref.definitionMap;
        var id = srcElement.id;
        var mapItem = definitionMap[id];
        if (!mapItem) {
            var node = this.createDefinition(type, srcElement);
            definitionMap[id] = {
                element: node,
                count: 1
            };
            this.append(node);
            if (element) {
                node.attachTo(this.element);
            }
        } else {
            mapItem.count++;
        }
    };

    DefinitionNode.prototype.removeDefinitions = function removeDefinitions (definitions) {
        var this$1 = this;

        for (var field in definitions) {
            this$1.removeDefinition(definitions[field]);
        }
    };

    DefinitionNode.prototype.removeDefinition = function removeDefinition (srcElement) {
        var definitionMap = this.definitionMap;
        var id = srcElement.id;
        var mapItem = definitionMap[id];

        if (mapItem) {
            mapItem.count--;
            if (mapItem.count === 0) {
                this.remove(this.childNodes.indexOf(mapItem.element), 1);
                delete definitionMap[id];
            }
        }
    };

    return DefinitionNode;
}(Node));

export default DefinitionNode;
//# sourceMappingURL=definition-node.js.map
