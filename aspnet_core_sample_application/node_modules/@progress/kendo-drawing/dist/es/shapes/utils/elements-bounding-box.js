import Rect from '../../geometry/rect';

export default function elementsBoundingBox(elements, applyTransform, transformation) {
    var boundingBox;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.visible()) {
            var elementBoundingBox = applyTransform ? element.bbox(transformation) : element.rawBBox();
            if (elementBoundingBox) {
                if (boundingBox) {
                    boundingBox = Rect.union(boundingBox, elementBoundingBox);
                } else {
                    boundingBox = elementBoundingBox;
                }
            }
        }
    }

    return boundingBox;
}


//# sourceMappingURL=elements-bounding-box.js.map
