import Point from '../point';

export default function lineIntersection(p0, p1, p2, p3) {
    var s1x = p1.x - p0.x;
    var s2x = p3.x - p2.x;
    var s1y = p1.y - p0.y;
    var s2y = p3.y - p2.y;
    var nx = p0.x - p2.x;
    var ny = p0.y - p2.y;
    var d = s1x * s2y - s2x * s1y;
    var s = (s1x * ny - s1y * nx) / d;
    var t = (s2x * ny - s2y * nx) / d;

    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
        return new Point(p0.x + t * s1x, p0.y + t * s1y);
    }
}
//# sourceMappingURL=line-intersection.js.map
