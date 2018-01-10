import close from './close';

export default function closeOrLess(a, b, tolerance) {
    return a < b || close(a, b, tolerance);
}
//# sourceMappingURL=close-or-less.js.map
