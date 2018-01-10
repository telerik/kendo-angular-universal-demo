import translateToPoint from './translate-to-point';
import alignStart from './align-start';

export default function alignElements(elements, rect, alignment, axis, sizeField) {
    for (var idx = 0; idx < elements.length; idx++) {
        var bbox = elements[idx].clippedBBox();
        if (bbox) {
            var point = bbox.origin.clone();
            point[axis] = alignStart(bbox.size[sizeField], rect, alignment || "start", axis, sizeField);
            translateToPoint(point, bbox, elements[idx]);
        }
    }
}
//# sourceMappingURL=align-elements.js.map
