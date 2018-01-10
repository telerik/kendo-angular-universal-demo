export default function eventElement(e) {
    if ( e === void 0 ) e = {};

    return e.touch ? e.touch.initialTouch : e.target;
}
//# sourceMappingURL=event-element.js.map
