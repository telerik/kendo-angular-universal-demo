export default function unbindEvents(element, events) {
    if ( events === void 0 ) events = {};

    for (var name in events) {
        var eventNames = name.trim().split(" ");
        for (var idx = 0; idx < eventNames.length; idx++) {
            element.removeEventListener(eventNames[idx], events[name], false);
        }
    }
}
//# sourceMappingURL=unbind-events.js.map
