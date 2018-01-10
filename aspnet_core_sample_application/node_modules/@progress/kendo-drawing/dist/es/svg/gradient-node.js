import GradientStopNode from './gradient-stop-node';
import BaseNode from '../core/base-node';
import Node from './node';
import renderAllAttr from './utils/render-all-attributes';

var GradientNode = (function (Node) {
    function GradientNode(srcElement) {
        Node.call(this, srcElement);

        this.id = srcElement.id;

        this.loadStops();
    }

    if ( Node ) GradientNode.__proto__ = Node;
    GradientNode.prototype = Object.create( Node && Node.prototype );
    GradientNode.prototype.constructor = GradientNode;

    GradientNode.prototype.loadStops = function loadStops () {
        var this$1 = this;

        var stops = this.srcElement.stops;
        var element = this.element;

        for (var idx = 0; idx < stops.length; idx++) {
            var stopNode = new GradientStopNode(stops[idx]);
            this$1.append(stopNode);
            if (element) {
                stopNode.attachTo(element);
            }
        }
    };

    GradientNode.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "gradient.stops") {
            BaseNode.prototype.clear.call(this);
            this.loadStops();
        } else if (e.field === "gradient") {
            this.allAttr(this.mapCoordinates());
        }
    };

    GradientNode.prototype.renderCoordinates = function renderCoordinates () {
        return renderAllAttr(this.mapCoordinates());
    };

    GradientNode.prototype.mapSpace = function mapSpace () {
        return [ "gradientUnits", this.srcElement.userSpace() ? "userSpaceOnUse" : "objectBoundingBox" ];
    };

    return GradientNode;
}(Node));

export default GradientNode;
//# sourceMappingURL=gradient-node.js.map
