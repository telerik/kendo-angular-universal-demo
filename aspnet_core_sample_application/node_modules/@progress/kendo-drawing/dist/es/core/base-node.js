import { Class } from '../common';

var BaseNode = (function (Class) {
    function BaseNode(srcElement) {
        Class.call(this);

        this.childNodes = [];
        this.parent = null;

        if (srcElement) {
            this.srcElement = srcElement;
            this.observe();
        }
    }

    if ( Class ) BaseNode.__proto__ = Class;
    BaseNode.prototype = Object.create( Class && Class.prototype );
    BaseNode.prototype.constructor = BaseNode;

    BaseNode.prototype.destroy = function destroy () {
        var this$1 = this;

        if (this.srcElement) {
            this.srcElement.removeObserver(this);
        }

        var children = this.childNodes;
        for (var i = 0; i < children.length; i++) {
            this$1.childNodes[i].destroy();
        }

        this.parent = null;
    };

    BaseNode.prototype.load = function load () {};

    BaseNode.prototype.observe = function observe () {
        if (this.srcElement) {
            this.srcElement.addObserver(this);
        }
    };

    BaseNode.prototype.append = function append (node) {
        this.childNodes.push(node);
        node.parent = this;
    };

    BaseNode.prototype.insertAt = function insertAt (node, pos) {
        this.childNodes.splice(pos, 0, node);
        node.parent = this;
    };

    BaseNode.prototype.remove = function remove (index, count) {
        var this$1 = this;

        var end = index + count;
        for (var i = index; i < end; i++) {
            this$1.childNodes[i].removeSelf();
        }
        this.childNodes.splice(index, count);
    };

    BaseNode.prototype.removeSelf = function removeSelf () {
        this.clear();
        this.destroy();
    };

    BaseNode.prototype.clear = function clear () {
        this.remove(0, this.childNodes.length);
    };

    BaseNode.prototype.invalidate = function invalidate () {
        if (this.parent) {
            this.parent.invalidate();
        }
    };

    BaseNode.prototype.geometryChange = function geometryChange () {
        this.invalidate();
    };

    BaseNode.prototype.optionsChange = function optionsChange () {
        this.invalidate();
    };

    BaseNode.prototype.childrenChange = function childrenChange (e) {
        if (e.action === "add") {
            this.load(e.items, e.index);
        } else if (e.action === "remove") {
            this.remove(e.index, e.items.length);
        }

        this.invalidate();
    };

    return BaseNode;
}(Class));

export default BaseNode;
//# sourceMappingURL=base-node.js.map
