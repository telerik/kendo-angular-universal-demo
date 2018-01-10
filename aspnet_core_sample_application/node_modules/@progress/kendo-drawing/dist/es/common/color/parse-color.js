import Class from '../class';
import support from '../support';
import namedColors from './named-colors';

var browser = support.browser;

var matchNamedColor = function (color) {
    var colorNames = Object.keys(namedColors);
    colorNames.push("transparent");

    var regexp = new RegExp("^(" + colorNames.join("|") + ")(\\W|$)", "i");
    matchNamedColor = function (color) { return regexp.exec(color); };

    return regexp.exec(color);
};

var BaseColor = (function (Class) {
    function BaseColor() { Class.call(this); }

    if ( Class ) BaseColor.__proto__ = Class;
    BaseColor.prototype = Object.create( Class && Class.prototype );
    BaseColor.prototype.constructor = BaseColor;
    BaseColor.prototype.toHSV = function toHSV () { return this; };

    BaseColor.prototype.toRGB = function toRGB () { return this; };

    BaseColor.prototype.toHex = function toHex () { return this.toBytes().toHex(); };

    BaseColor.prototype.toBytes = function toBytes () { return this; };

    BaseColor.prototype.toCss = function toCss () { return "#" + this.toHex(); };

    BaseColor.prototype.toCssRgba = function toCssRgba () {
        var rgb = this.toBytes();
        return ("rgba(" + (rgb.r) + ", " + (rgb.g) + ", " + (rgb.b) + ", " + (parseFloat((Number(this.a)).toFixed(3))) + ")");
    };

    BaseColor.prototype.toDisplay = function toDisplay () {
        if (browser.msie && browser.version < 9) {
            return this.toCss(); // no RGBA support; does it support any opacity in colors?
        }
        return this.toCssRgba();
    };

    BaseColor.prototype.equals = function equals (c) {
        return c === this || c !== null && this.toCssRgba() === parseColor(c).toCssRgba();
    };

    BaseColor.prototype.diff = function diff (other) {
        if (other === null) {
            return NaN;
        }

        var c1 = this.toBytes();
        var c2 = other.toBytes();

        return Math.sqrt(Math.pow((c1.r - c2.r) * 0.30, 2) +
                         Math.pow((c1.g - c2.g) * 0.59, 2) +
                         Math.pow((c1.b - c2.b) * 0.11, 2));
    };

    BaseColor.prototype.clone = function clone () {
        var c = this.toBytes();
        if (c === this) {
            c = new Bytes(c.r, c.g, c.b, c.a);
        }

        return c;
    };

    return BaseColor;
}(Class));

var RGB = (function (BaseColor) {
    function RGB(r, g, b, a) {
        BaseColor.call(this);

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    if ( BaseColor ) RGB.__proto__ = BaseColor;
    RGB.prototype = Object.create( BaseColor && BaseColor.prototype );
    RGB.prototype.constructor = RGB;

    RGB.prototype.toHSV = function toHSV () {
        var ref = this;
        var r = ref.r;
        var g = ref.g;
        var b = ref.b;
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var v = max;
        var h, s;

        if (delta === 0) {
            return new HSV(0, 0, v, this.a);
        }

        if (max !== 0) {
            s = delta / max;
            if (r === max) {
                h = (g - b) / delta;
            } else if (g === max) {
                h = 2 + (b - r) / delta;
            } else {
                h = 4 + (r - g) / delta;
            }

            h *= 60;
            if (h < 0) {
                h += 360;
            }
        } else {
            s = 0;
            h = -1;
        }

        return new HSV(h, s, v, this.a);
    };

    RGB.prototype.toHSL = function toHSL () {
        var ref = this;
        var r = ref.r;
        var g = ref.g;
        var b = ref.b;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
                default: break;
            }

            h *= 60;
            s *= 100;
            l *= 100;
        }

        return new HSL(h, s, l, this.a);
    };

    RGB.prototype.toBytes = function toBytes () {
        return new Bytes(this.r * 255, this.g * 255, this.b * 255, this.a);
    };

    return RGB;
}(BaseColor));

var Bytes = (function (RGB) {
    function Bytes(r, g, b, a) {
        RGB.call(this, Math.round(r), Math.round(g), Math.round(b), a);
    }

    if ( RGB ) Bytes.__proto__ = RGB;
    Bytes.prototype = Object.create( RGB && RGB.prototype );
    Bytes.prototype.constructor = Bytes;

    Bytes.prototype.toRGB = function toRGB () {
        return new RGB(this.r / 255, this.g / 255, this.b / 255, this.a);
    };

    Bytes.prototype.toHSV = function toHSV () {
        return this.toRGB().toHSV();
    };

    Bytes.prototype.toHSL = function toHSL () {
        return this.toRGB().toHSL();
    };

    Bytes.prototype.toHex = function toHex () {
        return hex(this.r, 2) + hex(this.g, 2) + hex(this.b, 2);
    };

    Bytes.prototype.toBytes = function toBytes () {
        return this;
    };

    return Bytes;
}(RGB));

function hex(n, width, pad) {
    if ( pad === void 0 ) pad = "0";

    var result = n.toString(16);
    while (width > result.length) {
        result = pad + result;
    }

    return result;
}

var HSV = (function (BaseColor) {
    function HSV(h, s, v, a) {
        BaseColor.call(this);

        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }

    if ( BaseColor ) HSV.__proto__ = BaseColor;
    HSV.prototype = Object.create( BaseColor && BaseColor.prototype );
    HSV.prototype.constructor = HSV;

    HSV.prototype.toRGB = function toRGB () {
        var ref = this;
        var h = ref.h;
        var s = ref.s;
        var v = ref.v;
        var r, g, b;

        if (s === 0) {
            r = g = b = v;
        } else {
            h /= 60;

            var i = Math.floor(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
                case 0: r = v; g = t; b = p; break;
                case 1: r = q; g = v; b = p; break;
                case 2: r = p; g = v; b = t; break;
                case 3: r = p; g = q; b = v; break;
                case 4: r = t; g = p; b = v; break;
                default: r = v; g = p; b = q; break;
            }
        }

        return new RGB(r, g, b, this.a);
    };

    HSV.prototype.toHSL = function toHSL () {
        return this.toRGB().toHSL();
    };

    HSV.prototype.toBytes = function toBytes () {
        return this.toRGB().toBytes();
    };

    return HSV;
}(BaseColor));

var HSL = (function (BaseColor) {
    function HSL(h, s, l, a) {
        BaseColor.call(this);

        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }

    if ( BaseColor ) HSL.__proto__ = BaseColor;
    HSL.prototype = Object.create( BaseColor && BaseColor.prototype );
    HSL.prototype.constructor = HSL;

    HSL.prototype.toRGB = function toRGB () {
        var ref = this;
        var h = ref.h;
        var s = ref.s;
        var l = ref.l;
        var r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            h /= 360;
            s /= 100;
            l /= 100;

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return new RGB(r, g, b, this.a);
    };

    HSL.prototype.toHSV = function toHSV () {
        return this.toRGB().toHSV();
    };

    HSL.prototype.toBytes = function toBytes () {
        return this.toRGB().toBytes();
    };

    return HSL;
}(BaseColor));

function hue2rgb(p, q, s) {
    var t = s;

    if (t < 0) {
        t += 1;
    }

    if (t > 1) {
        t -= 1;
    }

    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
        return q;
    }

    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
}

export { RGB, Bytes, HSV, HSL };

export default function parseColor(value, safe) {
    var m, ret;

    if (value == null || value === "none") {
        return null;
    }

    if (value instanceof BaseColor) {
        return value;
    }

    var color = value.toLowerCase();
    if ((m = matchNamedColor(color))) {
        if (m[1] === "transparent") {
            color = new RGB(1, 1, 1, 0);
        } else {
            color = parseColor(namedColors[m[1]], safe);
        }
        color.match = [ m[1] ];
        return color;
    }
    if ((m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(color))) {
        ret = new Bytes(parseInt(m[1], 16),
                        parseInt(m[2], 16),
                        parseInt(m[3], 16), 1);
    } else if ((m = /^#?([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(color))) {
        ret = new Bytes(parseInt(m[1] + m[1], 16),
                        parseInt(m[2] + m[2], 16),
                        parseInt(m[3] + m[3], 16), 1);
    } else if ((m = /^rgb\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/.exec(color))) {
        ret = new Bytes(parseInt(m[1], 10),
                        parseInt(m[2], 10),
                        parseInt(m[3], 10), 1);
    } else if ((m = /^rgba\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9.]+)\s*\)/.exec(color))) {
        ret = new Bytes(parseInt(m[1], 10),
                        parseInt(m[2], 10),
                        parseInt(m[3], 10), parseFloat(m[4]));
    } else if ((m = /^rgb\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*\)/.exec(color))) {
        ret = new RGB(parseFloat(m[1]) / 100,
                      parseFloat(m[2]) / 100,
                      parseFloat(m[3]) / 100, 1);
    } else if ((m = /^rgba\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9.]+)\s*\)/.exec(color))) {
        ret = new RGB(parseFloat(m[1]) / 100,
                      parseFloat(m[2]) / 100,
                      parseFloat(m[3]) / 100, parseFloat(m[4]));
    }

    if (ret) {
        ret.match = m;
    } else if (!safe) {
        throw new Error("Cannot parse color: " + color);
    }

    return ret;
}

//# sourceMappingURL=parse-color.js.map
