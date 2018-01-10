import GroupNode from './group-node';
import Traversable from '../mixins/traversable';
import { animationFrame, throttle } from '../common';

var FRAME_DELAY = 1000 / 60;

var RootNode = (function (GroupNode) {
    function RootNode(canvas) {
        GroupNode.call(this);

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        var invalidateHandler = this._invalidate.bind(this);
        this.invalidate = throttle(function () {
            animationFrame(invalidateHandler);
        }, FRAME_DELAY);
    }

    if ( GroupNode ) RootNode.__proto__ = GroupNode;
    RootNode.prototype = Object.create( GroupNode && GroupNode.prototype );
    RootNode.prototype.constructor = RootNode;

    RootNode.prototype.destroy = function destroy () {
        GroupNode.prototype.destroy.call(this);
        this.canvas = null;
        this.ctx = null;
    };

    RootNode.prototype.load = function load (elements, pos, cors) {
        this.loadElements(elements, pos, cors);
        this._invalidate();
    };

    RootNode.prototype._invalidate = function _invalidate () {
        if (!this.ctx) {
            return;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderTo(this.ctx);
    };

    return RootNode;
}(GroupNode));

Traversable.extend(RootNode.prototype, "childNodes");

export default RootNode;
//# sourceMappingURL=root-node.js.map
