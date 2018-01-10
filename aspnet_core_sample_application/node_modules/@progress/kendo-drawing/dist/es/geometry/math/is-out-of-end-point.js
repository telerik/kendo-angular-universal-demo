import { deg } from '../../util';
import transform from '../transform';

export default function isOutOfEndPoint(endPoint, controlPoint, point) {
    var angle = deg(Math.atan2(controlPoint.y - endPoint.y, controlPoint.x - endPoint.x));
    var rotatedPoint = point.transformCopy(transform().rotate(-angle, endPoint));

    return rotatedPoint.x < endPoint.x;
}
//# sourceMappingURL=is-out-of-end-point.js.map
