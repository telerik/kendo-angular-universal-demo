import LRUCache from './lru-cache';
import { Class } from '../common';
import { objectKey, hashKey, normalizeText } from './util';

function zeroSize() {
    return { width: 0, height: 0, baseline: 0 };
}

var DEFAULT_OPTIONS = {
    baselineMarkerSize: 1
};

var defaultMeasureBox;

if (typeof document !== "undefined") {
    defaultMeasureBox = document.createElement("div");
    defaultMeasureBox.style.cssText = "position: absolute !important; top: -4000px !important; width: auto !important; height: auto !important;" +
              "padding: 0 !important; margin: 0 !important; border: 0 !important;" +
              "line-height: normal !important; visibility: hidden !important; white-space: pre!important;";
}

var TextMetrics = (function (Class) {
    function TextMetrics(options) {
        Class.call(this);

        this._cache = new LRUCache(1000);
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    }

    if ( Class ) TextMetrics.__proto__ = Class;
    TextMetrics.prototype = Object.create( Class && Class.prototype );
    TextMetrics.prototype.constructor = TextMetrics;

    TextMetrics.prototype.measure = function measure (text, style, options) {
        if ( options === void 0 ) options = {};

        if (!text) {
            return zeroSize();
        }

        var styleKey = objectKey(style);
        var cacheKey = hashKey(text + styleKey);
        var cachedResult = this._cache.get(cacheKey);

        if (cachedResult) {
            return cachedResult;
        }

        var size = zeroSize();
        var measureBox = options.box || defaultMeasureBox;
        var baselineMarker = this._baselineMarker().cloneNode(false);

        for (var key in style) {
            var value = style[key];
            if (typeof value !== "undefined") {
                measureBox.style[key] = value;
            }
        }

        var textStr = options.normalizeText !== false ? normalizeText(text) : String(text);

        measureBox.textContent = textStr;
        measureBox.appendChild(baselineMarker);
        document.body.appendChild(measureBox);

        if (textStr.length) {
            size.width = measureBox.offsetWidth - this.options.baselineMarkerSize;
            size.height = measureBox.offsetHeight;
            size.baseline = baselineMarker.offsetTop + this.options.baselineMarkerSize;
        }

        if (size.width > 0 && size.height > 0) {
            this._cache.put(cacheKey, size);
        }

        measureBox.parentNode.removeChild(measureBox);

        return size;
    };

    TextMetrics.prototype._baselineMarker = function _baselineMarker () {
        var marker = document.createElement("div");
        marker.style.cssText = "display: inline-block; vertical-align: baseline;width: " +
            this.options.baselineMarkerSize + "px; height: " + this.options.baselineMarkerSize + "px;overflow: hidden;";

        return marker;
    };

    return TextMetrics;
}(Class));

TextMetrics.current = new TextMetrics();

export default TextMetrics;
//# sourceMappingURL=text-metrics.js.map
