import { defined } from '../util';

var SurfaceCursor = function SurfaceCursor(surface) {
    surface.bind("mouseenter", this._mouseenter.bind(this));
    surface.bind("mouseleave", this._mouseleave.bind(this));

    this.element = surface.element;
};

SurfaceCursor.prototype.clear = function clear () {
    this._resetCursor();
};

SurfaceCursor.prototype.destroy = function destroy () {
    this._resetCursor();
    delete this.element;
};

SurfaceCursor.prototype._mouseenter = function _mouseenter (e) {
    var cursor = this._shapeCursor(e);

    if (!cursor) {
        this._resetCursor();
    } else {
        if (!this._current) {
            this._defaultCursor = this._getCursor();
        }

        this._setCursor(cursor);
    }
};

SurfaceCursor.prototype._mouseleave = function _mouseleave () {
    this._resetCursor();
};

SurfaceCursor.prototype._shapeCursor = function _shapeCursor (e) {
    var shape = e.element;

    while (shape && !defined(shape.options.cursor)) {
        shape = shape.parent;
    }

    if (shape) {
        return shape.options.cursor;
    }
};

SurfaceCursor.prototype._getCursor = function _getCursor () {
    if (this.element) {
        return this.element.style.cursor;
    }
};

SurfaceCursor.prototype._setCursor = function _setCursor (cursor) {
    if (this.element) {
        this.element.style.cursor = cursor;
        this._current = cursor;
    }
};

SurfaceCursor.prototype._resetCursor = function _resetCursor () {
    if (this._current) {
        this._setCursor(this._defaultCursor || "");
        delete this._current;
    }
};

export default SurfaceCursor;


//# sourceMappingURL=surface-cursor.js.map
