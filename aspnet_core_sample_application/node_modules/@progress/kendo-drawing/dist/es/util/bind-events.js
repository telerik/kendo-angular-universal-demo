export default function bindEvents(element, events) {
    for (var eventName in events) {
        var eventNames = eventName.trim().split(" ");
        for (var idx = 0; idx < eventNames.length; idx++) {
            element.addEventListener(eventNames[idx], events[eventName], false);
        }
    }
}
//# sourceMappingURL=bind-events.js.map
