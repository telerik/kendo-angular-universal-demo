import { createPromise, encodeBase64 } from '../util';
import exportGroup from './export-group';

export default function exportSVG(group, options) {
    var svg = exportGroup(group);

    if (!options || !options.raw) {
        svg = "data:image/svg+xml;base64," + encodeBase64(svg);
    }

    return createPromise().resolve(svg);
}

//# sourceMappingURL=export-svg.js.map
