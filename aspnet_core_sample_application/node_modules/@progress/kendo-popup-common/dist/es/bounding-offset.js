var boundingOffset = function (element) {
    if (!element.getBoundingClientRect) {
        return {
            bottom: element.innerHeight,
            left: 0,
            right: element.innerWidth,
            top: 0
        };
    }

    var ref = element.getBoundingClientRect();
    var bottom = ref.bottom;
    var left = ref.left;
    var right = ref.right;
    var top = ref.top;

    return {
        bottom: bottom,
        left: left,
        right: right,
        top: top
    };
};

export default boundingOffset;

//# sourceMappingURL=bounding-offset.js.map
