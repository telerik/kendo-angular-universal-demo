
var ObserversMixin = {
    extend: function(proto) {
        var this$1 = this;

        for (var method in this) {
            if (method !== "extend") {
                proto[method] = this$1[method];
            }
        }
    },

    observers: function() {
        this._observers = this._observers || [];
        return this._observers;
    },

    addObserver: function(element) {
        if (!this._observers) {
            this._observers = [ element ];
        } else {
            this._observers.push(element);
        }
        return this;
    },

    removeObserver: function(element) {
        var observers = this.observers();
        var index = observers.indexOf(element);
        if (index !== -1) {
            observers.splice(index, 1);
        }
        return this;
    },

    trigger: function(methodName, event) {
        var observers = this._observers;

        if (observers && !this._suspended) {
            for (var idx = 0; idx < observers.length; idx++) {
                var observer = observers[idx];
                if (observer[methodName]) {
                    observer[methodName](event);
                }
            }
        }
        return this;
    },

    optionsChange: function(e) {
        if ( e === void 0 ) e = {};

        e.element = this;
        this.trigger("optionsChange", e);
    },

    geometryChange: function() {
        this.trigger("geometryChange", {
            element: this
        });
    },

    suspend: function() {
        this._suspended = (this._suspended || 0) + 1;
        return this;
    },

    resume: function() {
        this._suspended = Math.max((this._suspended || 0) - 1, 0);
        return this;
    },

    _observerField: function(field, value) {
        if (this[field]) {
            this[field].removeObserver(this);
        }
        this[field] = value;
        value.addObserver(this);
    }
};

export default ObserversMixin;
//# sourceMappingURL=observers-mixin.js.map
