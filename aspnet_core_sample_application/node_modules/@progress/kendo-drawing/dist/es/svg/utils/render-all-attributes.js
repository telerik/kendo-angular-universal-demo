import renderAttr from './render-attribute';

export default function renderAllAttr(attrs) {
    var output = "";
    for (var i = 0; i < attrs.length; i++) {
        output += renderAttr(attrs[i][0], attrs[i][1]);
    }

    return output;
}
//# sourceMappingURL=render-all-attributes.js.map
