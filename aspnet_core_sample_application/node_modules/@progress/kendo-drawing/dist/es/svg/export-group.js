import RootNode from './root-node';
import { Group } from '../shapes';
import { transform } from '../geometry';
import { SVG_NS } from './constants';

export default function exportGroup(group) {
    var root = new RootNode({
        skipBaseHref: true
    });
    var bbox = group.clippedBBox();
    var rootGroup = group;

    if (bbox) {
        var origin = bbox.getOrigin();
        var exportRoot = new Group();
        exportRoot.transform(transform().translate(-origin.x, -origin.y));
        exportRoot.children.push(group);
        rootGroup = exportRoot;
    }

    root.load([ rootGroup ]);

    var svg = "<?xml version='1.0' ?><svg xmlns='" + SVG_NS + "' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'>" + (root.render()) + "</svg>";

    root.destroy();

    return svg;
}
//# sourceMappingURL=export-group.js.map
