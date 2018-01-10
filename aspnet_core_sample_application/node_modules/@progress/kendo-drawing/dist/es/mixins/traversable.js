
var Traversable = {
    extend: function(proto, childrenField) {
        proto.traverse = function(callback) {
            var children = this[childrenField];

            for (var i = 0; i < children.length; i++) {
                var child = children[i];

                if (child.traverse) {
                    child.traverse(callback);
                } else {
                    callback(child);
                }
            }

            return this;
        };
    }
};

export default Traversable;
//# sourceMappingURL=traversable.js.map
