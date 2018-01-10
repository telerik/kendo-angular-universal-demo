import createTransform from '../geometry/transform';

export default function translateToPoint(point, bbox, element) {
    var transofrm = element.transform() || createTransform();
    var matrix = transofrm.matrix();
    matrix.e += point.x - bbox.origin.x;
    matrix.f += point.y - bbox.origin.y;

    transofrm.matrix(matrix);
    element.transform(transofrm);
}
//# sourceMappingURL=translate-to-point.js.map
