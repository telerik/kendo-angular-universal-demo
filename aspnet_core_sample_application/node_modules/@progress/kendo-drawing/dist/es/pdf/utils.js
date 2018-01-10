/* eslint-disable no-multi-spaces, key-spacing, indent, camelcase, space-before-blocks, eqeqeq, brace-style */
/* eslint-disable space-infix-ops, space-before-function-paren, array-bracket-spacing, object-curly-spacing */
/* eslint-disable no-nested-ternary, max-params, default-case, no-else-return, no-empty */
/* eslint-disable no-param-reassign, no-var, block-scoped-var */

// XXX: remove this junk (assume `true`) when we no longer have to support IE < 10
var HAS_TYPED_ARRAYS = typeof Uint8Array !== 'undefined';

var BASE64 = (function(){
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return {
        decode: function(str) {
            var input = str.replace(/[^A-Za-z0-9\+\/\=]/g, ""), i = 0, n = input.length, output = [];

            while (i < n) {
                var enc1 = keyStr.indexOf(input.charAt(i++));
                var enc2 = keyStr.indexOf(input.charAt(i++));
                var enc3 = keyStr.indexOf(input.charAt(i++));
                var enc4 = keyStr.indexOf(input.charAt(i++));

                var chr1 = (enc1 << 2) | (enc2 >>> 4);
                var chr2 = ((enc2 & 15) << 4) | (enc3 >>> 2);
                var chr3 = ((enc3 & 3) << 6) | enc4;

                output.push(chr1);
                if (enc3 != 64) {
                    output.push(chr2);
                }
                if (enc4 != 64) {
                    output.push(chr3);
                }
            }

            return output;
        },
        encode: function(bytes) {
            var i = 0, n = bytes.length;
            var output = "";

            while (i < n) {
                var chr1 = bytes[i++];
                var chr2 = bytes[i++];
                var chr3 = bytes[i++];

                var enc1 = chr1 >>> 2;
                var enc2 = ((chr1 & 3) << 4) | (chr2 >>> 4);
                var enc3 = ((chr2 & 15) << 2) | (chr3 >>> 6);
                var enc4 = chr3 & 63;

                if (i - n == 2) {
                    enc3 = enc4 = 64;
                } else if (i - n == 1) {
                    enc4 = 64;
                }

                output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
            }
            return output;
        }
    };
}());

function BinaryStream(data) {
    var offset = 0, length = 0;
    if (data == null) {
        data = HAS_TYPED_ARRAYS ? new Uint8Array(256) : [];
    } else {
        length = data.length;
    }

    var ensure = HAS_TYPED_ARRAYS ? function(len) {
        if (len >= data.length) {
            var tmp = new Uint8Array(Math.max(len + 256, data.length * 2));
            tmp.set(data, 0);
            data = tmp;
        }
    } : function() {};

    var get = HAS_TYPED_ARRAYS ? function() {
        return new Uint8Array(data.buffer, 0, length);
    } : function() {
        return data;
    };

    var write = HAS_TYPED_ARRAYS ? function(bytes) {
        if (typeof bytes == "string") {
            return writeString(bytes);
        }
        var len = bytes.length;
        ensure(offset + len);
        data.set(bytes, offset);
        offset += len;
        if (offset > length) {
            length = offset;
        }
    } : function(bytes) {
        if (typeof bytes == "string") {
            return writeString(bytes);
        }
        for (var i = 0; i < bytes.length; ++i) {
            writeByte(bytes[i]);
        }
    };

    var slice = HAS_TYPED_ARRAYS ? function(start, length) {
        if (data.buffer.slice) {
            return new Uint8Array(data.buffer.slice(start, start + length));
        } else {
            // IE10
            var x = new Uint8Array(length);
            x.set(new Uint8Array(data.buffer, start, length));
            return x;
        }
    } : function(start, length) {
        return data.slice(start, start + length);
    };

    function eof() {
        return offset >= length;
    }
    function readByte() {
        return offset < length ? data[offset++] : 0;
    }
    function writeByte(b) {
        ensure(offset);
        data[offset++] = b & 0xFF;
        if (offset > length) {
            length = offset;
        }
    }
    function readShort() {
        return (readByte() << 8) | readByte();
    }
    function writeShort(w) {
        writeByte(w >> 8);
        writeByte(w);
    }
    function readShort_() {
        var w = readShort();
        return w >= 0x8000 ? w - 0x10000 : w;
    }
    function writeShort_(w) {
        writeShort(w < 0 ? w + 0x10000 : w);
    }
    function readLong() {
        return (readShort() * 0x10000) + readShort();
    }
    function writeLong(w) {
        writeShort((w >>> 16) & 0xFFFF);
        writeShort(w & 0xFFFF);
    }
    function readLong_() {
        var w = readLong();
        return w >= 0x80000000 ? w - 0x100000000 : w;
    }
    function writeLong_(w) {
        writeLong(w < 0 ? w + 0x100000000 : w);
    }
    function readFixed() {
        return readLong() / 0x10000;
    }
    function writeFixed(f) {
        writeLong(Math.round(f * 0x10000));
    }
    function readFixed_() {
        return readLong_() / 0x10000;
    }
    function writeFixed_(f) {
        writeLong_(Math.round(f * 0x10000));
    }
    function read(len) {
        return times(len, readByte);
    }
    function readString(len) {
        return String.fromCharCode.apply(String, read(len));
    }
    function writeString(str) {
        for (var i = 0; i < str.length; ++i) {
            writeByte(str.charCodeAt(i));
        }
    }
    function times(n, reader) {
        for (var ret = new Array(n), i = 0; i < n; ++i) {
            ret[i] = reader();
        }
        return ret;
    }

    var stream = {
        eof         : eof,
        readByte    : readByte,
        writeByte   : writeByte,
        readShort   : readShort,
        writeShort  : writeShort,
        readLong    : readLong,
        writeLong   : writeLong,
        readFixed   : readFixed,
        writeFixed  : writeFixed,

        // signed numbers.
        readShort_  : readShort_,
        writeShort_ : writeShort_,
        readLong_   : readLong_,
        writeLong_  : writeLong_,
        readFixed_  : readFixed_,
        writeFixed_ : writeFixed_,

        read        : read,
        write       : write,
        readString  : readString,
        writeString : writeString,

        times       : times,
        get         : get,
        slice       : slice,

        offset: function(pos) {
            if (pos != null) {
                offset = pos;
                return stream;
            }
            return offset;
        },

        skip: function(nbytes) {
            offset += nbytes;
        },

        toString: function() {
            throw new Error("FIX CALLER.  BinaryStream is no longer convertible to string!");
        },

        length: function() { return length; },

        saveExcursion: function(f) {
            var pos = offset;
            try {
                return f();
            } finally {
                offset = pos;
            }
        },

        writeBase64: function(base64) {
            if (window.atob) {
                writeString(window.atob(base64));
            } else {
                write(BASE64.decode(base64));
            }
        },
        base64: function() {
            return BASE64.encode(get());
        }
    };

    return stream;
}

function ucs2decode(string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;
    while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
                // unmatched surrogate; only append this code unit, in case the next
                // code unit is the high surrogate of a surrogate pair
                output.push(value);
                counter--;
            }
        } else {
            output.push(value);
        }
    }
    return output;
}

function ucs2encode(array) {
    return array.map(function(value){
        var output = "";
        if (value > 0xFFFF) {
            value -= 0x10000;
            output += String.fromCharCode(value >>> 10 & 0x3FF | 0xD800);
            value = 0xDC00 | value & 0x3FF;
        }
        output += String.fromCharCode(value);
        return output;
    }).join("");
}

export {
    BASE64,
    BinaryStream,
    ucs2decode,
    ucs2encode
};

//# sourceMappingURL=utils.js.map
