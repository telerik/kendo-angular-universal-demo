import Class from './class';

var Observable = (function (Class) {
    function Observable() {
        Class.call(this);

        this._events = {};
    }

    if ( Class ) Observable.__proto__ = Class;
    Observable.prototype = Object.create( Class && Class.prototype );
    Observable.prototype.constructor = Observable;

    Observable.prototype.bind = function bind (eventName, handlers, one) {
        var arguments$1 = arguments;
        var this$1 = this;

        var eventNames = getArray(eventName);
        var handlersIsFunction = isFunction(handlers);
        var length = eventNames.length;

        if (handlers === undefined) {
            for (var field in eventName) {
                this$1.bind(field, eventName[field]);
            }
            return this;
        }

        var loop = function ( idx ) {
            var eventName$1 = eventNames[idx];

            var handler = handlersIsFunction ? handlers : handlers[eventName$1];

            if (handler) {
                if (one) {
                    var original = handler;
                    handler = function () { // eslint-disable-line no-loop-func
                        this$1.unbind(eventName$1, handler);
                        original.apply(this$1, arguments$1);
                    };
                    handler.original = original;
                }
                var events = this$1._events[eventName$1] = this$1._events[eventName$1] || [];
                events.push(handler);
            }
        };

        for (var idx = 0; idx < length; idx++) loop( idx );

        return this;
    };

    Observable.prototype.one = function one (eventNames, handlers) {
        return this.bind(eventNames, handlers, true);
    };

    Observable.prototype.first = function first (eventName, handlers) {
        var this$1 = this;

        var eventNames = getArray(eventName);
        var handlersIsFunction = isFunction(handlers);

        for (var idx = 0, length = eventNames.length; idx < length; idx++) {
            var eventName$1 = eventNames[idx];

            var handler = handlersIsFunction ? handlers : handlers[eventName$1];

            if (handler) {
                var events = this$1._events[eventName$1] = this$1._events[eventName$1] || [];
                events.unshift(handler);
            }
        }

        return this;
    };

    Observable.prototype.trigger = function trigger (eventName, e) {
        var this$1 = this;
        if ( e === void 0 ) e = {};

        var events = this._events[eventName];

        if (events) {
            var length = events.length;

            e.sender = this;
            e._defaultPrevented = false;
            e.preventDefault = preventDefault;
            e.isDefaultPrevented = isDefaultPrevented;

            events = events.slice();

            for (var idx = 0; idx < length; idx++) {
                events[idx].call(this$1, e);
            }

            return e._defaultPrevented === true;
        }

        return false;
    };

    Observable.prototype.unbind = function unbind (eventName, handler) {
        var events = this._events[eventName];

        if (eventName === undefined) {
            this._events = {};
        } else if (events) {
            if (handler) {
                for (var idx = events.length - 1; idx >= 0; idx--) {
                    if (events[idx] === handler || events[idx].original === handler) {
                        events.splice(idx, 1);
                    }
                }
            } else {
                this._events[eventName] = [];
            }
        }

        return this;
    };

    return Observable;
}(Class));

function isFunction(value) {
    return typeof value === "function";
}

function getArray(value) {
    return typeof value === "string" ? [ value ] : value;
}

function preventDefault() {
    this._defaultPrevented = true;
}

function isDefaultPrevented() {
    return this._defaultPrevented === true;
}

export default Observable;
//# sourceMappingURL=observable.js.map
