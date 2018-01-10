import { defined } from '../../util';

export default function renderAttr(name, value) {
    return (defined(value) && value !== null) ? (" " + name + "='" + value + "' ") : "";
}
//# sourceMappingURL=render-attribute.js.map
