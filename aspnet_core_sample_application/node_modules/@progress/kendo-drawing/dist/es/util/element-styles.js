export default function elementStyles(element, styles) {
    var result = {};
    var style = window.getComputedStyle(element);
    var stylesArray = Array.isArray(styles) ? styles : [ styles ];

    for (var idx = 0; idx < stylesArray.length; idx++) {
        var field = stylesArray[idx];
        result[field] = style[field];
    }

    return result;
}
//# sourceMappingURL=element-styles.js.map
