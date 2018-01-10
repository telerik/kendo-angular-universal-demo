var KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var fromCharCode = String.fromCharCode;

function encodeUTF8(input) {
    var output = "";

    for (var i = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);

        if (c < 0x80) {
            // One byte
            output += fromCharCode(c);
        } else if (c < 0x800) {
            // Two bytes
            output += fromCharCode(0xC0 | (c >>> 6));
            output += fromCharCode(0x80 | (c & 0x3f));
        } else if (c < 0x10000) {
            // Three bytes
            output += fromCharCode(0xE0 | (c >>> 12));
            output += fromCharCode(0x80 | (c >>> 6 & 0x3f));
            output += fromCharCode(0x80 | (c & 0x3f));
        }
    }

    return output;
}

export default function encodeBase64(input) {
    var output = "";
    var i = 0;

    var utfInput = encodeUTF8(input);

    while (i < utfInput.length) {
        var chr1 = utfInput.charCodeAt(i++);
        var chr2 = utfInput.charCodeAt(i++);
        var chr3 = utfInput.charCodeAt(i++);

        var enc1 = chr1 >> 2;
        var enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        var enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        var enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
            KEY_STR.charAt(enc1) + KEY_STR.charAt(enc2) +
            KEY_STR.charAt(enc3) + KEY_STR.charAt(enc4);
    }

    return output;
}
//# sourceMappingURL=encode-base64.js.map
