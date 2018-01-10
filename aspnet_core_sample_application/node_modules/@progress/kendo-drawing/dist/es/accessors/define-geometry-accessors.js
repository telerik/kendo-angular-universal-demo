import { defined } from '../util';

function geometryAccessor(name) {
    var fieldName = "_" + name;
    return function(value) {
        if (defined(value)) {
            this._observerField(fieldName, value);
            this.geometryChange();
            return this;
        }

        return this[fieldName];
    };
}

export default function defineGeometryAccessors(fn, names) {
    for (var i = 0; i < names.length; i++) {
        fn[names[i]] = geometryAccessor(names[i]);
    }
}
//# sourceMappingURL=define-geometry-accessors.js.map
