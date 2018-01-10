import Node from './node';
import { parseColor } from '../common';
import { isTransparent, valueOrDefault } from '../util';
import LinearGradient from '../gradients/linear-gradient';
import RadialGradient from '../gradients/radial-gradient';
import { DASH_ARRAYS, SOLID, BUTT } from '../core/constants';
import renderPath from './utils/render-path';
import NODE_MAP from './node-map';

function addGradientStops(gradient, stops) {
    for (var idx = 0; idx < stops.length; idx++) {
        var stop = stops[idx];
        var color = parseColor(stop.color());

        color.a *= stop.opacity();

        gradient.addColorStop(stop.offset(), color.toCssRgba());
    }
}

var PathNode = (function (Node) {
    function PathNode () {
        Node.apply(this, arguments);
    }

    if ( Node ) PathNode.__proto__ = Node;
    PathNode.prototype = Object.create( Node && Node.prototype );
    PathNode.prototype.constructor = PathNode;

    PathNode.prototype.renderTo = function renderTo (ctx) {
        ctx.save();

        this.setTransform(ctx);
        this.setClip(ctx);
        this.setOpacity(ctx);

        ctx.beginPath();

        this.renderPoints(ctx, this.srcElement);

        this.setLineDash(ctx);
        this.setLineCap(ctx);
        this.setLineJoin(ctx);

        this.setFill(ctx);
        this.setStroke(ctx);

        ctx.restore();
    };

    PathNode.prototype.setFill = function setFill (ctx) {
        var fill = this.srcElement.options.fill;
        var hasFill = false;

        if (fill) {
            if (fill.nodeType === "Gradient") {
                this.setGradientFill(ctx, fill);
                hasFill = true;
            } else if (!isTransparent(fill.color)) {
                ctx.fillStyle = fill.color;

                ctx.save();
                this.globalAlpha(ctx, fill.opacity);
                ctx.fill();
                ctx.restore();

                hasFill = true;
            }
        }

        return hasFill;
    };

    PathNode.prototype.setGradientFill = function setGradientFill (ctx, fill) {
        var bbox = this.srcElement.rawBBox();
        var gradient;

        if (fill instanceof LinearGradient) {
            var start = fill.start();
            var end = fill.end();
            gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
        } else if (fill instanceof RadialGradient) {
            var center = fill.center();
            gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, fill.radius());
        }

        addGradientStops(gradient, fill.stops);

        ctx.save();

        if (!fill.userSpace()) {
            ctx.transform(bbox.width(), 0, 0, bbox.height(), bbox.origin.x, bbox.origin.y);
        }
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();
    };

    PathNode.prototype.setStroke = function setStroke (ctx) {
        var stroke = this.srcElement.options.stroke;
        if (stroke && !isTransparent(stroke.color) && stroke.width > 0) {
            ctx.strokeStyle = stroke.color;
            ctx.lineWidth = valueOrDefault(stroke.width, 1);

            ctx.save();
            this.globalAlpha(ctx, stroke.opacity);
            ctx.stroke();
            ctx.restore();

            return true;
        }
    };

    PathNode.prototype.dashType = function dashType () {
        var stroke = this.srcElement.options.stroke;
        if (stroke && stroke.dashType) {
            return stroke.dashType.toLowerCase();
        }
    };

    PathNode.prototype.setLineDash = function setLineDash (ctx) {
        var dashType = this.dashType();
        if (dashType && dashType !== SOLID) {
            var dashArray = DASH_ARRAYS[dashType];
            if (ctx.setLineDash) {
                ctx.setLineDash(dashArray);
            } else {
                ctx.mozDash = dashArray;
                ctx.webkitLineDash = dashArray;
            }
        }
    };

    PathNode.prototype.setLineCap = function setLineCap (ctx) {
        var dashType = this.dashType();
        var stroke = this.srcElement.options.stroke;
        if (dashType && dashType !== SOLID) {
            ctx.lineCap = BUTT;
        } else if (stroke && stroke.lineCap) {
            ctx.lineCap = stroke.lineCap;
        }
    };

    PathNode.prototype.setLineJoin = function setLineJoin (ctx) {
        var stroke = this.srcElement.options.stroke;
        if (stroke && stroke.lineJoin) {
            ctx.lineJoin = stroke.lineJoin;
        }
    };

    PathNode.prototype.renderPoints = function renderPoints (ctx, path) {
        renderPath(ctx, path);
    };

    return PathNode;
}(Node));

NODE_MAP.Path = PathNode;

export default PathNode;

//# sourceMappingURL=path-node.js.map
