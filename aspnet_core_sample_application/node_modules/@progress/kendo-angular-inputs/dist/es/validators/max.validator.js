/**
 * @hidden
 */
export var createMaxValidator = function (maxValue) {
    return function (c) {
        var err = {
            maxError: {
                maxValue: maxValue,
                value: c.value
            }
        };
        return (c.value !== null && c.value > maxValue) ? err : null;
    };
};
