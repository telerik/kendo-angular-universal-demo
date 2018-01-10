import PathNode from './path-node';
import NODE_MAP from './node-map';

var TextNode = (function (PathNode) {
    function TextNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) TextNode.__proto__ = PathNode;
    TextNode.prototype = Object.create( PathNode && PathNode.prototype );
    TextNode.prototype.constructor = TextNode;

    TextNode.prototype.renderTo = function renderTo (ctx) {
        var text = this.srcElement;
        var pos = text.position();
        var size = text.measure();

        ctx.save();

        this.setTransform(ctx);
        this.setClip(ctx);
        this.setOpacity(ctx);

        ctx.beginPath();

        ctx.font = text.options.font;
        ctx.textAlign = 'left';

        if (this.setFill(ctx)) {
            ctx.fillText(text.content(), pos.x, pos.y + size.baseline);
        }

        if (this.setStroke(ctx)) {
            this.setLineDash(ctx);
            ctx.strokeText(text.content(), pos.x, pos.y + size.baseline);
        }

        ctx.restore();
    };

    return TextNode;
}(PathNode));


NODE_MAP.Text = TextNode;

export default TextNode;
//# sourceMappingURL=text-node.js.map
