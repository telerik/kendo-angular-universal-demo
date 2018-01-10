/* eslint-disable key-spacing,no-multi-spaces,no-param-reassign */

var literals = {
    1    : "i",       10   : "x",       100  : "c",
    2    : "ii",      20   : "xx",      200  : "cc",
    3    : "iii",     30   : "xxx",     300  : "ccc",
    4    : "iv",      40   : "xl",      400  : "cd",
    5    : "v",       50   : "l",       500  : "d",
    6    : "vi",      60   : "lx",      600  : "dc",
    7    : "vii",     70   : "lxx",     700  : "dcc",
    8    : "viii",    80   : "lxxx",    800  : "dccc",
    9    : "ix",      90   : "xc",      900  : "cm",
    1000 : "m"
};

export default function arabicToRoman(n) {
    var values = [ 1000,
                   900 , 800, 700, 600, 500, 400, 300, 200, 100,
                   90  , 80 , 70 , 60 , 50 , 40 , 30 , 20 , 10 ,
                   9   , 8  , 7  , 6  , 5  , 4  , 3  , 2  , 1 ];

    var roman = "";
    while (n > 0) {
        if (n < values[0]) {
            values.shift();
        } else {
            roman += literals[values[0]];
            n -= values[0];
        }
    }
    return roman;
}
//# sourceMappingURL=arabic-to-roman.js.map
