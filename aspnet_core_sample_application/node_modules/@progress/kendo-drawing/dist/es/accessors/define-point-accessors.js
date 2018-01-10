import { defined } from '../util';
import Point from '../geometry/point';

function pointAccessor(name) {
    var fieldName = "_" + name;
    return function(value) {
        if (defined(value)) {
            this._observerField(fieldName, Point.create(value));
            this.geometryChange();
            return this;
        }

        return this[fieldName];
    };
}

export default function definePointAccessors(fn, names) {
    for (var i = 0; i < names.length; i++) {
        fn[names[i]] = pointAccessor(names[i]);
    }
}
//# sourceMappingURL=define-point-accessors.js.map
