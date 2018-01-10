import elementStyles from './element-styles';
import defined from './defined';

function getPixels(value) {
    if (isNaN(value)) {
        return value;
    }
    return value + "px";
}

export default function elementSize(element, size) {
    if (size) {
        var width = size.width;
        var height = size.height;

        if (defined(width)) {
            element.style.width = getPixels(width);
        }

        if (defined(height)) {
            element.style.height = getPixels(height);
        }

    } else {
        var size$1 = elementStyles(element, [ 'width', 'height' ]);

        return {
            width: parseInt(size$1.width, 10),
            height: parseInt(size$1.height, 10)
        };
    }
}
//# sourceMappingURL=element-size.js.map
