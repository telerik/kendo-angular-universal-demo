/**
 * @hidden
 */
export var createMinValidator = function (minValue) {
    return function (c) {
        var err = {
            minError: {
                minValue: minValue,
                value: c.value
            }
        };
        return (c.value !== null && c.value < minValue) ? err : null;
    };
};
