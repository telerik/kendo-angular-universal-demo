import ObserversMixin from '../mixins/observers-mixin';
import { Class } from '../common';
import Point from './point';
import Size from './size';

var Rect = (function (Class) {
    function Rect(origin, size) {
        if ( origin === void 0 ) origin = new Point();
        if ( size === void 0 ) size = new Size();

        Class.call(this);

        this.setOrigin(origin);
        this.setSize(size);
    }

    if ( Class ) Rect.__proto__ = Class;
    Rect.prototype = Object.create( Class && Class.prototype );
    Rect.prototype.constructor = Rect;

    Rect.prototype.clone = function clone () {
        return new Rect(
            this.origin.clone(),
            this.size.clone()
        );
    };

    Rect.prototype.equals = function equals (other) {
        return other &&
               other.origin.equals(this.origin) &&
               other.size.equals(this.size);
    };

    Rect.prototype.setOrigin = function setOrigin (value) {
        this._observerField("origin", Point.create(value));
        this.geometryChange();
        return this;
    };

    Rect.prototype.getOrigin = function getOrigin () {
        return this.origin;
    };

    Rect.prototype.setSize = function setSize (value) {
        this._observerField("size", Size.create(value));
        this.geometryChange();
        return this;
    };

    Rect.prototype.getSize = function getSize () {
        return this.size;
    };

    Rect.prototype.width = function width () {
        return this.size.width;
    };

    Rect.prototype.height = function height () {
        return this.size.height;
    };

    Rect.prototype.topLeft = function topLeft () {
        return this.origin.clone();
    };

    Rect.prototype.bottomRight = function bottomRight () {
        return this.origin.clone().translate(this.width(), this.height());
    };

    Rect.prototype.topRight = function topRight () {
        return this.origin.clone().translate(this.width(), 0);
    };

    Rect.prototype.bottomLeft = function bottomLeft () {
        return this.origin.clone().translate(0, this.height());
    };

    Rect.prototype.center = function center () {
        return this.origin.clone().translate(this.width() / 2, this.height() / 2);
    };

    Rect.prototype.bbox = function bbox (matrix) {
        var tl = this.topLeft().transformCopy(matrix);
        var tr = this.topRight().transformCopy(matrix);
        var br = this.bottomRight().transformCopy(matrix);
        var bl = this.bottomLeft().transformCopy(matrix);

        return Rect.fromPoints(tl, tr, br, bl);
    };

    Rect.prototype.transformCopy = function transformCopy (m) {
        return Rect.fromPoints(
            this.topLeft().transform(m),
            this.bottomRight().transform(m)
        );
    };

    Rect.prototype.expand = function expand (x, y) {
        if ( y === void 0 ) y = x;


        this.size.width += 2 * x;
        this.size.height += 2 * y;

        this.origin.translate(-x, -y);

        return this;
    };

    Rect.prototype.expandCopy = function expandCopy (x, y) {
        return this.clone().expand(x, y);
    };

    Rect.prototype.containsPoint = function containsPoint (point) {
        var origin = this.origin;
        var bottomRight = this.bottomRight();
        return !(point.x < origin.x || point.y < origin.y || bottomRight.x < point.x || bottomRight.y < point.y);
    };

    Rect.prototype._isOnPath = function _isOnPath (point, width) {
        var rectOuter = this.expandCopy(width, width);
        var rectInner = this.expandCopy(-width, -width);

        return rectOuter.containsPoint(point) && !rectInner.containsPoint(point);
    };

    Rect.fromPoints = function fromPoints () {
        var topLeft = Point.min.apply(null, arguments);
        var bottomRight = Point.max.apply(null, arguments);
        var size = new Size(
            bottomRight.x - topLeft.x,
            bottomRight.y - topLeft.y
        );

        return new Rect(topLeft, size);
    };

    Rect.union = function union (a, b) {
        return Rect.fromPoints(
            Point.min(a.topLeft(), b.topLeft()),
            Point.max(a.bottomRight(), b.bottomRight())
        );
    };

    Rect.intersect = function intersect (a, b) {
        var rect1 = {
            left: a.topLeft().x,
            top: a.topLeft().y,
            right: a.bottomRight().x,
            bottom: a.bottomRight().y
        };

        var rect2 = {
            left: b.topLeft().x,
            top: b.topLeft().y,
            right: b.bottomRight().x,
            bottom: b.bottomRight().y
        };

        if (rect1.left <= rect2.right &&
            rect2.left <= rect1.right &&
            rect1.top <= rect2.bottom &&
            rect2.top <= rect1.bottom) {
            return Rect.fromPoints(
                new Point(Math.max(rect1.left, rect2.left), Math.max(rect1.top, rect2.top)),
                new Point(Math.min(rect1.right, rect2.right), Math.min(rect1.bottom, rect2.bottom))
            );
        }
    };

    return Rect;
}(Class));

ObserversMixin.extend(Rect.prototype);

export default Rect;
//# sourceMappingURL=rect.js.map
