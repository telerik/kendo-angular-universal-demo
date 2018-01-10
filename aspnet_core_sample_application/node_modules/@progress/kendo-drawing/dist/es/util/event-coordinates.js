import defined from './defined';

export default function eventCoordinates(e) {
    if (defined((e.x || {}).location)) {
        return {
            x: e.x.location,
            y: e.y.location
        };
    }

    return {
        x: e.pageX || e.clientX || 0,
        y: e.pageY || e.clientY || 0
    };
}
//# sourceMappingURL=event-coordinates.js.map
