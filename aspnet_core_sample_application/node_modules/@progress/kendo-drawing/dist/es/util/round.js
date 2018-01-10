function pow(p) {
    if (p) {
        return Math.pow(10, p);
    }

    return 1;
}

export default function round(value, precision) {
    var power = pow(precision);
    return Math.round(value * power) / power;
}
//# sourceMappingURL=round.js.map
