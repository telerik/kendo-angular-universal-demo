import ObserversMixin from '../mixins/observers-mixin';
import StopsArray from './stops-array';
import GradientStop from './gradient-stop';
import { Class } from '../common';
import { defined, definitionId } from '../util';

var Gradient = (function (Class) {
    function Gradient(options) {
        if ( options === void 0 ) options = {};

        Class.call(this);

        this.stops = new StopsArray(this._createStops(options.stops));
        this.stops.addObserver(this);
        this._userSpace = options.userSpace;
        this.id = definitionId();
    }

    if ( Class ) Gradient.__proto__ = Class;
    Gradient.prototype = Object.create( Class && Class.prototype );
    Gradient.prototype.constructor = Gradient;

    Gradient.prototype.userSpace = function userSpace (value) {
        if (defined(value)) {
            this._userSpace = value;
            this.optionsChange();
            return this;
        }

        return this._userSpace;
    };

    Gradient.prototype._createStops = function _createStops (stops) {
        if ( stops === void 0 ) stops = [];

        var result = [];
        for (var idx = 0; idx < stops.length; idx++) {
            result.push(GradientStop.create(stops[idx]));
        }

        return result;
    };

    Gradient.prototype.addStop = function addStop (offset, color, opacity) {
        this.stops.push(new GradientStop(offset, color, opacity));
    };

    Gradient.prototype.removeStop = function removeStop (stop) {
        var index = this.stops.indexOf(stop);
        if (index >= 0) {
            this.stops.splice(index, 1);
        }
    };

    return Gradient;
}(Class));

Gradient.prototype.nodeType = "Gradient";

ObserversMixin.extend(Gradient.prototype);

Object.assign(Gradient.prototype, {
    optionsChange: function(e) {
        this.trigger("optionsChange", {
            field: "gradient" + (e ? "." + e.field : ""),
            value: this
        });
    },

    geometryChange: function() {
        this.optionsChange();
    }
});

export default Gradient;
//# sourceMappingURL=gradient.js.map
