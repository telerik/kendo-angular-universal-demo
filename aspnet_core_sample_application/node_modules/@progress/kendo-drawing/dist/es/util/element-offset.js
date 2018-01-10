export default function elementOffset(element) {
    var box = element.getBoundingClientRect();

    var documentElement = document.documentElement;

    return {
        top: box.top + (window.pageYOffset || documentElement.scrollTop) - (documentElement.clientTop || 0),
        left: box.left + (window.pageXOffset || documentElement.scrollLeft) - (documentElement.clientLeft || 0)
    };
}
//# sourceMappingURL=element-offset.js.map
