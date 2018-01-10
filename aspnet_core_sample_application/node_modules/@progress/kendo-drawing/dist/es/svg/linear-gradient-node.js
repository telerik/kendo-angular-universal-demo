import GradientNode from './gradient-node';

var LinearGradientNode = (function (GradientNode) {
    function LinearGradientNode () {
        GradientNode.apply(this, arguments);
    }

    if ( GradientNode ) LinearGradientNode.__proto__ = GradientNode;
    LinearGradientNode.prototype = Object.create( GradientNode && GradientNode.prototype );
    LinearGradientNode.prototype.constructor = LinearGradientNode;

    LinearGradientNode.prototype.template = function template () {
        return ("<linearGradient id='" + (this.id) + "' " + (this.renderCoordinates()) + ">" + (this.renderChildren()) + "</linearGradient>");
    };

    LinearGradientNode.prototype.mapCoordinates = function mapCoordinates () {
        var srcElement = this.srcElement;
        var start = srcElement.start();
        var end = srcElement.end();
        var attrs = [
            [ "x1", start.x ],
            [ "y1", start.y ],
            [ "x2", end.x ],
            [ "y2", end.y ],
            this.mapSpace()
        ];

        return attrs;
    };

    return LinearGradientNode;
}(GradientNode));

export default LinearGradientNode;
//# sourceMappingURL=linear-gradient-node.js.map
