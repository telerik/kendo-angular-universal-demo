import { SVG_NS } from '../constants';

var renderSVG = function(container, svg) {
    container.innerHTML = svg;
};

if (typeof document !== "undefined") {
    var testFragment = "<svg xmlns='" + SVG_NS + "'></svg>";
    var testContainer = document.createElement("div");
    var hasParser = typeof DOMParser !== "undefined";

    testContainer.innerHTML = testFragment;

    if (hasParser && testContainer.firstChild.namespaceURI !== SVG_NS) {
        renderSVG = function(container, svg) {
            var parser = new DOMParser();
            var chartDoc = parser.parseFromString(svg, "text/xml");
            var importedDoc = document.adoptNode(chartDoc.documentElement);

            container.innerHTML = "";
            container.appendChild(importedDoc);
        };
    }
}

export default renderSVG;
//# sourceMappingURL=render-svg.js.map
