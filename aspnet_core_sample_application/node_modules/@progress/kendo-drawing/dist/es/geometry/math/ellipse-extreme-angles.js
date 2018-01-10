export default function ellipseExtremeAngles(center, rx, ry, matrix) {
    var extremeX = 0;
    var extremeY = 0;

    if (matrix) {
        extremeX = Math.atan2(matrix.c * ry, matrix.a * rx);
        if (matrix.b !== 0) {
            extremeY = Math.atan2(matrix.d * ry, matrix.b * rx);
        }
    }

    return {
        x: extremeX,
        y: extremeY
    };
}
//# sourceMappingURL=ellipse-extreme-angles.js.map
