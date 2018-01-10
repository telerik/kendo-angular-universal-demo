import GradientNode from './gradient-node';

var RadialGradientNode = (function (GradientNode) {
    function RadialGradientNode () {
        GradientNode.apply(this, arguments);
    }

    if ( GradientNode ) RadialGradientNode.__proto__ = GradientNode;
    RadialGradientNode.prototype = Object.create( GradientNode && GradientNode.prototype );
    RadialGradientNode.prototype.constructor = RadialGradientNode;

    RadialGradientNode.prototype.template = function template () {
        return ("<radialGradient id='" + (this.id) + "' " + (this.renderCoordinates()) + ">" + (this.renderChildren()) + "</radialGradient>");
    };

    RadialGradientNode.prototype.mapCoordinates = function mapCoordinates () {
        var srcElement = this.srcElement;
        var center = srcElement.center();
        var radius = srcElement.radius();
        var attrs = [
            [ "cx", center.x ],
            [ "cy", center.y ],
            [ "r", radius ],
            this.mapSpace()
        ];
        return attrs;
    };

    return RadialGradientNode;
}(GradientNode));

export default RadialGradientNode;
//# sourceMappingURL=radial-gradient-node.js.map
