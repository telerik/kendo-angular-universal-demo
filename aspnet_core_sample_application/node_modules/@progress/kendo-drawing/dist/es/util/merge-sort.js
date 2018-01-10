/* eslint-disable no-multi-spaces, key-spacing, indent, camelcase, space-before-blocks, eqeqeq, brace-style */
/* eslint-disable space-infix-ops, space-before-function-paren, array-bracket-spacing, object-curly-spacing */
/* eslint-disable no-nested-ternary, max-params, default-case, no-else-return, no-empty */
/* eslint-disable no-param-reassign, no-var, block-scoped-var */

// mergeSort is stable.
export default function mergeSort(a, cmp) {
    if (a.length < 2) {
        return a.slice();
    }
    function merge(a, b) {
        var r = [], ai = 0, bi = 0, i = 0;
        while (ai < a.length && bi < b.length) {
            if (cmp(a[ai], b[bi]) <= 0) {
                r[i++] = a[ai++];
            } else {
                r[i++] = b[bi++];
            }
        }
        if (ai < a.length) {
            r.push.apply(r, a.slice(ai));
        }
        if (bi < b.length) {
            r.push.apply(r, b.slice(bi));
        }
        return r;
    }
    return (function sort(a) {
        if (a.length <= 1) {
            return a;
        }
        var m = Math.floor(a.length / 2);
        var left = a.slice(0, m);
        var right = a.slice(m);
        left = sort(left);
        right = sort(right);
        return merge(left, right);
    })(a);
}
//# sourceMappingURL=merge-sort.js.map
