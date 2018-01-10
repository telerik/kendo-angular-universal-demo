import defineAccessors from '../accessors/define-accessors';
import ObserversMixin from '../mixins/observers-mixin';
import { Class } from '../common';
import { defined, round } from '../util';

var Size = (function (Class) {
    function Size(width, height) {
        Class.call(this);

        this.width = width || 0;
        this.height = height || 0;
    }

    if ( Class ) Size.__proto__ = Class;
    Size.prototype = Object.create( Class && Class.prototype );
    Size.prototype.constructor = Size;

    var staticAccessors = { ZERO: {} };

    Size.prototype.equals = function equals (other) {
        return other && other.width === this.width && other.height === this.height;
    };

    Size.prototype.clone = function clone () {
        return new Size(this.width, this.height);
    };

    Size.prototype.toArray = function toArray (digits) {
        var doRound = defined(digits);
        var width = doRound ? round(this.width, digits) : this.width;
        var height = doRound ? round(this.height, digits) : this.height;

        return [ width, height ];
    };

    Size.create = function create (arg0, arg1) {
        if (defined(arg0)) {
            if (arg0 instanceof Size) {
                return arg0;
            } else if (arguments.length === 1 && arg0.length === 2) {
                return new Size(arg0[0], arg0[1]);
            }

            return new Size(arg0, arg1);
        }
    };

    staticAccessors.ZERO.get = function () {
        return new Size(0, 0);
    };

    Object.defineProperties( Size, staticAccessors );

    return Size;
}(Class));

defineAccessors(Size.prototype, [ "width", "height" ]);
ObserversMixin.extend(Size.prototype);

export default Size;
//# sourceMappingURL=size.js.map
