import translateToPoint from './translate-to-point';
import stackElements from './stack-elements';

function getStacks(elements, rect, sizeField) {
    var maxSize = rect.size[sizeField];
    var stacks = [];
    var stack = [];
    var stackSize = 0;
    var element, bbox;

    var addElementToStack = function() {
        stack.push({
            element: element,
            bbox: bbox
        });
    };

    for (var idx = 0; idx < elements.length; idx++) {
        element = elements[idx];

        bbox = element.clippedBBox();
        if (bbox) {
            var size = bbox.size[sizeField];
            if (stackSize + size > maxSize) {
                if (stack.length) {
                    stacks.push(stack);
                    stack = [];
                    addElementToStack();
                    stackSize = size;
                } else {
                    addElementToStack();
                    stacks.push(stack);
                    stack = [];
                    stackSize = 0;
                }
            } else {
                addElementToStack();
                stackSize += size;
            }
        }
    }

    if (stack.length) {
        stacks.push(stack);
    }

    return stacks;
}

export default function wrapElements(elements, rect, axis, otherAxis, sizeField) {
    var stacks = getStacks(elements, rect, sizeField);
    var origin = rect.origin.clone();
    var result = [];

    for (var idx = 0; idx < stacks.length; idx++) {
        var stack = stacks[idx];
        var startElement = stack[0];
        origin[otherAxis] = startElement.bbox.origin[otherAxis];
        translateToPoint(origin, startElement.bbox, startElement.element);
        startElement.bbox.origin[axis] = origin[axis];
        stackElements(stack, axis, otherAxis, sizeField);
        result.push([]);
        for (var elementIdx = 0; elementIdx < stack.length; elementIdx++) {
            result[idx].push(stack[elementIdx].element);
        }
    }
    return result;
}
//# sourceMappingURL=wrap-elements.js.map
