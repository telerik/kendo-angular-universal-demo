import Node from './node';
import renderAttr from './utils/render-attribute';

var GradientStopNode = (function (Node) {
    function GradientStopNode () {
        Node.apply(this, arguments);
    }

    if ( Node ) GradientStopNode.__proto__ = Node;
    GradientStopNode.prototype = Object.create( Node && Node.prototype );
    GradientStopNode.prototype.constructor = GradientStopNode;

    GradientStopNode.prototype.template = function template () {
        return ("<stop " + (this.renderOffset()) + " " + (this.renderStyle()) + " />");
    };

    GradientStopNode.prototype.renderOffset = function renderOffset () {
        return renderAttr("offset", this.srcElement.offset());
    };

    GradientStopNode.prototype.mapStyle = function mapStyle () {
        var srcElement = this.srcElement;
        return [
            [ "stop-color", srcElement.color() ],
            [ "stop-opacity", srcElement.opacity() ]
        ];
    };

    GradientStopNode.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "offset") {
            this.attr(e.field, e.value);
        } else if (e.field === "color" || e.field === "opacity") {
            this.css("stop-" + e.field, e.value);
        }
    };

    return GradientStopNode;
}(Node));

export default GradientStopNode;
//# sourceMappingURL=gradient-stop-node.js.map
