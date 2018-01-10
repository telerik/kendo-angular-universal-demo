import { defined } from '../../util';

export default function renderStyle(attrs) {
    var output = "";
    for (var i = 0; i < attrs.length; i++) {
        var value = attrs[i][1];
        if (defined(value)) {
            output += attrs[i][0] + ":" + value + ";";
        }
    }

    if (output !== "") {
        return output;
    }
}
//# sourceMappingURL=render-style.js.map
