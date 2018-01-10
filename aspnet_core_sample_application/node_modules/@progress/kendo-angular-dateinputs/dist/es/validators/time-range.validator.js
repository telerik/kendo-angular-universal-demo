import { isInTimeRange } from '../util';
/**
 * @hidden
 */
export var timeRangeValidator = function (min, max) {
    return function (control) {
        if (!min || !max || !control.value) {
            return null;
        }
        var err = {
            timeRangeError: {
                maxValue: max,
                minValue: min,
                value: control.value
            }
        };
        return isInTimeRange(control.value, min, max) ? null : err;
    };
};
