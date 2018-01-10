export function saveAs(data, fileName, options) {
  if ( options === void 0 ) options = {};

  var save = postToProxy;

  if (options.forceProxy && !options.proxyURL) {
    throw new Error('No proxyURL is set, but forceProxy is true');
  }

  if (!options.forceProxy) {
    if (canDownload()) {
      save = saveAsDataURI;
    }

    if (navigator.msSaveBlob) {
      save = saveAsBlob;
    }
  }

  save(data, fileName, options);
}

var anchor = function () { return document.createElement('a'); };
var canDownload = function () { return 'download' in anchor(); };

function saveAsBlob(data, fileName) {
  var blob = data; // could be a Blob object

  if (typeof data === 'string') {
    var parts = data.split(';base64,');
    var contentType = parts[0];
    var base64 = atob(parts[1]);
    var array = new Uint8Array(base64.length);

    for (var idx = 0; idx < base64.length; idx++) {
      array[idx] = base64.charCodeAt(idx);
    }

    blob = new Blob([ array.buffer ], { type: contentType });
  }

  navigator.msSaveBlob(blob, fileName);
}

function saveAsDataURI(data, fileName) {
  var dataURI = data;
  if (window.Blob && data instanceof Blob) {
    dataURI = URL.createObjectURL(data);
  }

  var fileSaver = anchor();
  fileSaver.download = fileName;
  fileSaver.href = dataURI;

  var e = document.createEvent('MouseEvents');
  e.initMouseEvent('click', true, false, window,
  0, 0, 0, 0, 0, false, false, false, false, 0, null);

  fileSaver.dispatchEvent(e);
  setTimeout(function () { return URL.revokeObjectURL(dataURI); });
}

function postToProxy(dataURI, fileName, options) {
  if (!options.proxyURL) {
    return;
  }

  var form = document.createElement('form');
  form.setAttribute('action', options.proxyURL);
  form.setAttribute('method', 'POST');
  form.setAttribute('target', options.proxyTarget || '_self');

  var formData = options.proxyData || {};
  formData.fileName = fileName;

  var parts = dataURI.split(";base64,");
  formData.contentType = parts[0].replace("data:", "");
  formData.base64 = parts[1];

  for (var name in formData) {
    if (formData.hasOwnProperty(name)) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', name);
      input.setAttribute('value', formData[name]);

      form.appendChild(input);
    }
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}


//# sourceMappingURL=save-as.js.map
