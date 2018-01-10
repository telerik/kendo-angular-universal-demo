export default function createStackElements(elements) {
    var stackElements = [];

    for (var idx = 0; idx < elements.length; idx++) {
        var element = elements[idx];
        var bbox = element.clippedBBox();
        if (bbox) {
            stackElements.push({
                element: element,
                bbox: bbox
            });
        }
    }

    return stackElements;
}
//# sourceMappingURL=create-stack-elements.js.map
