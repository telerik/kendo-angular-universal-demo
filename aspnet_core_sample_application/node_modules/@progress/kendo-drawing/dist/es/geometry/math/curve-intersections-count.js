import toCubicPolynomial from './to-cubic-polynomial';
import solveCubicEquation from './solve-cubic-equation';
import calculateCurveAt from './calculate-curve-at';
import close from './close';

export default function curveIntersectionsCount(points, point, bbox) {
    var polynomial = toCubicPolynomial(points, "x");
    var roots = solveCubicEquation(polynomial[0], polynomial[1], polynomial[2], polynomial[3] - point.x);
    var rayIntersection, intersectsRay;
    var count = 0;
    for (var i = 0; i < roots.length; i++) {
        rayIntersection = calculateCurveAt(roots[i], "y", points);
        intersectsRay = close(rayIntersection, point.y) || rayIntersection > point.y;
        if (intersectsRay && (((roots[i] === 0 || roots[i] === 1) && bbox.bottomRight().x > point.x) || (0 < roots[i] && roots[i] < 1))) {
            count++;
        }
    }

    return count;
}
//# sourceMappingURL=curve-intersections-count.js.map
