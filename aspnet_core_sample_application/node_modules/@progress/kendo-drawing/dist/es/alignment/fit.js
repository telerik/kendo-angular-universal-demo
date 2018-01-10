import createTransform from '../geometry/transform';

export default function fit(element, rect) {
    var bbox = element.clippedBBox();
    if (bbox) {
        var elementSize = bbox.size;
        var rectSize = rect.size;
        if (rectSize.width < elementSize.width || rectSize.height < elementSize.height) {
            var scale = Math.min(rectSize.width / elementSize.width, rectSize.height / elementSize.height);
            var transform = element.transform() || createTransform();
            transform.scale(scale, scale);
            element.transform(transform);
        }
    }
}
//# sourceMappingURL=fit.js.map
