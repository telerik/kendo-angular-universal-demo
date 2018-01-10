import Rect from '../../geometry/rect';

export default function elementsClippedBoundingBox(elements, transformation) {
    var boundingBox;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.visible()) {
            var elementBoundingBox = element.clippedBBox(transformation);
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
//# sourceMappingURL=elements-clippend-bounding-box.js.map
