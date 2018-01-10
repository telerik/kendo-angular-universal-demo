function now() {
    return new Date().getTime();
}

export default function throttle(fn, delay) {
    var lastExecTime = 0;
    var timeout;

    if (!delay || delay <= 0) {
        return fn;
    }

    var throttled = function() {
        var elapsed = now() - lastExecTime;
        var args = arguments;

        var exec = function() {
            fn.apply(null, args);
            lastExecTime = now();
        };

        // first execution
        if (!lastExecTime) {
            return exec();
        }

        if (timeout) {
            clearTimeout(timeout);
        }

        if (elapsed > delay) {
            exec();
        } else {
            timeout = setTimeout(exec, delay - elapsed);
        }
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
    };

    return throttled;
}
//# sourceMappingURL=throttle.js.map
