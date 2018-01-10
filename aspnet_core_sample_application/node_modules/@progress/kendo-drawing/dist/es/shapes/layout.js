import Group from './group';
import Size from '../geometry/size';
import Rect from '../geometry/rect';
import Point from '../geometry/point';
import createTransform from '../geometry/transform';
import translateToPoint from '../alignment/translate-to-point';
import alignStart from '../alignment/align-start';
import alignStartReverse from '../alignment/align-start-reverse';

var DEFAULT_OPTIONS = {
    alignContent: "start",
    justifyContent: "start",
    alignItems: "start",
    spacing: 0,
    orientation: "horizontal",
    lineSpacing: 0,
    wrap: true,
    revers: false
};

var forEach = function (elements, callback) {
    elements.forEach(callback);
};

var forEachReverse = function (elements, callback) {
    var length = elements.length;

    for (var idx = length - 1; idx >= 0; idx--) {
        callback(elements[idx], idx);
    }
};

var Layout = (function (Group) {
    function Layout(rect, options) {
        Group.call(this, Object.assign({}, DEFAULT_OPTIONS, options));
        this._rect = rect;
        this._fieldMap = {};
    }

    if ( Group ) Layout.__proto__ = Group;
    Layout.prototype = Object.create( Group && Group.prototype );
    Layout.prototype.constructor = Layout;

    Layout.prototype.rect = function rect (value) {
        if (value) {
            this._rect = value;
            return this;
        }

        return this._rect;
    };

    Layout.prototype._initMap = function _initMap () {
        var options = this.options;
        var fieldMap = this._fieldMap;
        if (options.orientation === "horizontal") {
            fieldMap.sizeField = "width";
            fieldMap.groupsSizeField = "height";
            fieldMap.groupAxis = "x";
            fieldMap.groupsAxis = "y";
        } else {
            fieldMap.sizeField = "height";
            fieldMap.groupsSizeField = "width";
            fieldMap.groupAxis = "y";
            fieldMap.groupsAxis = "x";
        }

        if (options.reverse) {
            this.forEach = forEachReverse;
            this.justifyAlign = alignStartReverse;
        } else {
            this.forEach = forEach;
            this.justifyAlign = alignStart;
        }
    };

    Layout.prototype.reflow = function reflow () {
        var this$1 = this;

        if (!this._rect || this.children.length === 0) {
            return;
        }
        this._initMap();

        if (this.options.transform) {
            this.transform(null);
        }

        var options = this.options;
        var rect = this._rect;
        var ref = this._initGroups();
        var groups = ref.groups;
        var groupsSize = ref.groupsSize;
        var ref$1 = this._fieldMap;
        var sizeField = ref$1.sizeField;
        var groupsSizeField = ref$1.groupsSizeField;
        var groupAxis = ref$1.groupAxis;
        var groupsAxis = ref$1.groupsAxis;
        var groupOrigin = new Point();
        var elementOrigin = new Point();
        var size = new Size();
        var groupStart = alignStart(groupsSize, rect, options.alignContent, groupsAxis, groupsSizeField);
        var elementStart, group, groupBox;

        var arrangeElements = function (bbox, idx) {
            var element = group.elements[idx];

            elementOrigin[groupAxis] = elementStart;
            elementOrigin[groupsAxis] = alignStart(bbox.size[groupsSizeField], groupBox, options.alignItems, groupsAxis, groupsSizeField);
            translateToPoint(elementOrigin, bbox, element);
            elementStart += bbox.size[sizeField] + options.spacing;
        };

        for (var groupIdx = 0; groupIdx < groups.length; groupIdx++) {
            group = groups[groupIdx];
            groupOrigin[groupAxis] = elementStart = this$1.justifyAlign(group.size, rect, options.justifyContent, groupAxis, sizeField);
            groupOrigin[groupsAxis] = groupStart;
            size[sizeField] = group.size;
            size[groupsSizeField] = group.lineSize;
            groupBox = new Rect(groupOrigin, size);
            this$1.forEach(group.bboxes, arrangeElements);

            groupStart += group.lineSize + options.lineSpacing;
        }

        if (!options.wrap && group.size > rect.size[sizeField]) {
            var scale = rect.size[sizeField] / groupBox.size[sizeField];
            var scaledStart = groupBox.topLeft().scale(scale, scale);
            var scaledSize = groupBox.size[groupsSizeField] * scale;
            var newStart = alignStart(scaledSize, rect, options.alignContent, groupsAxis, groupsSizeField);
            var transform = createTransform();
            if (groupAxis === "x") {
                transform.translate(rect.origin.x - scaledStart.x, newStart - scaledStart.y);
            } else {
                transform.translate(newStart - scaledStart.x, rect.origin.y - scaledStart.y);
            }
            transform.scale(scale, scale);

            this.transform(transform);
        }
    };

    Layout.prototype._initGroups = function _initGroups () {
        var this$1 = this;

        var ref = this;
        var options = ref.options;
        var children = ref.children;
        var lineSpacing = options.lineSpacing;
        var wrap = options.wrap;
        var spacing = options.spacing;
        var sizeField = this._fieldMap.sizeField;
        var group = this._newGroup();
        var groups = [];
        var addGroup = function() {
            groups.push(group);
            groupsSize += group.lineSize + lineSpacing;
        };
        var groupsSize = -lineSpacing;

        for (var idx = 0; idx < children.length; idx++) {
            var element = children[idx];
            var bbox = children[idx].clippedBBox();
            if (element.visible() && bbox) {
                if (wrap && group.size + bbox.size[sizeField] + spacing > this$1._rect.size[sizeField]) {
                    if (group.bboxes.length === 0) {
                        this$1._addToGroup(group, bbox, element);
                        addGroup();
                        group = this$1._newGroup();
                    } else {
                        addGroup();
                        group = this$1._newGroup();
                        this$1._addToGroup(group, bbox, element);
                    }
                } else {
                    this$1._addToGroup(group, bbox, element);
                }
            }
        }

        if (group.bboxes.length) {
            addGroup();
        }

        return {
            groups: groups,
            groupsSize: groupsSize
        };
    };

    Layout.prototype._addToGroup = function _addToGroup (group, bbox, element) {
        group.size += bbox.size[this._fieldMap.sizeField] + this.options.spacing;
        group.lineSize = Math.max(bbox.size[this._fieldMap.groupsSizeField], group.lineSize);
        group.bboxes.push(bbox);
        group.elements.push(element);
    };

    Layout.prototype._newGroup = function _newGroup () {
        return {
            lineSize: 0,
            size: -this.options.spacing,
            bboxes: [],
            elements: []
        };
    };

    return Layout;
}(Group));

export default Layout;
//# sourceMappingURL=layout.js.map
