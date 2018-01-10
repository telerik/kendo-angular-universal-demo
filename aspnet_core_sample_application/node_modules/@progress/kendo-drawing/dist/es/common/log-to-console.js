/* eslint-disable no-console */

export default function logToConsole(message) {
    var console = window.console;

    if (typeof(console) != "undefined" && console.log) {
        console.log(message);
    }
}
//# sourceMappingURL=log-to-console.js.map
