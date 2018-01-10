import { PRECISION } from '../constants';

import { round } from '../../util';

export default function close(a, b, tolerance) {
    if ( tolerance === void 0 ) tolerance = PRECISION;

    return round(Math.abs(a - b), tolerance) === 0;
}
//# sourceMappingURL=close.js.map
