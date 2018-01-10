import definePointAccessors from '../accessors/define-point-accessors';
import Point from '../geometry/point';
import Gradient from './gradient';

var LinearGradient = (function (Gradient) {
    function LinearGradient(options) {
        if ( options === void 0 ) options = {};

        Gradient.call(this, options);

        this.start(options.start || new Point());

        this.end(options.end || new Point(1, 0));
    }

    if ( Gradient ) LinearGradient.__proto__ = Gradient;
    LinearGradient.prototype = Object.create( Gradient && Gradient.prototype );
    LinearGradient.prototype.constructor = LinearGradient;

    return LinearGradient;
}(Gradient));

definePointAccessors(LinearGradient.prototype, [ "start", "end" ]);

export default LinearGradient;
//# sourceMappingURL=linear-gradient.js.map
