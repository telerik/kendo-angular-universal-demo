export default function lineIntersectionsCount(a, b, point) {
    var intersects;
    if (a.x !== b.x) {
        var minX = Math.min(a.x, b.x);
        var maxX = Math.max(a.x, b.x);
        var minY = Math.min(a.y, b.y);
        var maxY = Math.max(a.y, b.y);
        var inRange = minX <= point.x && point.x < maxX;

        if (minY === maxY) {
            intersects = point.y <= minY && inRange;
        } else {
            intersects = inRange && (((maxY - minY) * ((a.x - b.x) * (a.y - b.y) > 0 ? point.x - minX : maxX - point.x)) / (maxX - minX) + minY - point.y) >= 0;
        }
    }

    return intersects ? 1 : 0;
}
//# sourceMappingURL=line-intersections-count.js.map
