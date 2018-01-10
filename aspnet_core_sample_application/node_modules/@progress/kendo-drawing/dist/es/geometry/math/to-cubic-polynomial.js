export default function toCubicPolynomial(points, field) {
    return [ -points[0][field] + 3 * points[1][field] - 3 * points[2][field] + points[3][field],
        3 * (points[0][field] - 2 * points[1][field] + points[2][field]),
        3 * (-points[0][field] + points[1][field]),
        points[0][field]
    ];
}
//# sourceMappingURL=to-cubic-polynomial.js.map
