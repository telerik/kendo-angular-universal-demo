import ObserversMixin from '../mixins/observers-mixin';
import { Class } from '../common';
import { defined } from '../util';

var toString = {}.toString;

var OptionsStore = (function (Class) {
    function OptionsStore(options, prefix) {
        var this$1 = this;
        if ( prefix === void 0 ) prefix = "";

        Class.call(this);

        this.prefix = prefix;

        for (var field in options) {
            var member = options[field];
            member = this$1._wrap(member, field);
            this$1[field] = member;
        }
    }

    if ( Class ) OptionsStore.__proto__ = Class;
    OptionsStore.prototype = Object.create( Class && Class.prototype );
    OptionsStore.prototype.constructor = OptionsStore;

    OptionsStore.prototype.get = function get (field) {
        var parts = field.split(".");
        var result = this;

        while (parts.length && result) {
            var part = parts.shift();
            result = result[part];
        }

        return result;
    };

    OptionsStore.prototype.set = function set (field, value) {
        var current = this.get(field);

        if (current !== value) {
            this._set(field, this._wrap(value, field));
            this.optionsChange({
                field: this.prefix + field,
                value: value
            });
        }
    };

    OptionsStore.prototype._set = function _set (field, value) {
        var this$1 = this;

        var composite = field.indexOf(".") >= 0;
        var parentObj = this;
        var fieldName = field;

        if (composite) {
            var parts = fieldName.split(".");
            var prefix = this.prefix;

            while (parts.length > 1) {
                fieldName = parts.shift();
                prefix += fieldName + ".";

                var obj = parentObj[fieldName];

                if (!obj) {
                    obj = new OptionsStore({}, prefix);
                    obj.addObserver(this$1);
                    parentObj[fieldName] = obj;
                }
                parentObj = obj;
            }
            fieldName = parts[0];
        }

        parentObj._clear(fieldName);
        parentObj[fieldName] = value;
    };

    OptionsStore.prototype._clear = function _clear (field) {
        var current = this[field];
        if (current && current.removeObserver) {
            current.removeObserver(this);
        }
    };

    OptionsStore.prototype._wrap = function _wrap (object, field) {
        var type = toString.call(object);
        var wrapped = object;

        if (wrapped !== null && defined(wrapped) && type === "[object Object]") {
            if (!(object instanceof OptionsStore) && !(object instanceof Class)) {
                wrapped = new OptionsStore(wrapped, this.prefix + field + ".");
            }

            wrapped.addObserver(this);
        }

        return wrapped;
    };

    return OptionsStore;
}(Class));

ObserversMixin.extend(OptionsStore.prototype);

export default OptionsStore;
//# sourceMappingURL=options-store.js.map
