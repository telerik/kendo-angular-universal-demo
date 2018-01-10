import Matrix from '../geometry/matrix';
import toMatrix from '../geometry/to-matrix';

var IDENTITY_MATRIX_HASH = Matrix.IDENTITY.toString();

var Measurable = {
    extend: function(proto) {
        proto.bbox = this.bbox;
        proto.geometryChange = this.geometryChange;
    },

    bbox: function(transformation) {
        var combinedMatrix = toMatrix(this.currentTransform(transformation));
        var matrixHash = combinedMatrix ? combinedMatrix.toString() : IDENTITY_MATRIX_HASH;
        var bbox;

        if (this._bboxCache && this._matrixHash === matrixHash) {
            bbox = this._bboxCache.clone();
        } else {
            bbox = this._bbox(combinedMatrix);
            this._bboxCache = bbox ? bbox.clone() : null;
            this._matrixHash = matrixHash;
        }

        var strokeWidth = this.options.get("stroke.width");
        if (strokeWidth && bbox) {
            bbox.expand(strokeWidth / 2);
        }

        return bbox;
    },

    geometryChange: function() {
        delete this._bboxCache;
        this.trigger("geometryChange", {
            element: this
        });
    }
};

export default Measurable;
//# sourceMappingURL=measurable.js.map
