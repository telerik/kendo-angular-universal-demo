export default function calculateCurveAt(t, field, points) {
    var t1 = 1 - t;
    return Math.pow(t1, 3) * points[0][field] +
        3 * Math.pow(t1, 2) * t * points[1][field] +
        3 * Math.pow(t, 2) * t1 * points[2][field] +
        Math.pow(t, 3) * points[3][field];
}
//# sourceMappingURL=calculate-curve-at.js.map
