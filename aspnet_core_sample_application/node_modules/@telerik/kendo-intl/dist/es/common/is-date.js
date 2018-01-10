var objectToString = {}.toString;
var DATE_STRING = "[object Date]";

export default function isDate(value) {
    return objectToString.call(value) === DATE_STRING;
}
//# sourceMappingURL=is-date.js.map
