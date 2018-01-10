import { isPresent } from './utils';
var getterCache = {};
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
// tslint:disable-next-line:no-string-literal
getterCache['undefined'] = function (obj) { return obj; };
/**
 * @hidden
 */
export var getter = function (field, safe) {
    var key = field + safe;
    if (getterCache[key]) {
        return getterCache[key];
    }
    var fields = [];
    field.replace(FIELD_REGEX, function (_, index, indexAccessor, field) {
        fields.push(isPresent(index) ? index : (indexAccessor || field));
        return undefined;
    });
    getterCache[key] = function (obj) {
        var result = obj;
        for (var idx = 0; idx < fields.length; idx++) {
            result = result[fields[idx]];
            if (!isPresent(result) && safe) {
                return result;
            }
        }
        return result;
    };
    return getterCache[key];
};
