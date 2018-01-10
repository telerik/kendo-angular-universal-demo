export function swing(position) {
    return 0.5 - Math.cos(position * Math.PI) / 2;
}

export function linear(position) {
    return position;
}

export function easeOutElastic(position, time, start, diff) {
    var s = 1.70158,
        p = 0,
        a = diff;

    if (position === 0) {
        return start;
    }

    if (position === 1) {
        return start + diff;
    }

    if (!p) {
        p = 0.5;
    }

    if (a < Math.abs(diff)) {
        a = diff;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(diff / a);
    }

    return a * Math.pow(2, -10 * position) *
           Math.sin((Number(position) - s) * (1.1 * Math.PI) / p) + diff + start;
}

//# sourceMappingURL=easing-functions.js.map
