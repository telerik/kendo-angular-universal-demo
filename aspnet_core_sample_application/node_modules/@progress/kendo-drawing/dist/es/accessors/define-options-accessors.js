import { defined } from '../util';

function optionsAccessor(name) {
    return function(value) {
        if (defined(value)) {
            this.options.set(name, value);
            return this;
        }

        return this.options.get(name);
    };
}

export default function defineOptionsAccessors(fn, names) {
    for (var i = 0; i < names.length; i++) {
        fn[names[i]] = optionsAccessor(names[i]);
    }
}
//# sourceMappingURL=define-options-accessors.js.map
