import { Class, logToConsole } from '../common';

var SurfaceFactory = (function (Class) {
    function SurfaceFactory() {
        Class.call(this);

        this._items = [];
    }

    if ( Class ) SurfaceFactory.__proto__ = Class;
    SurfaceFactory.prototype = Object.create( Class && Class.prototype );
    SurfaceFactory.prototype.constructor = SurfaceFactory;

    SurfaceFactory.prototype.register = function register (name, type, order) {
        var items = this._items;
        var first = items[0];
        var entry = {
            name: name,
            type: type,
            order: order
        };

        if (!first || order < first.order) {
            items.unshift(entry);
        } else {
            items.push(entry);
        }
    };

    SurfaceFactory.prototype.create = function create (element, options) {
        var items = this._items;
        var match = items[0];

        if (options && options.type) {
            var preferred = options.type.toLowerCase();
            for (var i = 0; i < items.length; i++) {
                if (items[i].name === preferred) {
                    match = items[i];
                    break;
                }
            }
        }

        if (match) {
            return new match.type(element, options);
        }

        logToConsole(
            "Warning: Unable to create Kendo UI Drawing Surface. Possible causes:\n" +
            "- The browser does not support SVG and Canvas. User agent: " + (navigator.userAgent));
    };

    return SurfaceFactory;
}(Class));

SurfaceFactory.current = new SurfaceFactory();

export default SurfaceFactory;
//# sourceMappingURL=surface-factory.js.map
