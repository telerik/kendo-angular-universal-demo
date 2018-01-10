"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge = function (data, left, middle, right, compare) {
    var leftLength = middle - left;
    var rightLength = right - middle;
    var temp = [];
    for (var idx = 0; idx < leftLength; idx++) {
        temp.push(data[left + idx]);
    }
    var cursor1 = 0;
    var cursor2 = middle;
    var dest = left;
    do {
        if (compare(data[cursor2], temp[cursor1]) < 0) {
            data[dest++] = data[cursor2++];
            rightLength--;
        }
        else {
            data[dest++] = temp[cursor1++];
            leftLength--;
        }
    } while (rightLength > 0 && leftLength > 0);
    while (leftLength) {
        data[dest++] = temp[cursor1++];
        leftLength--;
    }
    while (rightLength) {
        data[dest++] = data[cursor2++];
        rightLength--;
    }
};
/**
 * @hidden
 */
exports.sort = function (data, start, end, compare) {
    if (end - start < 2) {
        return;
    }
    var mid = (start + end) >>> 1; // tslint:disable-line:no-bitwise
    exports.sort(data, start, mid, compare);
    exports.sort(data, mid, end, compare);
    merge(data, start, mid, end, compare);
};
