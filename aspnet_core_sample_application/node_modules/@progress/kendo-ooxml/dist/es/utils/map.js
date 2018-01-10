export default function map(array, func) {
    return array.reduce(function (result, el, i) {
        var val = func(el, i);
        if (val != null) {
            result.push(val);
        }
        return result;
    }, []);
}
//# sourceMappingURL=map.js.map
