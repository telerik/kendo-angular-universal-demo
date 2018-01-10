export default function toMatrix(transformation) {
    if (transformation && typeof transformation.matrix === "function") {
        return transformation.matrix();
    }

    return transformation;
}
//# sourceMappingURL=to-matrix.js.map
