import Surface from './surface';
import { transform } from '../geometry';
import Group from '../shapes/group';

export default function exportImage(group, options) {
    var defaults = {
        width: "800px", height: "600px",
        cors: "Anonymous"
    };

    var exportRoot = group;
    var bbox = group.clippedBBox();


    if (bbox) {
        var origin = bbox.getOrigin();
        exportRoot = new Group();
        exportRoot.transform(transform().translate(-origin.x, -origin.y));
        exportRoot.children.push(group);

        var size = bbox.getSize();
        defaults.width = size.width + "px";
        defaults.height = size.height + "px";
    }

    var surfaceOptions = Object.assign(defaults, options);

    var container = document.createElement("div");
    var style = container.style;

    style.display = "none";
    style.width = surfaceOptions.width;
    style.height = surfaceOptions.height;
    document.body.appendChild(container);

    var surface = new Surface(container, surfaceOptions);
    surface.suspendTracking();
    surface.draw(exportRoot);

    var promise = surface.image();
    var destroy = function () {
        surface.destroy();
        document.body.removeChild(container);
    };
    promise.then(destroy, destroy);

    return promise;
}
//# sourceMappingURL=export-image.js.map
