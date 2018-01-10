import Class from '../class';
import namedColors from './named-colors';
import { Bytes, RGB, HSV, HSL } from './parse-color';

var Color = (function (Class) {
    function Color(value) {
        var this$1 = this;

        Class.call(this);

        if (arguments.length === 1) {
            var formats = Color.formats;
            var resolvedColor = this.resolveColor(value);

            for (var idx = 0; idx < formats.length; idx++) {
                var formatRegex = formats[idx].re;
                var processor = formats[idx].process;
                var parts = formatRegex.exec(resolvedColor);

                if (parts) {
                    var channels = processor(parts);
                    this$1.r = channels[0];
                    this$1.g = channels[1];
                    this$1.b = channels[2];
                }
            }
        } else {
            this.r = arguments[0];
            this.g = arguments[1];
            this.b = arguments[2];
        }

        this.r = this.normalizeByte(this.r);
        this.g = this.normalizeByte(this.g);
        this.b = this.normalizeByte(this.b);
    }

    if ( Class ) Color.__proto__ = Class;
    Color.prototype = Object.create( Class && Class.prototype );
    Color.prototype.constructor = Color;

    Color.prototype.toHex = function toHex () {
        var pad = this.padDigit;
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);

        return "#" + pad(r) + pad(g) + pad(b);
    };

    Color.prototype.resolveColor = function resolveColor (value) {
        var color = value || "black";

        if (color.charAt(0) === "#") {
            color = color.substr(1, 6);
        }

        color = color.replace(/ /g, "");
        color = color.toLowerCase();
        color = Color.namedColors[color] || color;

        return color;
    };

    Color.prototype.normalizeByte = function normalizeByte (value) {
        if (value < 0 || isNaN(value)) {
            return 0;
        }

        return value > 255 ? 255 : value;
    };

    Color.prototype.padDigit = function padDigit (value) {
        return (value.length === 1) ? "0" + value : value;
    };

    Color.prototype.brightness = function brightness (value) {
        var round = Math.round;

        this.r = round(this.normalizeByte(this.r * value));
        this.g = round(this.normalizeByte(this.g * value));
        this.b = round(this.normalizeByte(this.b * value));

        return this;
    };

    Color.prototype.percBrightness = function percBrightness () {
        return Math.sqrt(0.241 * this.r * this.r + 0.691 * this.g * this.g + 0.068 * this.b * this.b);
    };

    Color.fromBytes = function fromBytes (r, g, b, a) {
        return new Bytes(r, g, b, a != null ? a : 1);
    };

    Color.fromRGB = function fromRGB (r, g, b, a) {
        return new RGB(r, g, b, a != null ? a : 1);
    };

    Color.fromHSV = function fromHSV (h, s, v, a) {
        return new HSV(h, s, v, a != null ? a : 1);
    };

    Color.fromHSL = function fromHSL (h, s, l, a) {
        return new HSL(h, s, l, a != null ? a : 1);
    };

    return Color;
}(Class));

Color.formats = [ {
    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    process: function(parts) {
        return [
            parseInt(parts[1], 10), parseInt(parts[2], 10), parseInt(parts[3], 10)
        ];
    }
}, {
    re: /^(\w{2})(\w{2})(\w{2})$/,
    process: function(parts) {
        return [
            parseInt(parts[1], 16), parseInt(parts[2], 16), parseInt(parts[3], 16)
        ];
    }
}, {
    re: /^(\w{1})(\w{1})(\w{1})$/,
    process: function(parts) {
        return [
            parseInt(parts[1] + parts[1], 16),
            parseInt(parts[2] + parts[2], 16),
            parseInt(parts[3] + parts[3], 16)
        ];
    }
} ];

Color.namedColors = namedColors;

export default Color;
//# sourceMappingURL=color.js.map
