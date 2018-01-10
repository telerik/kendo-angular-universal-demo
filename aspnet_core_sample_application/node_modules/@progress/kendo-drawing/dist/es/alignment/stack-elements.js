import Point from '../geometry/point';
import translateToPoint from './translate-to-point';

export default function stackElements(elements, stackAxis, otherAxis, sizeField) {
    if (elements.length > 1) {
        var origin = new Point();
        var previousBBox = elements[0].bbox;

        for (var idx = 1; idx < elements.length; idx++) {
            var element = elements[idx].element;
            var bbox = elements[idx].bbox;
            origin[stackAxis] = previousBBox.origin[stackAxis] + previousBBox.size[sizeField];
            origin[otherAxis] = bbox.origin[otherAxis];
            translateToPoint(origin, bbox, element);
            bbox.origin[stackAxis] = origin[stackAxis];
            previousBBox = bbox;
        }
    }
}
//# sourceMappingURL=stack-elements.js.map
