import Transformation from './transformation';

export default function transform(matrix) {
    if (matrix === null) {
        return null;
    }

    if (matrix instanceof Transformation) {
        return matrix;
    }

    return new Transformation(matrix);
}
//# sourceMappingURL=transform.js.map
