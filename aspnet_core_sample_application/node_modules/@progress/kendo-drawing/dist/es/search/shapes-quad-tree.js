import QuadRoot from './quad-root';
import QuadNode from './quad-node';
import { Rect } from '../geometry';
import { Class } from '../common';
import { append } from '../util';

var ROOT_SIZE = 3000;
var LEVEL_STEP = 10000;
var MAX_LEVEL = 75;

var ShapesQuadTree = (function (Class) {
    function ShapesQuadTree() {
        Class.call(this);

        this.initRoots();
    }

    if ( Class ) ShapesQuadTree.__proto__ = Class;
    ShapesQuadTree.prototype = Object.create( Class && Class.prototype );
    ShapesQuadTree.prototype.constructor = ShapesQuadTree;

    ShapesQuadTree.prototype.initRoots = function initRoots () {
        this.rootMap = {};
        this.root = new QuadRoot();
        this.rootElements = [];
    };

    ShapesQuadTree.prototype.clear = function clear () {
        var this$1 = this;

        var rootElements = this.rootElements;
        for (var idx = 0; idx < rootElements.length; idx++) {
            this$1.remove(rootElements[idx]);
        }
        this.initRoots();
    };

    ShapesQuadTree.prototype.pointShape = function pointShape (point) {
        var sectorRoot = ( this.rootMap[ Math.floor( point.x / ROOT_SIZE ) ] || {} )[ Math.floor( point.y / ROOT_SIZE ) ];
        var result = this.root.pointShapes(point);

        if (sectorRoot) {
            result = result.concat(sectorRoot.pointShapes(point));
        }

        this.assignZindex(result);

        result.sort(zIndexComparer);
        for (var idx = 0; idx < result.length; idx++) {
            if (result[idx].containsPoint(point)) {
                return result[idx];
            }
        }
    };

    ShapesQuadTree.prototype.assignZindex = function assignZindex (elements) {
        var this$1 = this;

        for (var idx = 0; idx < elements.length; idx++) {
            var element = elements[idx];
            var zIndex = 0;
            var levelWeight = Math.pow(LEVEL_STEP, MAX_LEVEL);
            var parents = [];

            while (element) {
                parents.push(element);
                element = element.parent;
            }

            while (parents.length) {
                element = parents.pop();
                zIndex += ((element.parent ? element.parent.children : this$1.rootElements).indexOf(element) + 1) * levelWeight;
                levelWeight /= LEVEL_STEP;
            }

            elements[idx]._zIndex = zIndex;
        }
    };

    ShapesQuadTree.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "transform" || e.field === "stroke.width") {
            this.bboxChange(e.element);
        }
    };

    ShapesQuadTree.prototype.geometryChange = function geometryChange (e) {
        this.bboxChange(e.element);
    };

    ShapesQuadTree.prototype.bboxChange = function bboxChange (element) {
        var this$1 = this;

        if (element.nodeType === "Group") {
            for (var idx = 0; idx < element.children.length; idx++) {
                this$1.bboxChange(element.children[idx]);
            }
        } else {
            if (element._quadNode) {
                element._quadNode.remove(element);
            }
            this._insertShape(element);
        }
    };

    ShapesQuadTree.prototype.add = function add (elements) {
        var elementsArray = Array.isArray(elements) ? elements.slice(0) : [ elements ];

        append(this.rootElements, elementsArray);
        this._insert(elementsArray);
    };

    ShapesQuadTree.prototype.childrenChange = function childrenChange (e) {
        var this$1 = this;

        if (e.action === "remove") {
            for (var idx = 0; idx < e.items.length; idx++) {
                this$1.remove(e.items[idx]);
            }
        } else {
            this._insert(Array.prototype.slice.call(e.items, 0));
        }
    };

    ShapesQuadTree.prototype._insert = function _insert (elements) {
        var this$1 = this;

        var element;

        while (elements.length > 0) {
            element = elements.pop();
            element.addObserver(this$1);
            if (element.nodeType === "Group") {
                append(elements, element.children);
            } else {
                this$1._insertShape(element);
            }
        }
    };

    ShapesQuadTree.prototype._insertShape = function _insertShape (shape) {
        var bbox = shape.bbox();
        if (bbox) {
            var sectors = this.getSectors(bbox);
            var x = sectors[0][0];
            var y = sectors[1][0];

            if (this.inRoot(sectors)) {
                this.root.insert(shape, bbox);
            } else {
                var rootMap = this.rootMap;
                if (!rootMap[x]) {
                    rootMap[x] = {};
                }

                if (!rootMap[x][y]) {
                    rootMap[x][y] = new QuadNode(
                        new Rect([ x * ROOT_SIZE, y * ROOT_SIZE ], [ ROOT_SIZE, ROOT_SIZE ])
                    );
                }

                rootMap[x][y].insert(shape, bbox);
            }
        }
    };

    ShapesQuadTree.prototype.remove = function remove (element) {
        var this$1 = this;

        element.removeObserver(this);

        if (element.nodeType === "Group") {
            var children = element.children;
            for (var idx = 0; idx < children.length; idx++) {
                this$1.remove(children[idx]);
            }
        } else if (element._quadNode) {
            element._quadNode.remove(element);
            delete element._quadNode;
        }
    };

    ShapesQuadTree.prototype.inRoot = function inRoot (sectors) {
        return sectors[0].length > 1 || sectors[1].length > 1;
    };

    ShapesQuadTree.prototype.getSectors = function getSectors (rect) {
        var bottomRight = rect.bottomRight();
        var bottomX = Math.floor(bottomRight.x / ROOT_SIZE);
        var bottomY = Math.floor(bottomRight.y / ROOT_SIZE);
        var sectors = [ [], [] ];
        for (var x = Math.floor(rect.origin.x / ROOT_SIZE); x <= bottomX; x++) {
            sectors[0].push(x);
        }
        for (var y = Math.floor(rect.origin.y / ROOT_SIZE); y <= bottomY; y++) {
            sectors[1].push(y);
        }
        return sectors;
    };

    return ShapesQuadTree;
}(Class));

function zIndexComparer(x1, x2) {
    if (x1._zIndex < x2._zIndex) {
        return 1;
    }
    if (x1._zIndex > x2._zIndex) {
        return -1;
    }

    return 0;
}

export default ShapesQuadTree;
//# sourceMappingURL=shapes-quad-tree.js.map
