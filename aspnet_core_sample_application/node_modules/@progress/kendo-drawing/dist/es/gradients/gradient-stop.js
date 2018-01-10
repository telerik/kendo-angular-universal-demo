import defineOptionsAccessors from '../accessors/define-options-accessors';
import OptionsStore from '../core/options-store';
import ObserversMixin from '../mixins/observers-mixin';
import { Class } from '../common';
import { defined } from '../util';

var GradientStop = (function (Class) {
    function GradientStop(offset, color, opacity) {
        Class.call(this);

        this.options = new OptionsStore({
            offset: offset,
            color: color,
            opacity: defined(opacity) ? opacity : 1
        });
        this.options.addObserver(this);
    }

    if ( Class ) GradientStop.__proto__ = Class;
    GradientStop.prototype = Object.create( Class && Class.prototype );
    GradientStop.prototype.constructor = GradientStop;

    GradientStop.create = function create (arg) {
        if (defined(arg)) {
            var stop;
            if (arg instanceof GradientStop) {
                stop = arg;
            } else if (arg.length > 1) {
                stop = new GradientStop(arg[0], arg[1], arg[2]);
            } else {
                stop = new GradientStop(arg.offset, arg.color, arg.opacity);
            }

            return stop;
        }
    };

    return GradientStop;
}(Class));

defineOptionsAccessors(GradientStop.prototype, [ "offset", "color", "opacity" ]);
ObserversMixin.extend(GradientStop.prototype);

export default GradientStop;

//# sourceMappingURL=gradient-stop.js.map
