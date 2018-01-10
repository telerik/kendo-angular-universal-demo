import Element from './element';
import Traversable from '../mixins/traversable';
import { append } from '../util';
import elementsBoundingBox from './utils/elements-bounding-box';
import elementsClippedBoundingBox from './utils/elements-clippend-bounding-box';

var Group = (function (Element) {
    function Group(options) {
        Element.call(this, options);
        this.children = [];
    }

    if ( Element ) Group.__proto__ = Element;
    Group.prototype = Object.create( Element && Element.prototype );
    Group.prototype.constructor = Group;

    Group.prototype.childrenChange = function childrenChange (action, items, index) {
        this.trigger("childrenChange",{
            action: action,
            items: items,
            index: index
        });
    };

    Group.prototype.append = function append$1 () {
        append(this.children, arguments);
        this._reparent(arguments, this);

        this.childrenChange("add", arguments);

        return this;
    };

    Group.prototype.insert = function insert (index, element) {
        this.children.splice(index, 0, element);
        element.parent = this;

        this.childrenChange("add", [ element ], index);

        return this;
    };

    Group.prototype.insertAt = function insertAt (element, index) {
        return this.insert(index, element);
    };

    Group.prototype.remove = function remove (element) {
        var index = this.children.indexOf(element);
        if (index >= 0) {
            this.children.splice(index, 1);
            element.parent = null;
            this.childrenChange("remove", [ element ], index);
        }

        return this;
    };

    Group.prototype.removeAt = function removeAt (index) {
        if (0 <= index && index < this.children.length) {
            var element = this.children[index];
            this.children.splice(index, 1);
            element.parent = null;
            this.childrenChange("remove", [ element ], index);
        }

        return this;
    };

    Group.prototype.clear = function clear () {
        var items = this.children;
        this.children = [];
        this._reparent(items, null);

        this.childrenChange("remove", items, 0);

        return this;
    };

    Group.prototype.bbox = function bbox (transformation) {
        return elementsBoundingBox(this.children, true, this.currentTransform(transformation));
    };

    Group.prototype.rawBBox = function rawBBox () {
        return elementsBoundingBox(this.children, false);
    };

    Group.prototype._clippedBBox = function _clippedBBox (transformation) {
        return elementsClippedBoundingBox(this.children, this.currentTransform(transformation));
    };

    Group.prototype.currentTransform = function currentTransform (transformation) {
        return Element.prototype.currentTransform.call(this, transformation) || null;
    };

    Group.prototype.containsPoint = function containsPoint (point, parentTransform) {
        if (this.visible()) {
            var children = this.children;
            var transform = this.currentTransform(parentTransform);
            for (var idx = 0; idx < children.length; idx++) {
                if (children[idx].containsPoint(point, transform)) {
                    return true;
                }
            }
        }
        return false;
    };

    Group.prototype._reparent = function _reparent (elements, newParent) {
        var this$1 = this;

        for (var i = 0; i < elements.length; i++) {
            var child = elements[i];
            var parent = child.parent;
            if (parent && parent !== this$1 && parent.remove) {
                parent.remove(child);
            }

            child.parent = newParent;
        }
    };

    return Group;
}(Element));

Group.prototype.nodeType = "Group";

Traversable.extend(Group.prototype, "children");

export default Group;
//# sourceMappingURL=group.js.map
