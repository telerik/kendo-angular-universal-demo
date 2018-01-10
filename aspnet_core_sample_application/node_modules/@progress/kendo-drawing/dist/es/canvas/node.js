import BaseNode from '../core/base-node';
import NODE_MAP from './node-map';
import renderPath from './utils/render-path';
import { defined } from '../util';

var Node = (function (BaseNode) {
    function Node(srcElement) {
        BaseNode.call(this, srcElement);
        if (srcElement) {
            this.initClip();
        }
    }

    if ( BaseNode ) Node.__proto__ = BaseNode;
    Node.prototype = Object.create( BaseNode && BaseNode.prototype );
    Node.prototype.constructor = Node;

    Node.prototype.initClip = function initClip () {
        var clip = this.srcElement.clip();
        if (clip) {
            this.clip = clip;
            clip.addObserver(this);
        }
    };

    Node.prototype.clear = function clear () {
        if (this.srcElement) {
            this.srcElement.removeObserver(this);
        }

        this.clearClip();

        BaseNode.prototype.clear.call(this);
    };

    Node.prototype.clearClip = function clearClip () {
        if (this.clip) {
            this.clip.removeObserver(this);
            delete this.clip;
        }
    };

    Node.prototype.setClip = function setClip (ctx) {
        if (this.clip) {
            ctx.beginPath();
            renderPath(ctx, this.clip);
            ctx.clip();
        }
    };

    Node.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "clip") {
            this.clearClip();
            this.initClip();
        }

        BaseNode.prototype.optionsChange.call(this, e);
    };

    Node.prototype.setTransform = function setTransform (ctx) {
        if (this.srcElement) {
            var transform = this.srcElement.transform();
            if (transform) {
                ctx.transform.apply(ctx, transform.matrix().toArray(6));
            }
        }
    };

    Node.prototype.loadElements = function loadElements (elements, pos, cors) {
        var this$1 = this;

        for (var i = 0; i < elements.length; i++) {
            var srcElement = elements[i];
            var children = srcElement.children;

            var childNode = new NODE_MAP[srcElement.nodeType](srcElement, cors);

            if (children && children.length > 0) {
                childNode.load(children, pos, cors);
            }

            if (defined(pos)) {
                this$1.insertAt(childNode, pos);
            } else {
                this$1.append(childNode);
            }
        }
    };

    Node.prototype.load = function load (elements, pos, cors) {
        this.loadElements(elements, pos, cors);

        this.invalidate();
    };

    Node.prototype.setOpacity = function setOpacity (ctx) {
        if (this.srcElement) {
            var opacity = this.srcElement.opacity();
            if (defined(opacity)) {
                this.globalAlpha(ctx, opacity);
            }
        }
    };

    Node.prototype.globalAlpha = function globalAlpha (ctx, value) {
        var opactity = value;
        if (opactity && ctx.globalAlpha) {
            opactity *= ctx.globalAlpha;
        }
        ctx.globalAlpha = opactity;
    };

    Node.prototype.visible = function visible () {
        var src = this.srcElement;
        return !src || (src && src.options.visible !== false);
    };

    return Node;
}(BaseNode));

export default Node;
//# sourceMappingURL=node.js.map
