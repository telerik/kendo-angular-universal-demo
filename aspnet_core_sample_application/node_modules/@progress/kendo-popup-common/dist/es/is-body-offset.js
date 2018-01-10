import offsetParent from './offset-parent';

var isBodyOffset = function (element) { return (offsetParent(element) === element.ownerDocument.body); };

export default isBodyOffset;

//# sourceMappingURL=is-body-offset.js.map
