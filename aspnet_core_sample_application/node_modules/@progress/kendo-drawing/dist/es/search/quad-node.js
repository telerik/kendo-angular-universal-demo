import QuadRoot from './quad-root';
import { Rect } from '../geometry';
import { append } from '../util';

var QuadNode = (function (QuadRoot) {
    function QuadNode(rect) {
        QuadRoot.call(this);
        this.children = [];
        this.rect = rect;
    }

    if ( QuadRoot ) QuadNode.__proto__ = QuadRoot;
    QuadNode.prototype = Object.create( QuadRoot && QuadRoot.prototype );
    QuadNode.prototype.constructor = QuadNode;

    QuadNode.prototype.inBounds = function inBounds (rect) {
        var nodeRect = this.rect;
        var nodeBottomRight = nodeRect.bottomRight();
        var bottomRight = rect.bottomRight();
        var inBounds = nodeRect.origin.x <= rect.origin.x && nodeRect.origin.y <= rect.origin.y && bottomRight.x <= nodeBottomRight.x &&
            bottomRight.y <= nodeBottomRight.y;
        return inBounds;
    };

    QuadNode.prototype.pointShapes = function pointShapes (point) {
        var children = this.children;
        var length = children.length;
        var result = QuadRoot.prototype.pointShapes.call(this, point);
        for (var idx = 0; idx < length; idx++) {
            append(result, children[idx].pointShapes(point));
        }
        return result;
    };

    QuadNode.prototype.insert = function insert (shape, bbox) {
        var children = this.children;
        var inserted = false;

        if (this.inBounds(bbox)) {
            if (this.shapes.length < 4) {
                this._add(shape, bbox);
            } else {
                if (!children.length) {
                    this._initChildren();
                }

                for (var idx = 0; idx < children.length; idx++) {
                    if (children[idx].insert(shape, bbox)) {
                        inserted = true;
                        break;
                    }
                }

                if (!inserted) {
                    this._add(shape, bbox);
                }
            }
            inserted = true;
        }

        return inserted;
    };

    QuadNode.prototype._initChildren = function _initChildren () {
        var ref = this;
        var rect = ref.rect;
        var children = ref.children;
        var center = rect.center();
        var halfWidth = rect.width() / 2;
        var halfHeight = rect.height() / 2;

        children.push(
            new QuadNode(new Rect([ rect.origin.x, rect.origin.y ], [ halfWidth, halfHeight ])),
            new QuadNode(new Rect([ center.x, rect.origin.y ], [ halfWidth, halfHeight ])),
            new QuadNode(new Rect([ rect.origin.x, center.y ], [ halfWidth, halfHeight ])),
            new QuadNode(new Rect([ center.x, center.y ], [ halfWidth, halfHeight ]))
        );
    };

    return QuadNode;
}(QuadRoot));

export default QuadNode;
//# sourceMappingURL=quad-node.js.map
