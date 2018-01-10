import definePointAccessors from '../accessors/define-point-accessors';
import Point from '../geometry/point';
import Gradient from './gradient';
import { defined } from '../util';

var RadialGradient = (function (Gradient) {
    function RadialGradient(options) {
        if ( options === void 0 ) options = {};

        Gradient.call(this, options);

        this.center(options.center || new Point());
        this._radius = defined(options.radius) ? options.radius : 1;
        this._fallbackFill = options.fallbackFill;
    }

    if ( Gradient ) RadialGradient.__proto__ = Gradient;
    RadialGradient.prototype = Object.create( Gradient && Gradient.prototype );
    RadialGradient.prototype.constructor = RadialGradient;

    RadialGradient.prototype.radius = function radius (value) {
        if (defined(value)) {
            this._radius = value;
            this.geometryChange();
            return this;
        }

        return this._radius;
    };

    RadialGradient.prototype.fallbackFill = function fallbackFill (value) {
        if (defined(value)) {
            this._fallbackFill = value;
            this.optionsChange();
            return this;
        }

        return this._fallbackFill;
    };

    return RadialGradient;
}(Gradient));

definePointAccessors(RadialGradient.prototype, [ "center" ]);

export default RadialGradient;
//# sourceMappingURL=radial-gradient.js.map
