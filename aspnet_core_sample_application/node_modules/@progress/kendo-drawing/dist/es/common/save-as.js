// XXX: the following will not work with IE9 (requires server proxy).
export default function saveAs(options) {
    var dataURI = options.dataURI;
    var fileName = options.fileName;
    var data = dataURI;

    if (typeof data == "string" && window.Blob) {
        var parts = data.split(";base64,");
        var contentType = parts[0];
        var base64 = atob(parts[1]);
        var array = new Uint8Array(base64.length);
        for (var idx = 0; idx < base64.length; idx++) {
            array[idx] = base64.charCodeAt(idx);
        }
        data = new Blob([ array.buffer ], { type: contentType });
    }
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(data, fileName);
    } else {
        var link = document.createElement("a");
        link.download = fileName;
        data = link.href = URL.createObjectURL(data);
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, false, window,
                         0, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent(e);
        setTimeout(function() {
            URL.revokeObjectURL(data);
        });
    }
}
//# sourceMappingURL=save-as.js.map
